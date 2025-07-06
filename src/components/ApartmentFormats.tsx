
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";
import { Home, Star, Phone, Users, Crown } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "@/assets/Logo_Horizontal.svg?react";

const ApartmentFormats = () => {
  const apartments = [
    {
      title: "2 BHK",
      price: "₹80 Lakhs Onwards",
      area: "1,136 sq.ft",
      features: [
        "Spacious living & dining area",
        "Modern modular kitchen",
        "Cross air ventilation",
        "Large bedroom with attached balcony",
        "GVT tiles throughout",
        "Jaguar bath fittings",
        "Proper sunlight in every room"
      ],
      highlight: "Perfect for First-Time Buyers",
      gradient: "from-orange-50 to-orange-100",
      icon: Home
    },
    {
      title: "3 BHK",
      price: "₹1 Cr. Onwards",
      area: "1,518 – 2,372 sq.ft",
      features: [
        "Large living room with balcony",
        "3 spacious bedrooms with attached baths",
        "Separate servant quarter option",
        "Premium wooden flooring",
        "Hi-speed lift access",
        "Scenic balcony views",
        "Cross ventilation throughout"
      ],
      highlight: "Ideal for Growing Families",
      gradient: "from-orange-100 to-orange-200",
      icon: Users
    },
    {
      title: "4 BHK",
      price: "₹2.1 Cr. Onwards",
      area: "3,063 – 3,502 sq.ft",
      features: [
        "Expansive living & dining hall",
        "4 bedrooms with attached bathrooms",
        "Separate servant quarter included",
        "Private terrace garden",
        "Premium imported marble flooring",
        "Panoramic green lawn views",
        "Underground parking included"
      ],
      highlight: "Spacious Luxury Living",
      gradient: "from-orange-200 to-orange-300",
      icon: Star
    },
    {
      title: "Signature Penthouse",
      price: "₹2.9 Cr. Onwards",
      area: "Premium Sizes Available",
      features: [
        "Duplex design with double-height ceilings",
        "Private rooftop deck & terrace",
        "Multiple ensuite bedrooms + study",
        "Wide balconies with city & park views",
        "Personal elevator access",
        "Premium imported finishes",
        "Exclusive amenities access"
      ],
      highlight: "Ultimate Luxury Experience",
      gradient: "from-orange-300 to-orange-400",
      icon: Crown
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Company Logo */}
        <motion.div
          className="h-20 inline-block mx-auto px-6 border-b border-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Logo className="h-full fill-brand pb-3" />
        </motion.div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">CHOOSE YOUR DREAM HOME</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-4">Premium Apartment Formats</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Every apartment features premium GVT tiles, Jaguar fittings or equivalent, cross ventilation, and scenic balcony views.
            Built with TATA Steel & ACC Cement for unmatched quality and durability.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
            <Star className="w-4 h-4 fill-current" />
            <span>Direct from Builder | Servant Quarters Available</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-6">
            <img
              src="/uploads/eceff030-4844-4f6b-8a57-f7da2e3d9f8a.jpg"
              alt="Luxury Apartment Complex - Pearl The Central Park"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
              src="/uploads/f0c0dbfb-9c21-4bae-ae88-fc7e1e0f5f87.jpg"
              alt="Aerial View of Pearl Complex with Amenities"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />

            <img
              src="/uploads/dcfba0fd-6fd9-4408-87b4-d8c73ad4bad5.jpg"
              alt="View of Clubhouse"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />

            <img
              src="/uploads/swimming.jpg"
              alt="Multiple Large sized Swimming Pools"
              className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          <div className="space-y-6">
            {apartments.map((apartment, index) => {
              const IconComponent = apartment.icon;
              return (
                <div key={index} className={`bg-gradient-to-br ${apartment.gradient} p-6 rounded-lg border border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                      <div className="text-left">
                        <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">{apartment.title}</h4>
                        <p className="text-sm text-orange-600 font-medium">{apartment.highlight}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg md:text-xl font-bold text-green-600">{apartment.price}</p>
                      <p className="text-sm text-gray-600">{apartment.area}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-700 mb-4">
                    {apartment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <ContactModal
                      trigger={
                        <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-sm">
                          <Home className="w-4 h-4 mr-2" />
                          View Floor Plan
                        </Button>
                      }
                      defaultMessage={`I'm interested in the ${apartment.title} apartment. Please share floor plans and pricing details.`}
                    />
                    <ContactModal
                      trigger={
                        <Button variant="outline" className="flex-1 border-orange-400 text-orange-600 hover:bg-orange-50 text-sm">
                          <Phone className="w-4 h-4 mr-2" />
                          Get Best Price
                        </Button>
                      }
                      defaultMessage={`I'd like to know the best available price for ${apartment.title} and payment options.`}
                    />
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ApartmentFormats;
