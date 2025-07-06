import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";
import { Button } from "@/components/ui/button";
import {
  Waves,
  Dumbbell,
  Coffee,
  Users,
  TreePine,
  Car,
  Camera,
  Building,
  Zap,
  Book,
  Trophy,
  Eye,
  Star,
  Shield,
  Home,
  GamepadIcon,
  Crown,
} from "lucide-react";
import Logo from "@/assets/Logo_Horizontal.svg?react";
import { useState } from "react";
import patternImage from "@/assets/pattern.png"; 


// --- IMPORT YOUR IMAGES AND VIDEOS HERE ---
// Clubhouse Amenities
import fitnessCenterImage from "@/assets/amenities/gym.jpg"; 
import swimmingPoolVideo from "@/assets/amenities/pool.mp4"; 
import indoorGamesImage from "@/assets/amenities/indoor.jpg";
import miniTheatreImage from "@/assets/amenities/theater.jpg";
import marriageLawnImage from "@/assets/amenities/marriage.jpg";
import guestRoomsImage from "@/assets/amenities/guest.jpg";
import cafeRestaurantImage from "@/assets/amenities/cafe.jpg";
import libraryImage from "@/assets/amenities/library.jpg";

// // Outdoor Amenities
import miniGolfImage from "@/assets/amenities/golf.jpg";
import tennisCourtImage from "@/assets/amenities/tennis.jpg";
import badmintonCourtImage from "@/assets/amenities/badminton.jpg";
import cricketNetImage from "@/assets/amenities/cricket.jpg";
import footballTurfImage from "@/assets/amenities/football.jpg";
import joggingTrackImage from "@/assets/amenities/jogging.jpg";
import greenParksImage from "@/assets/amenities/parks.jpg";
import seatingAreaImage from "@/assets/amenities/senior.jpg";

// Premium Features
import parkingImage from "@/assets/amenities/parking.jpg";
import securityImage from "@/assets/amenities/security.jpg";
import stpPlantImage from "@/assets/amenities/stp.jpg";
import landscapingImage from "@/assets/amenities/landscaping.jpg";
import evChargingImage from "@/assets/amenities/ev.jpg";
import carWashImage from "@/assets/amenities/washing.jpg";


const Infrastructure = () => {
  const [hoveredAmenityId, setHoveredAmenityId] = useState(null);
  const generateAmenityId = (category, index) => `${category}-${index}`;
  const [tooltipPosition, setTooltipPosition] = useState("top"); 


  const clubhouseAmenities = [
    {
      icon: Dumbbell,
      title: "Fitness Center",
      category: "Health",
      media: fitnessCenterImage, // Use the imported variable
      mediaType: "image",
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      category: "Recreation",
      media: swimmingPoolVideo, // Use the imported variable
      mediaType: "video",
    },
    {
      icon: GamepadIcon,
      title: "Indoor Games",
      category: "Entertainment",
      media: indoorGamesImage,
      mediaType: "image",
    },
    {
      icon: Eye,
      title: "Mini Theatre",
      category: "Entertainment",
      media: miniTheatreImage,
      mediaType: "image",
    },
    {
      icon: Users,
      title: "Banquet Lawn",
      category: "Events",
      media: marriageLawnImage,
      mediaType: "image",
    },
    {
      icon: Home,
      title: "Guest Rooms",
      category: "Hospitality",
      media: guestRoomsImage,
      mediaType: "image",
    },
    {
      icon: Coffee,
      title: "Cafe & Restaurant",
      category: "Dining",
      media: cafeRestaurantImage,
      mediaType: "image",
    },
    {
      icon: Book,
      title: "Library",
      category: "Education",
      media: libraryImage,
      mediaType: "image",
    },
  ].map((item, index) => ({ ...item, id: generateAmenityId("clubhouse", index) }));

  const outdoorAmenities = [
    {
      icon: Trophy,
      title: "Mini Golf Course",
      category: "Sports",
      media: miniGolfImage,
      mediaType: "image",
    },
    {
      icon: Trophy,
      title: "Tennis Court",
      category: "Sports",
      media: tennisCourtImage,
      mediaType: "image",
    },
    {
      icon: Trophy,
      title: "Badminton Court",
      category: "Sports",
      media: badmintonCourtImage,
      mediaType: "image",
    },
    {
      icon: Trophy,
      title: "Cricket Net Practice",
      category: "Sports",
      media: cricketNetImage,
      mediaType: "image",
    },
    {
      icon: Trophy,
      title: "Mini Football Turf",
      category: "Sports",
      media: footballTurfImage,
      mediaType: "image",
    },
    {
      icon: TreePine,
      title: "Jogging Track",
      category: "Health",
      media: joggingTrackImage,
      mediaType: "image",
    },
    {
      icon: TreePine,
      title: "2 Large Green Parks",
      category: "Nature",
      media: greenParksImage,
      mediaType: "image",
    },
    {
      icon: Users,
      title: "Old Age Seating Area",
      category: "Community",
      media: seatingAreaImage,
      mediaType: "image",
    },
  ].map((item, index) => ({ ...item, id: generateAmenityId("outdoor", index) }));

  const premiumFeatures = [
    {
      icon: Car,
      title: "Underground Parking",
      category: "Convenience",
      media: parkingImage,
      mediaType: "image",
    },
    {
      icon: Shield,
      title: "24 Hours Security",
      category: "Safety",
      media: securityImage,
      mediaType: "image",
    },
    {
      icon: Zap,
      title: "STP Plant",
      category: "Environment",
      media: stpPlantImage,
      mediaType: "image",
    },
    {
      icon: TreePine,
      title: "Landscaping",
      category: "Aesthetics",
      media: landscapingImage,
      mediaType: "image",
    },
    {
      icon: Zap,
      title: "EV Charging",
      category: "Modern",
      media: evChargingImage,
      mediaType: "image",
    },
    {
      icon: Car,
      title: "Car Wash Zone",
      category: "Convenience",
      media: carWashImage,
      mediaType: "image",
    },
  ].map((item, index) => ({ ...item, id: generateAmenityId("premium", index) }));


  

  return (
    <section className=" bg-slate-800 text-white">


       {/* Pattern Overlay */}
   <div className="relative overflow-hidden py-16">
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
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
            LIVE THE 5-STAR LIFESTYLE
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Big Clubhouse & 30+ Amenities
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Experience resort-style living with world-class facilities. From
            state-of-the-art clubhouse with mini theatre to outdoor sports
            facilities, every amenity is designed for your comfort and luxury.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">
            <Crown className="w-4 h-4" />
            <span>65% Open Space | Underground Parking | 24/7 Security</span>
          </div>
        </motion.div>

        {/* Big Clubhouse Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-2xl font-bold text-orange-400 mb-6 text-center">
            Big Clubhouse with Premium Facilities
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {clubhouseAmenities.map((amenity) => (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-4 rounded-lg text-center hover:from-orange-500/30 hover:to-orange-600/30 transition-all duration-300 group cursor-pointer"
                onMouseEnter={() => setHoveredAmenityId(amenity.id)}
                onMouseLeave={() => setHoveredAmenityId(null)}
              >
                <amenity.icon className="w-6 h-6 mx-auto mb-2 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs md:text-sm text-white font-medium">
                  {amenity.title}
                </p>
                <p className="text-xs text-orange-300 opacity-70">
                  {amenity.category}
                </p>

                {/* Popover/Tooltip for Clubhouse Amenities */}
                <AnimatePresence>
                  {hoveredAmenityId === amenity.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 2 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 md:w-64 bg-slate-700 border border-slate-600 rounded-lg shadow-lg overflow-hidden z-50 pointer-events-none"
                    >
                      {amenity.mediaType === "image" ? (
                        <img
                          src={amenity.media}
                          alt={amenity.title}
                          className="w-full h-auto max-h-40 object-cover"
                        />
                      ) : (
                        <video
                          src={amenity.media}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto max-h-40 object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      )}
                      {/* <div className="p-2 text-xs text-white bg-slate-700">
                        {amenity.title}
                      </div> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outdoor Sports Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-2xl font-bold text-green-400 mb-6 text-center">
            Outdoor Sports & Recreation
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {outdoorAmenities.map((amenity) => (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-gradient-to-br from-green-500/20 to-green-600/20 p-4 rounded-lg text-center hover:from-green-500/30 hover:to-green-600/30 transition-all duration-300 group cursor-pointer"
                onMouseEnter={() => setHoveredAmenityId(amenity.id)}
                onMouseLeave={() => setHoveredAmenityId(null)}
              >
                <amenity.icon className="w-6 h-6 mx-auto mb-2 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs md:text-sm text-white font-medium">
                  {amenity.title}
                </p>
                <p className="text-xs text-green-300 opacity-70">
                  {amenity.category}
                </p>

                {/* Popover/Tooltip for Outdoor Amenities */}
                <AnimatePresence>
                  {hoveredAmenityId === amenity.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 2 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 md:w-64 bg-slate-700 border border-slate-600 rounded-lg shadow-lg overflow-hidden z-50 pointer-events-none"
                    >
                      {amenity.mediaType === "image" ? (
                        <img
                          src={amenity.media}
                          alt={amenity.title}
                          className="w-full h-auto max-h-40 object-cover"
                        />
                      ) : (
                        <video
                          src={amenity.media}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto max-h-40 object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      )}
                      {/* <div className="p-2 text-xs text-white bg-slate-700">
                        {amenity.title}
                      </div> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-2xl font-bold text-blue-400 mb-6 text-center">
            Premium Features & Safety
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {premiumFeatures.map((amenity) => (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 rounded-lg text-center hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 group cursor-pointer"
                onMouseEnter={() => setHoveredAmenityId(amenity.id)}
                onMouseLeave={() => setHoveredAmenityId(null)}
              >
                <amenity.icon className="w-6 h-6 mx-auto mb-2 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs md:text-sm text-white font-medium">
                  {amenity.title}
                </p>
                <p className="text-xs text-blue-300 opacity-70">
                  {amenity.category}
                </p>

                {/* Popover/Tooltip for Premium Features */}
                <AnimatePresence>
                  {hoveredAmenityId === amenity.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 2 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 md:w-64 bg-slate-700 border border-slate-600 rounded-lg shadow-lg overflow-hidden z-50 pointer-events-none"
                    >
                      {amenity.mediaType === "image" ? (
                        <img
                          src={amenity.media}
                          alt={amenity.title}
                          className="w-full h-auto max-h-40 object-cover"
                        />
                      ) : (
                        <video
                          src={amenity.media}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto max-h-40 object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      )}
                      {/* <div className="p-2 text-xs text-white bg-slate-700">
                        {amenity.title}
                      </div> */}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="w-full items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="gap-6 md:gap-12 flex flex-col md:flex-row mb-4 md:mb-12"
          >
            <div className="relative group">
              {/* These images are currently direct paths, if they are in src/assets as well, you'll need to import them */}
              <img
                src="/uploads/c67c9d82-7cf2-4457-98d3-b38117b34880.jpg"
                alt="Sports Facilities - Basketball Court and Recreation Area"
                className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium">
                  World-Class Sports Facilities
                </p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="/uploads/7838e325-6d3c-447c-b160-e49a99d050f4.jpg"
                alt="Swimming Pool Complex with Luxury Features"
                className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium">
                  Resort-Style Swimming Pool
                </p>
              </div>
            </div>
          </motion.div>
          <div className="w-full px-4 md:w-1/2 mx-auto flex justify-center">
            <ContactModal
              trigger={
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  <Eye className="w-4 h-4 mr-2" />
                  Book Site Visit & Amenity Tour
                </Button>
              }
              defaultMessage="I'd like to book a site visit to experience all amenities at Pearl The Central Park"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Infrastructure;