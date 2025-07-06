import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  maxZoom?: number;
  minZoom?: number;
  zoomStep?: number;
}

interface Position {
  x: number;
  y: number;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  src,
  alt,
  className = '',
  maxZoom = 5,
  minZoom = 0.5,
  zoomStep = 0.2
}) => {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Handle wheel zoom (desktop)
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const mousePos = { x: e.clientX, y: e.clientY };
    
    // Convert mouse position to content coordinates
    const contentPos = {
      x: (mousePos.x - rect.left - offset.x) / scale,
      y: (mousePos.y - rect.top - offset.y) / scale
    };
    
    // Calculate new scale
    const zoomDirection = e.deltaY > 0 ? -1 : 1;
    const newScale = Math.max(minZoom, Math.min(maxZoom, scale + (zoomDirection * zoomStep)));
    
    if (newScale === scale) return;
    
    // Calculate new offset to keep the mouse position fixed
    const newOffset = {
      x: offset.x + (scale * contentPos.x) - (newScale * contentPos.x),
      y: offset.y + (scale * contentPos.y) - (newScale * contentPos.y)
    };
    
    setScale(newScale);
    setOffset(newOffset);
  }, [scale, offset, minZoom, maxZoom, zoomStep]);

  // Handle mouse down (desktop)
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left mouse button
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  }, [offset]);

  // Handle mouse move (desktop)
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  }, [isDragging, dragStart]);

  // Handle mouse up (desktop)
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Handle touch start (mobile)
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    
    if (e.touches.length === 1) {
      // Single touch - start dragging
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({ x: touch.clientX - offset.x, y: touch.clientY - offset.y });
    }
  }, [offset]);

  // Handle touch move (mobile)
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    
    if (e.touches.length === 1 && isDragging) {
      // Single touch drag
      const touch = e.touches[0];
      setOffset({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  }, [isDragging, dragStart]);

  // Handle touch end (mobile)
  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Zoom controls
  const zoomIn = useCallback(() => {
    const newScale = Math.min(maxZoom, scale + zoomStep);
    setScale(newScale);
  }, [scale, maxZoom, zoomStep]);

  const zoomOut = useCallback(() => {
    const newScale = Math.max(minZoom, scale - zoomStep);
    setScale(newScale);
  }, [scale, minZoom, zoomStep]);

  const resetZoom = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const fitToContainer = useCallback(() => {
    if (!containerRef.current || !imageRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const image = imageRef.current;
    
    // Calculate scale to fit image in container
    const scaleX = container.width / image.naturalWidth;
    const scaleY = container.height / image.naturalHeight;
    const fitScale = Math.min(scaleX, scaleY, 1); // Don't scale up beyond original size
    
    setScale(fitScale);
    setOffset({ x: 0, y: 0 });
  }, []);

  // Event listeners setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add wheel event listener
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    // Add mouse event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleWheel, handleMouseMove, handleMouseUp]);

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={zoomIn}
          disabled={scale >= maxZoom}
          className="bg-white/90 hover:bg-white shadow-lg"
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={zoomOut}
          disabled={scale <= minZoom}
          className="bg-white/90 hover:bg-white shadow-lg"
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={resetZoom}
          className="bg-white/90 hover:bg-white shadow-lg"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={fitToContainer}
          className="bg-white/90 hover:bg-white shadow-lg"
        >
          <Maximize2 className="w-4 h-4" />
        </Button>
      </div>

      {/* Zoom Level Indicator */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
        {Math.round(scale * 100)}%
      </div>

      {/* Interaction Layer */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'none' }}
      >
        {/* Content Layer */}
        <motion.div
          className="origin-top-left"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          }}
          transition={{ type: "tween", duration: isDragging ? 0 : 0.1 }}
        >
          <img
            ref={imageRef}
            src={src}
            alt={alt}
            className="block max-w-none"
            draggable={false}
            onLoad={fitToContainer}
          />
        </motion.div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/70 text-white text-xs px-3 py-2 rounded-lg">
        <div className="flex flex-wrap gap-4 justify-center text-center">
          <span>🖱️ Scroll to zoom</span>
          <span>🖱️ Drag to pan</span>
          <span>📱 Touch & drag to pan</span>
          <span>🔘 Use buttons to zoom</span>
        </div>
      </div>
    </div>
  );
};

export default ZoomableImage; 