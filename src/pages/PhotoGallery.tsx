import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Calendar, 
  Filter, 
  Download, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Building,
  Home,
  MapPin,
  Clock,
  Eye,
  Grid3X3,
  List,
  Search
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "timeline">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Photos", count: 48 },
    { id: "foundation", name: "Foundation Work", count: 12 },
    { id: "structure", name: "Structure Progress", count: 15 },
    { id: "interior", name: "Interior Work", count: 8 },
    { id: "amenities", name: "Amenities", count: 7 },
    { id: "exterior", name: "Exterior & Landscaping", count: 6 }
  ];

  const photos = [
    // Foundation Work
    {
      id: 1,
      title: "Foundation Excavation Complete",
      category: "foundation",
      date: "2024-03-15",
      month: "March 2024",
      description: "Deep foundation excavation completed for the entire project area",
      photographer: "Site Engineer Team",
      tags: ["excavation", "foundation", "groundwork"]
    },
    {
      id: 2,
      title: "Basement Waterproofing",
      category: "foundation", 
      date: "2024-04-20",
      month: "April 2024",
      description: "Advanced waterproofing system installation in basement levels",
      photographer: "Quality Control Team",
      tags: ["waterproofing", "basement", "protection"]
    },
    {
      id: 3,
      title: "Foundation Concrete Pouring",
      category: "foundation",
      date: "2024-05-10",
      month: "May 2024", 
      description: "High-grade concrete pouring for foundation with steel reinforcement",
      photographer: "Construction Team",
      tags: ["concrete", "pouring", "reinforcement"]
    },
    
    // Structure Progress
    {
      id: 4,
      title: "Ground Floor Slab Completion",
      category: "structure",
      date: "2024-07-15",
      month: "July 2024",
      description: "Ground floor slab work completed with precision engineering",
      photographer: "Site Engineer Team",
      tags: ["slab", "ground floor", "structure"]
    },
    {
      id: 5,
      title: "Column Construction - Tower A",
      category: "structure",
      date: "2024-08-20",
      month: "August 2024",
      description: "Reinforced concrete columns rising for Tower A structure",
      photographer: "Progress Documentation Team",
      tags: ["columns", "tower", "concrete"]
    },
    {
      id: 6,
      title: "5th Floor Progress",
      category: "structure",
      date: "2024-11-10",
      month: "November 2024",
      description: "Fifth floor structural work nearing completion",
      photographer: "Site Engineer Team", 
      tags: ["5th floor", "progress", "structure"]
    },
    {
      id: 7,
      title: "7th Floor Slab Work",
      category: "structure",
      date: "2024-12-25",
      month: "December 2024",
      description: "Seventh floor slab casting in progress with quality checks",
      photographer: "Quality Assurance Team",
      tags: ["7th floor", "slab", "casting"]
    },
    {
      id: 8,
      title: "Current Progress - 8th Floor",
      category: "structure",
      date: "2025-01-05",
      month: "January 2025",
      description: "Latest progress showing 8th floor construction initiation",
      photographer: "Site Documentation Team",
      tags: ["8th floor", "current", "latest"]
    },

    // Interior Work
    {
      id: 9,
      title: "Sample Apartment Interior",
      category: "interior",
      date: "2024-10-15",
      month: "October 2024",
      description: "Premium interior finishing in sample apartment unit",
      photographer: "Interior Design Team",
      tags: ["interior", "apartment", "finishing"]
    },
    {
      id: 10,
      title: "Lobby Area Progress",
      category: "interior",
      date: "2024-11-20",
      month: "November 2024",
      description: "Grand lobby interior work with marble flooring installation",
      photographer: "Interior Team",
      tags: ["lobby", "marble", "flooring"]
    },

    // Amenities
    {
      id: 11,
      title: "Swimming Pool Excavation",
      category: "amenities",
      date: "2024-09-10",
      month: "September 2024",
      description: "Olympic-size swimming pool area excavation completed",
      photographer: "Amenities Team",
      tags: ["swimming pool", "excavation", "amenities"]
    },
    {
      id: 12,
      title: "Clubhouse Foundation",
      category: "amenities",
      date: "2024-10-05",
      month: "October 2024",
      description: "Clubhouse foundation work with modern architectural design",
      photographer: "Site Engineer Team",
      tags: ["clubhouse", "foundation", "architecture"]
    },
    {
      id: 13,
      title: "Gymnasium Area Setup",
      category: "amenities",
      date: "2024-11-15",
      month: "November 2024",
      description: "State-of-the-art gymnasium area structural preparation",
      photographer: "Amenities Development Team",
      tags: ["gymnasium", "fitness", "setup"]
    },

    // Exterior & Landscaping
    {
      id: 14,
      title: "Central Park Landscaping",
      category: "exterior",
      date: "2024-12-10",
      month: "December 2024",
      description: "3-acre central park landscaping design implementation",
      photographer: "Landscape Team",
      tags: ["central park", "landscaping", "green"]
    },
    {
      id: 15,
      title: "Building Facade Progress",
      category: "exterior",
      date: "2024-12-20",
      month: "December 2024",
      description: "Modern facade installation with premium materials",
      photographer: "Exterior Team",
      tags: ["facade", "exterior", "modern"]
    }
  ];

  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = selectedCategory === "all" || photo.category === selectedCategory;
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const groupedByMonth = filteredPhotos.reduce((acc, photo) => {
    if (!acc[photo.month]) {
      acc[photo.month] = [];
    }
    acc[photo.month].push(photo);
    return acc;
  }, {} as Record<string, typeof photos>);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredPhotos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredPhotos.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/construction-progress" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-4 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Construction Progress
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Pearl
              </span>{" "}
              <span className="text-white">The Central Park</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-4">
              Construction Photo Gallery
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Complete visual documentation of our construction journey
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-orange-500/20 px-4 py-2 rounded-lg border border-orange-500/30">
                <div className="text-lg font-bold text-orange-400">{filteredPhotos.length}</div>
                <div className="text-sm text-gray-300">Photos</div>
              </div>
              <div className="bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-500/30">
                <div className="text-lg font-bold text-blue-400">15+</div>
                <div className="text-sm text-gray-300">Months</div>
              </div>
              <div className="bg-green-500/20 px-4 py-2 rounded-lg border border-green-500/30">
                <div className="text-lg font-bold text-green-400">6</div>
                <div className="text-sm text-gray-300">Categories</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Search and View Mode */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search photos by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                onClick={() => setViewMode("grid")}
                className="flex items-center gap-2"
              >
                <Grid3X3 className="w-4 h-4" />
                Grid
              </Button>
              <Button
                variant={viewMode === "timeline" ? "default" : "outline"}
                onClick={() => setViewMode("timeline")}
                className="flex items-center gap-2"
              >
                <List className="w-4 h-4" />
                Timeline
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Photo Grid */}
        {viewMode === "grid" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <Badge className="absolute top-2 right-2 bg-orange-500 text-white">
                    {categories.find(c => c.id === photo.category)?.name}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2">{photo.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{photo.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {photo.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Camera className="w-3 h-3" />
                      {photo.photographer}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Timeline View */}
        {viewMode === "timeline" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {Object.entries(groupedByMonth)
              .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
              .map(([month, monthPhotos]) => (
                <motion.div
                  key={month}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-orange-500" />
                    {month}
                    <Badge variant="secondary">{monthPhotos.length} photos</Badge>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {monthPhotos.map((photo, index) => (
                      <motion.div
                        key={photo.id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gray-50 rounded-lg p-4 cursor-pointer group"
                        onClick={() => openLightbox(filteredPhotos.findIndex(p => p.id === photo.id))}
                      >
                        <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mb-3">
                          <Camera className="w-8 h-8 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h4 className="font-medium text-slate-800 mb-1">{photo.title}</h4>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{photo.description}</p>
                        <div className="text-xs text-gray-500">{photo.date}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        )}

        {/* Empty State */}
        {filteredPhotos.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No photos found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-semibold">{filteredPhotos[selectedImage]?.title}</h3>
                <Button variant="ghost" size="sm" onClick={closeLightbox}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="relative">
                <div className="h-96 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Camera className="w-24 h-24 text-orange-500" />
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="p-4">
                <p className="text-gray-600 mb-4">{filteredPhotos[selectedImage]?.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {filteredPhotos[selectedImage]?.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {filteredPhotos[selectedImage]?.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Camera className="w-3 h-3" />
                      {filteredPhotos[selectedImage]?.photographer}
                    </div>
                  </div>
                  <div className="text-orange-500 font-medium">
                    {selectedImage + 1} of {filteredPhotos.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery; 