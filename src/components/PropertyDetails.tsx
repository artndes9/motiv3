
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";
import Logo from "@/assets/Logo_Horizontal.svg?react";
import { CheckCircle, Clock, Shield, TrendingUp, Award, MapPin, Eye, Car } from "lucide-react";
import patternImage from "@/assets/pattern.png"; 


const PropertyDetails = () => {
  const premiumFeatures = [
    "GVT Tiles throughout",
    "Jaguar Bath Fittings (or equivalent)",
    "Cross Air Ventilation",
    "Large Bedrooms with Attached Balconies",
    "Proper Sunlight in Every Flat",
    "Hi-Speed Lifts"
  ];

  const stats = [
    { value: "11.42 Acres", label: "in Phase 1", color: "from-orange-500/20 to-orange-600/20", textColor: "text-orange-400" },
    { value: "65%", label: "Open Space", color: "from-green-500/20 to-green-600/20", textColor: "text-green-400" },
    { value: "3 Acres", label: "Lush Green Parks", color: "from-blue-500/20 to-blue-600/20", textColor: "text-blue-400" },
    { value: "30+", label: "World Class Amenities", color: "from-purple-500/20 to-purple-600/20", textColor: "text-purple-400" }
  ];

  const connectivityFeatures = [
    "Easy Airport Access",
    "Close to Bus Stand", 
    "Railway Station Nearby"
  ];

  return (
    <section className=" bg-slate-800 text-white">
        {/* Pattern Overlay */}
   <div className="relative overflow-hidden">
    {/* Pattern Background Overlay */}
    <div
      className="absolute inset-0 z-0 opacity-10 bg-repeat pointer-events-none"
      style={{
        backgroundImage: `url(${patternImage})`,
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "contain", 
        backgroundPosition: "top left",
        opacity: 0.02, 
        margin: 0,
        padding: 0,
      }}
    />
    <div className="py-12 sm:py-16">

   
      <div className="container mx-auto px-4 text-center">
        {/* Company Logo */}
        <motion.div
          className="h-16 sm:h-20 inline-block mx-auto px-4 sm:px-6 border-b border-white mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo className="h-full fill-white pb-3" />
        </motion.div>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-4">
            WHY PEARL THE CENTRAL PARK IS RANCHI'S #1 CHOICE
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Premium 2/3/4 BHK & Penthouses</h3>
          <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm mb-6">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">RERA APPROVED - JHARERA/PROJECT/238/2023</span>
            <span className="sm:hidden">RERA APPROVED</span>
          </div>
        </motion.div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12">
          {/* Features Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Premium Features */}
            <div className="bg-gradient-to-r from-orange-500/10 to-transparent p-4 sm:p-6 rounded-lg border-l-4 border-orange-500">
              <h4 className="text-base sm:text-lg font-bold text-orange-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                Premium Features Inside Every Flat
              </h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Construction Materials */}
            <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-4 sm:p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="text-base sm:text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                Premium Construction Materials
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm text-left">
                Built with TATA Steel and ACC Cement - ensuring durability, strength, and longevity. 
                Your investment is protected with the best materials in the industry.
              </p>
            </div>

            {/* Scenic Views */}
            <div className="bg-gradient-to-r from-green-500/10 to-transparent p-4 sm:p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="text-base sm:text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                Scenic Balcony Views
              </h4>
              <p className="text-gray-300 leading-relaxed text-sm text-left">
                Every balcony offers breathtaking views - Green Lawns, Sports Zone, or Road Views. 
                Wake up to nature and serenity every morning.
              </p>
            </div>

            <ContactModal 
              trigger={
                <Button className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Get Price Details Now
                </Button>
              }
              defaultMessage="I'm interested in knowing the current prices and payment plans for Pearl The Central Park"
            />
          </motion.div>
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <img 
                src="/uploads/e79801f5-5ec6-4380-895c-0bc3d69d865e.jpg"
                alt="Pearl Complex - Aerial View of Premium Township" 
                className="rounded-lg shadow-xl max-w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </div>
        
        {/* Statistics Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center mb-8 sm:mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${stat.color} p-4 sm:p-6 rounded-lg`}
            >
              <h3 className={`text-lg sm:text-2xl font-bold ${stat.textColor} mb-2`}>{stat.value}</h3>
              <p className="text-gray-300 text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Connectivity Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600/20 to-green-600/20 p-4 sm:p-6 rounded-lg border border-blue-500/30 mb-6 sm:mb-8"
        >
          <h4 className="text-lg sm:text-xl font-bold text-blue-300 mb-4 flex items-center gap-2 justify-center">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            Prime Connectivity - Heart of Argora, Ranchi
          </h4>
          <div className="grid sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
            {connectivityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 justify-center">
                <Car className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="sm:mb-8 text-left">
          <p className="mb-2">
            In a significant development for the city's infrastructure, the Chief Minister's Secretariat, Ranchi, has granted administrative approval for a monumental ₹141,06,06,000/- project. This approval is for the four-lane construction of the Argora (Old Argora Chowk) to Naya Sarai (Ring Road) via Pundag path, spanning a total length of 6.175 km.
          </p>
          <p className="mb-2">
            This pivotal project, including bridge construction, land acquisition, utility shifting, plantation, and resettlement & rehabilitation, directly enhances the strategic location of "Pearl The Central Park." Residents can look forward to even more seamless travel and connectivity across Ranchi, reaffirming Pearl The Central Park as the premier address in the heart of the city.
          </p>
          <p>(Issued by: Chief Minister's Secretariat Ranchi, Press Release No. 458/2025)</p>
        </div>

        {/* Urgency Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-red-600/20 to-orange-600/20 p-4 sm:p-6 rounded-lg border border-orange-500/30"
        >
          <h4 className="text-lg sm:text-xl font-bold text-orange-300 mb-2 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            Last Few flats remaining in Phase 1
          </h4>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">Don't miss out on the best units with scenic views and premium locations</p>
          <ContactModal 
            trigger={
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto">
                <Clock className="w-4 h-4 mr-2" />
                Reserve Your Unit Today
              </Button>
            }
            defaultMessage="I want to reserve a unit in Pearl The Central Park before they're sold out"
          />
        </motion.div>
      </div>
       </div>

    </div>
    </section>
  );
};

export default PropertyDetails;
