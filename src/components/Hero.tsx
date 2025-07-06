import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";
import Logo from "@/assets/Logo_Horizontal.svg?react";
import { Calendar, Download, MapPin, Star, Shield, TrendingUp, Sparkles, Home,  Facebook, Instagram, Youtube } from "lucide-react";

import { useState, useEffect } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  
  // Animated counter state
  const [happyFamilies, setHappyFamilies] = useState(0);
  const [areaSize, setAreaSize] = useState(0);
  
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  useEffect(() => {
    const familyInterval = setInterval(() => {
      setHappyFamilies(600);
    }, 20);
    
    const areaInterval = setInterval(() => {
      setAreaSize(prev => prev < 30 ? prev + 1 : 30);
    }, 50);
    
    setTimeout(() => {
      clearInterval(familyInterval);
      clearInterval(areaInterval);
    }, 2000);
    
    return () => {
      clearInterval(familyInterval);
      clearInterval(areaInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-foreground overflow-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/uploads/gateViews.jpg"
          alt="Pearl The Central Park - Luxury Township in Ranchi Argora"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/30 dark:from-black/10 dark:via-black/15 dark:to-black/30 from-white/20 via-white/10 to-black/20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-orange-400/40 dark:bg-orange-400/40 bg-orange-600/60 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

     
      <div className="absolute top-10 left-10 z-10 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="text-center cursor-pointer"
        >
          <div className="h-14">
            <Logo className="w-full h-full fill-white dark:fill-white fill-slate-800 pb-2 border-b border-white dark:border-white border-slate-800" />
          </div>
          <span className="font-thin text-white dark:text-white text-slate-800 uppercase text-xs sm:text-sm">
            Creating Homes to Inspire
          </span>
        </motion.div>
      </div>

      
    

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.7, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.6, 0.1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-gradient-to-r from-orange-600/20 to-red-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 py-10 flex flex-col min-h-screen justify-between">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="text-center"
        >
          <motion.div 
            className="text-5xl md:text-7xl font-medium text-white dark:text-white text-slate-800 font-display mb-2 py-1 leading-[0.6em] md:leading-[0.6em]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              filter: [
                "drop-shadow(0 2px 4px rgba(184, 134, 11, 0.6))", 
                "drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3))", 
                "drop-shadow(0 2px 4px rgba(184, 134, 11, 0.6))"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: "linear-gradient(90deg, #B8860B 0%, #DAA520 40%, rgba(255, 248, 220, 0.95) 45%, rgba(255, 255, 255, 1) 50%, rgba(255, 248, 220, 0.95) 55%, #DAA520 60%, #B8860B 100%)",
              backgroundSize: "200% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            <h1 className="leading-none">Pearl</h1><span className="text-4xl md:text-6xl font-light">The Central Park</span>
          </motion.div>
          <motion.p 
            className="text-white dark:text-white text-slate-800 uppercase text-sm sm:text-base lg:text-lg tracking-wider border-t border-white dark:border-white border-slate-800 inline-block px-4 pt-2 drop-shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            An Ultra Premium Highrise Residential Township
          </motion.p>
          
          <motion.div 
            className="flex divide-white flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm mt-4 text-white drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex items-center gap-1 pr-2">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Argora, Pundag Road, Ranchi</span>
            </div>    
            <span>|</span>   
            <span className="text-green-400 font-semibold">Starting ₹80 Lakhs*</span>
          </motion.div>
        </motion.div>

      {/* Social Media Icons - Top Right */}
<div className="absolute top-6 right-6 z-10 flex space-x-4 pt-6">
  <a href="https://www.facebook.com/motiinfra" target="_blank" rel="noopener noreferrer">
    <Facebook className="w-5 h-5 text-gray-300 hover:text-orange-400 transition-colors" />
  </a>
  <a href="https://www.youtube.com/@motiinfraheights/" target="_blank" rel="noopener noreferrer">
    <Youtube className="w-5 h-5 text-gray-300 hover:text-orange-400 transition-colors" />
  </a>
  <a href="https://www.instagram.com/motiinfraheights/" target="_blank" rel="noopener noreferrer">
    <Instagram className="w-5 h-5 text-gray-300 hover:text-orange-400 transition-colors" />
  </a>
  
</div>

        {/* Bottom Section */}
        <div className="w-full relative py-4 sm:py-6">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 dark:from-black/50 dark:via-black/30 dark:to-black/50 from-white/60 via-white/40 to-white/60 z-0 backdrop-blur-sm rounded-lg"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-8 sm:mb-12 relative"
          >
            <p className="text-sm sm:text-base lg:text-xl text-white italic max-w-3xl mx-auto px-4">"BIG NEWS FOR RANCHI!"</p>
            <motion.p 
              className="text-sm sm:text-base lg:text-xl text-white mb-4 sm:mb-6 max-w-3xl mx-auto px-4">
              "Ranchi's Argora-Pundag Road Set for <strong>₹141 Crore Four-Lane Upgrade</strong>, Boosting Connectivity for Pearl The Central Park!"
            </motion.p>
            {/*<motion.p*/}
            {/*  className="text-sm sm:text-base lg:text-xl text-white italic mb-4 sm:mb-6 max-w-3xl mx-auto px-4"*/}
            {/*  animate={{ opacity: [0.7, 1, 0.7] }}*/}
            {/*  transition={{ duration: 2, repeat: Infinity }}*/}
            {/*>*/}
            {/*  "Ranchi's Largest Township in the Heart of the City - Where Modern Luxury Meets Timeless Comfort"*/}
            {/*</motion.p>*/}
            
            {/* Achievement Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm mb-4 sm:mb-6 px-4">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-3 py-2 rounded-full flex items-center gap-2 border border-green-500/30"
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                RERA Approved | {areaSize}+ Acre | {happyFamilies}+ Families
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1, type: "spring" }}
                className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 px-3 py-2 rounded-full flex items-center gap-2 border border-blue-500/30"
              >
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                Gated Residential Society
              </motion.span>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center space-y-4 relative px-4"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <ContactModal
                trigger={
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 text-sm sm:text-base shadow-lg">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Book Site Visit Now
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </Button>
                  </motion.div>
                }
                defaultMessage="I would like to schedule a site visit for Pearl The Central Park"
              />

              <ContactModal
                trigger={
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-6 sm:px-8 py-3 text-sm sm:text-base">
                      <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Download Brochure
                    </Button>
                  </motion.div>
                }
                actionType="brochure_download"
                brochureUrl="/uploads/brochure/pearl-central-park-brochure.pdf"
                defaultMessage="Please send me more details of Pearl The Central Park"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
