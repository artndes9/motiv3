import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ContactModal from "./ContactModal";
import ZoomableImage from "./ZoomableImage";
import { motion } from "framer-motion";
import Logo from "@/assets/Logo_Vertical_Actual.svg?react";
import { Building, Home, MapPin, Eye, Download, Maximize, Info } from "lucide-react";

const FloorPlans = () => {
  const [selectedBlock, setSelectedBlock] = useState("A");

  const blockA = {
    blockName: "Block A",
    floorMap: "/uploads/floorPlans/TOWERA.jpg",
    flatDescription: [
      { flatNo: "A1-101", type: "4BHK + 4 TOI. + S", builtUpArea: "2594", totalArea: "3502" },
      { flatNo: "A1-102", type: "4BHK + 4 TOI. + S", builtUpArea: "2299", totalArea: "3103" },
      { flatNo: "A1-103", type: "3BHK + 3 TOI. + S", builtUpArea: "1757", totalArea: "2372" },
      { flatNo: "A2-104", type: "3BHK + 3 TOI.", builtUpArea: "1513", totalArea: "2043" },
      { flatNo: "A2-105", type: "3BHK + 3 TOI.", builtUpArea: "1513", totalArea: "2043" },
      { flatNo: "A2-106", type: "3BHK + 3 TOI.", builtUpArea: "1513", totalArea: "2043" },
      { flatNo: "A3-107", type: "3BHK + 3 TOI.", builtUpArea: "1513", totalArea: "2043" },
      { flatNo: "A3-108", type: "4BHK + 4 TOI. + S", builtUpArea: "2269", totalArea: "3063" },
      { flatNo: "A3-109", type: "4BHK + 4 TOI. + S", builtUpArea: "2269", totalArea: "3063" },
      { flatNo: "A4-110", type: "3BHK + 3 TOI.", builtUpArea: "1513", totalArea: "2043" },
      { flatNo: "A4-111", type: "3BHK + 3 TOI.", builtUpArea: "1757", totalArea: "2372" },
      { flatNo: "A4-112", type: "3BHK + 3 TOI.", builtUpArea: "1513", totalArea: "2043" },
      { flatNo: "A5-113", type: "4BHK + 4 TOI. + S", builtUpArea: "2534", totalArea: "3421" },
      { flatNo: "A5-114", type: "3BHK + 3 TOI.", builtUpArea: "1513", totalArea: "2043" },
      { flatNo: "A5-115", type: "3BHK + 3 TOI.", builtUpArea: "1513", totalArea: "2043" }
    ]
  };

  const blockB = {
    blockName: "Block B",
    floorMap: "/uploads/floorPlans/TOWERB.jpg",
    flatDescription: [
      { flatNo: "B1-101", type: "3BHK + 3 TOI.", builtUpArea: "1362", totalArea: "1838" },
      { flatNo: "B1-102", type: "3BHK + 3 TOI.", builtUpArea: "1362", totalArea: "1838" },
      { flatNo: "B1-103", type: "3BHK + 3 TOI.", builtUpArea: "1163", totalArea: "1571" },
      { flatNo: "B2-104", type: "3BHK + 3 TOI.", builtUpArea: "1124", totalArea: "1518" },
      { flatNo: "B2-105", type: "3BHK + 3 TOI.", builtUpArea: "1124", totalArea: "1518" },
      { flatNo: "B2-106", type: "3BHK + 3 TOI.", builtUpArea: "1124", totalArea: "1518" },
      { flatNo: "B3-107", type: "3BHK + 3 TOI.", builtUpArea: "1362", totalArea: "1838" },
      { flatNo: "B3-108", type: "3BHK + 3 TOI.", builtUpArea: "1362", totalArea: "1838" },
      { flatNo: "B3-109", type: "3BHK + 3 TOI.", builtUpArea: "1362", totalArea: "1838" },
      { flatNo: "B4-110", type: "3BHK + 3 TOI.", builtUpArea: "1163", totalArea: "1571" },
      { flatNo: "B4-111", type: "3BHK + 3 TOI.", builtUpArea: "1163", totalArea: "1571" },
      { flatNo: "B4-112", type: "2BHK + 2 TOI.", builtUpArea: "842", totalArea: "1136" },
      { flatNo: "B4-113", type: "3BHK + 3 TOI.", builtUpArea: "1163", totalArea: "1571" },
      { flatNo: "B4-114", type: "3BHK + 3 TOI.", builtUpArea: "1362", totalArea: "1838" },
      { flatNo: "B4-115", type: "2BHK + 2 TOI.", builtUpArea: "842", totalArea: "1136" }
    ]
  };

  const blockC = {
    blockName: "Block C",
    floorMap: "/uploads/floorPlans/TOWERC.jpg",
    flatDescription: [
      { flatNo: "C1-101", type: "4BHK + 4 TOL. + S.", builtUpArea: "2322", totalArea: "3134" },
      { flatNo: "C1-102", type: "4BHK + 4 TOL. + S.", builtUpArea: "2322", totalArea: "3134" },
      { flatNo: "C1-103", type: "4BHK + 4 TOL. + S.", builtUpArea: "2322", totalArea: "3134" }
    ]
  };

  const blockD = {
    blockName: "Block D",
    floorMap: "/uploads/floorPlans/TOWERD.jpg",
    flatDescription: [
      { flatNo: "D1-101", type: "3BHK + 3 TOI.", builtUpArea: "1513", totalArea: "2043" },
      { flatNo: "D1-102", type: "3BHK + 3 TOI.", builtUpArea: "1163", totalArea: "1571" },
      { flatNo: "D1-103", type: "3BHK + 3 TOI.", builtUpArea: "1591", totalArea: "2148" },
      { flatNo: "D1-104", type: "3BHK + 3 TOI.", builtUpArea: "1591", totalArea: "2148" },
      { flatNo: "D2-105", type: "3BHK + 3 TOI.", builtUpArea: "1163", totalArea: "1571" },
      { flatNo: "D2-106", type: "3BHK + 3 TOI.", builtUpArea: "1591", totalArea: "2148" },
      { flatNo: "D2-107", type: "3BHK + 3 TOI.", builtUpArea: "1591", totalArea: "2148" },
      { flatNo: "D2-108", type: "3BHK + 3 TOI.", builtUpArea: "1163", totalArea: "1571" },
      { flatNo: "D3-109", type: "3BHK + 3 TOI.", builtUpArea: "1163", totalArea: "1571" },
      { flatNo: "D3-110", type: "3BHK + 3 TOI.", builtUpArea: "1513", totalArea: "2043" },
      { flatNo: "D3-111", type: "3BHK + 3 TOI.", builtUpArea: "1513", totalArea: "2043" }
    ]
  };

  const blocks = { A: blockA, B: blockB, C: blockC, D: blockD };
  const currentBlock = blocks[selectedBlock as keyof typeof blocks];

  // Get unique apartment types for the current block
  const getUniqueTypes = (flats: any[]) => {
    const types = flats.map(flat => flat.type);
    return [...new Set(types)];
  };

  const getTypeColor = (type: string) => {
    if (type.includes("4BHK")) return "bg-purple-100 text-purple-800";
    if (type.includes("3BHK")) return "bg-blue-100 text-blue-800";
    if (type.includes("2BHK")) return "bg-green-100 text-green-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Company Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 w-full"
        >
          <Logo className="h-16 md:h-24 fill-brand max-h-24 mx-auto" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">PEARL THE CENTRAL PARK</h2>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 mb-4">Floor Plans</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-sm md:text-base px-4">
            Explore detailed floor plans for all blocks. Each apartment features private balconies, terraces, 
            or rooftop gardens, providing residents with a tranquil outdoor retreat amidst the bustling cityscape.
          </p>
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm">
            <Building className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">4 Blocks | 15 Floors Each | 650+ Units</span>
            <span className="sm:hidden">4 Blocks | 700+ Units</span>
          </div>
        </motion.div>

        {/* Block Selection Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <div className="grid grid-cols-2 md:flex gap-2 p-1 bg-gray-100 rounded-lg">
              {Object.keys(blocks).map((blockKey) => (
                <Button
                  key={blockKey}
                  variant={selectedBlock === blockKey ? "default" : "ghost"}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    selectedBlock === blockKey 
                      ? "bg-brand-orange text-white shadow-md" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedBlock(blockKey)}
                >
                  <Building className="w-4 h-4 mr-2" />
                  Block {blockKey}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Block Info and Table */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Block Info Card */}
            <Card className="border-orange-200">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-xl text-slate-800">
                  <Building className="w-5 h-5 text-brand-orange" />
                  {currentBlock.blockName}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {getUniqueTypes(currentBlock.flatDescription).map((type, index) => (
                    <Badge key={index} className={`${getTypeColor(type)} text-xs`}>
                      {type}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-700 text-sm">Units per Floor</p>
                    <p className="text-2xl font-bold text-brand-orange">{currentBlock.flatDescription.length}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-700 text-sm">Size Range</p>
                    <p className="text-sm text-gray-600">
                      {Math.min(...currentBlock.flatDescription.map(f => parseInt(f.totalArea)))} - {Math.max(...currentBlock.flatDescription.map(f => parseInt(f.totalArea)))} sq.ft
                    </p>
                  </div>
                </div>
                
                {/* Legend Card */}
                <Card className="bg-blue-50 border-blue-200 mb-4">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-2 mb-3">
                      <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <h5 className="font-semibold text-blue-900 text-sm">Abbreviations Guide</h5>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-800">
                      <div><span className="font-medium">BHK:</span> Bedroom, Hall, Kitchen</div>
                      <div><span className="font-medium">TOI/TOL:</span> Toilets</div>
                      <div><span className="font-medium">S:</span> Servant Quarter</div>
                      <div><span className="font-medium">Built Area:</span> Carpet Area</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Units Table */}
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="text-xs font-semibold text-gray-900 px-3 py-3">FLAT NO.</TableHead>
                        <TableHead className="text-xs font-semibold text-gray-900 px-3 py-3">TYPE</TableHead>
                        <TableHead className="text-xs font-semibold text-gray-900 px-3 py-3 hidden sm:table-cell">BUILT AREA</TableHead>
                        <TableHead className="text-xs font-semibold text-gray-900 px-3 py-3">TOTAL AREA</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-gray-200 bg-white">
                      {currentBlock.flatDescription.map((flat, index) => (
                        <TableRow key={index} className="hover:bg-orange-50 transition-colors">
                          <TableCell className="font-medium text-sm px-3 py-3 text-gray-900">
                            {flat.flatNo}
                          </TableCell>
                          <TableCell className="text-sm px-3 py-3">
                            <Badge className={`${getTypeColor(flat.type)} text-xs whitespace-nowrap`}>
                              {flat.type}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm px-3 py-3 text-gray-900 hidden sm:table-cell">
                            {flat.builtUpArea} sq.ft
                          </TableCell>
                          <TableCell className="text-sm font-semibold px-3 py-3 text-gray-900">
                            {flat.totalArea} sq.ft
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Mobile note */}
                <div className="mt-3 text-xs text-gray-500 sm:hidden">
                  <p>* Built-up area details available on larger screens</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Right Column: Floor Plan and Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Desktop: Direct Floor Plan Display */}
            <div className="hidden md:block">
              <Card className="border-orange-200">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-xl text-slate-800">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                    {currentBlock.blockName} Floor Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 rounded-lg overflow-hidden border border-gray-200">
                    <ZoomableImage
                      src={currentBlock.floorMap}
                      alt={`${currentBlock.blockName} Floor Plan`}
                      className="w-full h-full"
                      maxZoom={5}
                      minZoom={0.1}
                      zoomStep={0.2}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mobile/Tablet: Floor Plan Modal Trigger */}
            <div className="md:hidden">
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="border-orange-200 cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <Maximize className="w-12 h-12 text-brand-orange mx-auto mb-3" />
                        <h4 className="font-semibold text-slate-800 text-lg mb-2">
                          View {currentBlock.blockName} Floor Plan
                        </h4>
                        <p className="text-sm text-gray-600">
                          Click to view detailed floor plan in fullscreen
                        </p>
                      </div>
                      <Button className="bg-brand-orange hover:bg-orange-600 text-white">
                        <Eye className="w-4 h-4 mr-2" />
                        Open Floor Plan
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0">
                  <DialogHeader className="p-4 border-b">
                    <DialogTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-brand-orange" />
                      {currentBlock.blockName} Floor Plan
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 overflow-hidden">
                    <ZoomableImage
                      src={currentBlock.floorMap}
                      alt={`${currentBlock.blockName} Floor Plan`}
                      className="w-full h-full"
                      maxZoom={5}
                      minZoom={0.1}
                      zoomStep={0.2}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Premium Features Card */}
            <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-800 mb-4 text-lg">Premium Features in Every Unit</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0"></div>
                    <span>GVT tiles throughout with premium finishes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0"></div>
                    <span>Jaguar or equivalent bath fittings and modern fixtures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0"></div>
                    <span>Cross ventilation and natural lighting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0"></div>
                    <span>Private balconies with scenic views</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ContactModal 
                  trigger={
                    <Button className="w-full bg-brand-orange hover:bg-orange-600 text-white">
                      <Eye className="w-4 h-4 mr-2" />
                      Schedule Site Visit
                    </Button>
                  }
                  defaultMessage={`I'm interested in viewing ${currentBlock.blockName} at Pearl The Central Park. Please schedule a site visit.`}
                />
                
                <ContactModal 
                  trigger={
                    <Button variant="outline" className="w-full border-orange-400 text-orange-600 hover:bg-orange-50">
                      <Download className="w-4 h-4 mr-2" />
                      Download Brochure
                    </Button>
                  }
                  defaultMessage={`Please send me the detailed brochure and floor plans for ${currentBlock.blockName}.`}
                  actionType="brochure_download"
                  brochureUrl="/uploads/brochure/pearl-central-park-brochure.pdf"
                />
              </div>

              <ContactModal 
                trigger={
                  <Button variant="outline" className="w-full border-slate-400 text-slate-600 hover:bg-slate-50">
                    <Home className="w-4 h-4 mr-2" />
                    Get Pricing Details
                  </Button>
                }
                defaultMessage={`I'd like to know the pricing details for apartments in ${currentBlock.blockName}.`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
