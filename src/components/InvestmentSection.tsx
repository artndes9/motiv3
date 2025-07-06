import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";
import { TrendingUp, Home, MapPin, Trophy, Shield, Clock, IndianRupee, Building2, Percent, Target, Landmark, TreePine, ShoppingBag } from "lucide-react";
import patternImage from "@/assets/pattern.png"; 

const InvestmentSection = () => {
  const investmentReasons = [
    {
      icon: TrendingUp,
      title: "Exceptional ROI Potential",
      description: "Expected 25-30% appreciation in 2 years with Ranchi's booming real estate market and infrastructure development",
      color: "text-green-400"
    },
    {
      icon: Percent,
      title: "High Rental Yields",
      description: "Premium Argora location commands high rental yields with growing demand from professionals",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "RERA Compliance",
      description: "Government approved project ensuring transparency, timely delivery, and legal security",
      color: "text-orange-400"
    },
    {
      icon: IndianRupee,
      title: "Bank Loan Facility",
      description: "Approved by all major banks with multiple financing options available at competitive rates",
      color: "text-emerald-400"
    },
    {
      icon: Building2,
      title: "Infrastructure Boom",
      description: "₹2000+ crore infrastructure projects within 5km radius boosting property values",
      color: "text-red-400"
    },
    {
      icon: Target,
      title: "Capital Appreciation",
      description: "Argora-Kathal More corridor witnessing 18-22% CAGR in property values",
      color: "text-indigo-400"
    }
  ];

  const residenceReasons = [
    {
      icon: Home,
      title: "Luxury Living Experience",
      description: "30+ premium amenities and world-class facilities for comfortable family life",
      color: "text-pink-400"
    },
    {
      icon: Trophy,
      title: "Prestige Address",
      description: "Live in Ranchi's most sought-after residential complex in prime Argora location",
      color: "text-yellow-400"
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Adjacent to Argora Chowk on Argora-Pundag Road with direct Ring Road connectivity",
      color: "text-purple-400"
    },
    {
      icon: TreePine,
      title: "Green Living",
      description: "3-acre Central Park adjacent with 60% green cover for healthy family environment",
      color: "text-green-400"
    },
    {
      icon: Landmark,
      title: "Premium Connectivity",
      description: "3 minutes to Kathal More, 15 minutes to Ranchi Station, 25 minutes to Airport",
      color: "text-blue-400"
    },
    {
      icon: ShoppingBag,
      title: "In-House Retail",
      description: "Pharmacy, grocery stores, and essential outlets within the society premises",
      color: "text-purple-400"
    },
    {
      icon: Clock,
      title: "24/7 Convenience",
      description: "Round-the-clock access to medical stores and daily essentials without leaving the complex",
      color: "text-cyan-400"
    }
  ];

  const marketInsights = [
    {
      title: "Market Growth",
      value: "22% CAGR",
      description: "Annual property appreciation in Argora corridor"
    },
    {
      title: "Rental Demand",
      value: "95% Occupancy",
      description: "Average occupancy rate in premium Ranchi projects"
    },
   
    {
      title: "2026 Projection",
      value: "~₹9,000/sq.ft",
      description: "Estimated Value for Premium Flats in Argora"
    }
  ];

  return (
    <section className=" bg-gradient-to-b from-slate-900 to-slate-800 text-white">

      
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
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
            PERFECT FOR INVESTMENT & RESIDENCE
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto mb-8">
            Whether you're looking for a smart investment opportunity or your dream home, 
            Pearl The Central Park offers unmatched value in both categories with proven market fundamentals 
            and exceptional growth potential in Ranchi's most strategic location.
          </p>
        </motion.div>

        {/* Market Insights */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-orange-300 mb-8">Market Insights & Growth Projections</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-6 rounded-xl border border-orange-500/30 text-center"
              >
                <div className="text-2xl font-bold text-orange-400 mb-2">{insight.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{insight.title}</div>
                <div className="text-gray-300 text-sm">{insight.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Investment Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-green-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-green-400">Your Smart Investment</h3>
            </div>
            
            <div className="space-y-6">
              {investmentReasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <reason.icon className={`w-6 h-6 ${reason.color} mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-white mb-2">{reason.title}</h4>
                    <p className="text-gray-300 text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <ContactModal 
              trigger={
                <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Get Detailed Investment Report
                </Button>
              }
              defaultMessage="I'm interested in Pearl The Central Park as an investment opportunity. Please share detailed ROI projections, rental yield analysis, and market growth data."
            />
          </motion.div>

          {/* Residence Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-8 rounded-xl border border-orange-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-8 h-8 text-orange-400" />
              <h3 className="text-2xl font-bold text-orange-400">Your Luxury Lifestyle</h3>
            </div>
            
            <div className="space-y-6">
              {residenceReasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <reason.icon className={`w-6 h-6 ${reason.color} mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-white mb-2">{reason.title}</h4>
                    <p className="text-gray-300 text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <ContactModal 
              trigger={
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">
                  <Home className="w-4 h-4 mr-2" />
                  Schedule Home Visit
                </Button>
              }
              defaultMessage="I'm looking for my dream home at Pearl The Central Park. Please schedule a site visit and share floor plans with pricing details."
            />
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-orange-600/20 to-red-600/20 p-8 rounded-xl border border-orange-500/30"
        >
          <h4 className="text-2xl font-bold text-orange-300 mb-4">Ready to Secure Your Future?</h4>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Don't miss this opportunity to be part of Ranchi's most prestigious residential project in the heart of Argora. 
            Limited units available with exclusive early bird pricing and guaranteed ROI potential.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
              <div className="text-lg font-bold text-green-400 mb-1">Investment Special</div>
              <div className="text-sm text-gray-300">Get 25-30% ROI projections & rental yield analysis</div>
            </div>
            <div className="bg-orange-500/20 p-4 rounded-lg border border-orange-500/30">
              <div className="text-lg font-bold text-orange-400 mb-1">Secure Your Spot</div>
              <div className="text-sm text-gray-300">Reserve early and enjoy personalized payment plans—limited units available</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal 
              trigger={
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                  Get Complete Investment Analysis
                </Button>
              }
              defaultMessage="Please send me the complete investment analysis including ROI projections, rental yield data, market comparisons, and payment plans for Pearl The Central Park"
            />
            <ContactModal 
              trigger={
                <Button size="lg" variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white">
                  Book Priority Site Visit
                </Button>
              }
              defaultMessage="I would like to schedule a priority site visit to see Pearl The Central Park and discuss investment/residence options with your sales team"
            />
          </div>
        </motion.div>

        {/* Partner Banks Section */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mt-20"
>
  <h3 className="text-2xl font-bold text-center text-orange-300 mb-4">Partner Banks & Financial Institutions</h3>
  <p className="text-md  text-center text-white mb-8">All other Nationalised & Private Banks to provide a secure and hassle-free investment experience.</p>
  <div className="flex flex-wrap justify-center gap-6 px-2">
    {[
      { name: "UNION", logo: "/uploads/banks/union.png" },
      { name: "SBI", logo: "/uploads/banks/sbi.png" },
      { name: "CENTRAL", logo: "/uploads/banks/central.png" },
      { name: "Maharashtra", logo: "/uploads/banks/maharashtra.png" },
      { name: "PNB", logo: "/uploads/banks/pnb.png" },
      { name: "Baroda", logo: "/uploads/banks/baroda.png" },
      { name: "Indian", logo: "/uploads/banks/indian.png" },
      { name: "HDFC", logo: "/uploads/banks/hdfc.png" },
      { name: "ICICI", logo: "/uploads/banks/icici.png" },
      { name: "AXIS", logo: "/uploads/banks/axis.png" },
      { name: "CANARA", logo: "/uploads/banks/canara.png" },
      { name: "JGB", logo: "/uploads/banks/jgb.webp" },
      { name: "BANKOFINDIA", logo: "/uploads/banks/bankofindia.png" },
      { name: "IDBI", logo: "/uploads/banks/idbi.png" }



    ].map((bank, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center border border-gray-200 hover:shadow-lg transition"
      >
        <img 
          src={bank.logo} 
          alt={bank.name} 
          className="max-h-10 w-auto object-contain"
        />
      </motion.div>
    ))}
  </div>
</motion.div>

      

      </div>
    </div>
    </section>
  );
};

export default InvestmentSection;
