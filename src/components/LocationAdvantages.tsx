import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactModal from "./ContactModal";
import { 
  MapPin, 
  Car, 
  Building, 
  GraduationCap, 
  ShoppingBag, 
  Hospital, 
  TreePine,
  Clock,
  TrendingUp,
  Shield,
  Plane,
  Train,
  Home,
  Briefcase,
  Zap,
  MapPinHouseIcon,
  Building2,
  CctvIcon
} from "lucide-react";

const LocationAdvantages = () => {
  const connectivityFeatures = [
    {
      icon: Car,
      title: "Ring Road Access",
      description: "Direct connectivity to Ranchi Ring Road for seamless city travel",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      title: "Kathal More Hub",
      description: "Just 3 minutes from Kathal More - Ranchi's major commercial and transport hub",
      color: "text-green-500"
    },
    {
      icon: Building,
      title: "Inner Ring Road",
      description: "On the route of proposed Ranchi Inner Ring Road - massive connectivity boost",
      color: "text-purple-500"
    },
    {
      icon: Plane,
      title: "Airport Connectivity",
      description: "15 minutes to Birsa Munda Airport via Argora-Kathal More Road",
      color: "text-orange-500"
    },
    {
      icon: Train,
      title: "Railway Access",
      description: "15 minutes to Ranchi Station and Hatia Junction via direct road connectivity",
      color: "text-indigo-500"
    },
    {
      icon: Car,
      title: "Highway Access",
      description: "Direct access to NH-20 & NH-33 for intercity connectivity",
      color: "text-red-500"
    }
  ];

  const nearbyAmenities = [
    {
      icon: GraduationCap,
      title: "Premier Educational Hub",
      items: ["IIM Ranchi (3 km)", "St Francis School", "Delhi Public School", "DAV Public School", "St. Xavier's School", "Jawahar Vidya Mandir"],
      color: "text-blue-600"
    },
    {
      icon: Hospital,
      title: "World-Class Healthcare",
      items: ["RIMS (10 km)", "Medanta Hospital", "Raj Hospital", "Pulse Hospital", "Hill View Hospital", "City Hospital"],
      color: "text-red-500"
    },
    {
      icon: ShoppingBag,
      title: "Shopping & Entertainment",
      items: ["International Cricket Stadium (7 km)","City Centre Mall (8 km)", "Nucleus Mall (7 km)", "Mall of Ranchi", "Argora Local Market", "Kathal More Commercial Complex" ],
      color: "text-green-600"
    },
    {
      icon: TreePine,
      title: "Recreation & Nature",
      items: ["Rock Garden (12 km)", "Tagore Hill (10 km)", "Kanke Dam (8 km)", "Patratu Valley (25 km)", " Dhurwa Dam (12 km"],
      color: "text-emerald-600"
    },
    {
      icon: Briefcase,
      title: "Business Districts",
      items: ["Lalpur Business Hub (5 km)", "Main Road Commercial Area", "Kokar Industrial Area", "IT Park Ranchi", "Tupudana Industrial Area"],
      color: "text-cyan-600"
    },
    {
      icon: Building2,
      title: "Government Offices",
      items: ["Ranchi Municipal Corporation (6 km)", "High Court (4 km)", "Police Headquarters (1 km)", "Jharkhand Vidhan Sabha (5 km)", "Passport Office (6 km)"],
      color: "text-gray-600"
    }
  ];

  const neighborhoods = [
    {
      name: "Harmu",
      distance: "2 km",
      features: ["Established Residential", "Government Offices", "Commercial Hub"]
    },
    {
      name: "Argora Chowk",
      distance: "500 m", 
      features: ["Commercial Center", "Banking Hub", "Transport Node"]
    },
    {
      name: "Ashok Nagar",
      distance: "1 km",
      features: ["Premium Colony", "Educational Zone", "Healthcare Hub"]
    },
    {
      name: "Kanke",
      distance: "5 km",
      features: ["IIM Campus", "Scenic Location", "Posh Residential"]
    },
    {
      name: "Morabadi",
      distance: "6 km",
      features: ["Sports Complex", "Premium Housing", "Educational Institutions"]
    },
    {
      name: "Bariatu",
      distance: "8 km",
      features: ["Medical Hub", "Luxury Housing", "Premium Schools"]
    }
  ];

  const investmentHighlights = [
    {
      icon: TrendingUp,
      title: "High Appreciation Zone",
      description: "Argora-Kathal More corridor showing 18-22% annual growth in property values",
      stat: "22% CAGR"
    },
    {
      icon: Shield,
      title: "RERA RMC Registered",
      description: "Built on transparency and trust, with full RERA approval and no customer complaints.",
      stat: "0 Complains and 100% Legal"
    },
    {
      icon: Building,
      title: "Infrastructure Boom",
      description: "₹2000+ crore infrastructure projects underway in 5km radius",
      stat: "Future Ready"
    },
    {
      icon: Home,
      title: "High Rental Yields",
      description: "Premium location commanding 4-6% rental yields with growing demand",
      stat: "6% Yields"
    },
    {
      icon: MapPinHouseIcon,
      title: "Prime Location Advantage",
      description: "Located in Argora, close to major roads, schools, hospitals, and commercial hubs",
      stat: "Connected & Central"
    }
    ,
    {
      icon: CctvIcon,
      title: "Secure Gated Community",
      description: "24/7 security, CCTV surveillance, and controlled access for residents’ safety",
      stat: "Peace of Mind"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            PRIME LOCATION ADVANTAGES
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-orange-600 mb-4">
            Argora-Pundag Strategic Corridor
          </h3>
          <p className="text-gray-600 max-w-4xl mx-auto mb-6">
            Strategically positioned at the heart of Ranchi's fastest-growing corridor, Pearl The Central Park 
            offers unmatched connectivity to Kathal More, Ring Road access, and proximity to all major 
            business districts, educational institutions, and healthcare facilities.
          </p>
        </motion.div>

        {/* Connectivity Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Exceptional Connectivity Network
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connectivityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className={`w-8 h-8 ${feature.color} mb-4`} />
                <h5 className="font-semibold text-slate-800 mb-2">{feature.title}</h5>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nearby Amenities */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Comprehensive Lifestyle Amenities
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyAmenities.map((amenity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <amenity.icon className={`w-6 h-6 ${amenity.color}`} />
                    {amenity.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {amenity.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Notable Neighborhoods */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Premium Neighborhood Network
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h5 className="font-bold text-slate-800 text-lg">{neighborhood.name}</h5>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {neighborhood.distance}
                  </span>
                </div>
                <div className="space-y-2">
                  {neighborhood.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="inline-block bg-white text-orange-700 px-3 py-1 rounded-full text-xs mr-2 mb-2">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Potential */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Exceptional Investment Potential
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <highlight.icon className="w-8 h-8 text-orange-500" />
                  <div>
                    <h5 className="font-bold text-slate-800">{highlight.title}</h5>
                    <span className="text-orange-600 font-semibold text-sm">{highlight.stat}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg"
        >
          <h4 className="text-2xl font-bold mb-4">Experience the Location Advantage</h4>
          <p className="mb-6 max-w-2xl mx-auto">
            Visit Pearl The Central Park and discover why this Argora-Pundag location is perfect for your dream home. 
            Experience the unmatched connectivity and premium amenities firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal 
              trigger={
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <MapPin className="w-5 h-5 mr-2" />
                  Schedule Location Tour
                </Button>
              }
              defaultMessage="I'd like to schedule a comprehensive location tour to see the connectivity and amenities around Pearl The Central Park in Argora"
            />
            <ContactModal 
              trigger={
                <Button size="lg" variant="outline" className="border-white text-orange-600 hover:bg-orange-50 hover:text-accent-foreground">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Get Investment Analysis
                </Button>
              }
              defaultMessage="Please provide detailed investment analysis and growth projections for Pearl The Central Park's strategic Argora location"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationAdvantages;