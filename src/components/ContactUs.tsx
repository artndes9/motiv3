
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Users, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import patternImage from "@/assets/pattern.png"; 


const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank You for Your Interest!",
      description: "Our sales expert will call you within 30 minutes.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: ""
    });
  };

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
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
            GET INSTANT EXPERT GUIDANCE
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Talk to Our Property Consultants</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Get personalized assistance from our certified property experts. We'll help you find the perfect home and best deals.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">✓ 30-min Response Time</span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">✓ No Pressure Sales</span>
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">✓ Expert Guidance</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-400">🏆 Why Choose Moti Infraheights?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg">
                  <Award className="w-6 h-6 text-yellow-400 mt-1" />
                  <div>
                    <p className="font-semibold text-yellow-400">10+ Years of Experience</p>
                    <p className="text-gray-300 text-sm">Trusted by 1000+ families</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg">
                  <Clock className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <p className="font-semibold text-green-400">On-Time Delivery</p>
                    <p className="text-gray-300 text-sm">100% track record</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-slate-700/50 rounded-lg">
                  <Users className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-400">Customer First</p>
                    <p className="text-gray-300 text-sm">24/7 support & service*</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 bg-slate-700/30 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-orange-400">📞 Contact Information</h4>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <p className="font-semibold">Sales Hotline (24/7)</p>
                  <p className="text-gray-300">9430737562 / 9264296043 / 9264296044</p>
                  <p className="text-orange-400 text-sm">Call now for instant assistance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <p className="font-semibold">Email Address</p>
                  <p className="text-gray-300">motiinfraheights23@gmail.com</p>
                  <p className="text-orange-400 text-sm">Get detailed brochures via email</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <p className="font-semibold">Visit Our Office</p>
                  <p className="text-gray-300">Argora Pundag Road, Near Moti Fuel Centre, Argora, Ranchi, Jharkhand</p>
                  <p className="text-orange-400 text-sm">Open Mon-Sat 9AM-8PM, Sun 10AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-lg border border-orange-500/20">
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-orange-400 mb-2">🎁 Get Exclusive Offers!</h4>
              <p className="text-gray-300 text-sm">Fill the form below and get instant call back with best prices</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name*</label>
                  <Input 
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="Enter first name" 
                    className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400 focus:border-orange-400" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name*</label>
                  <Input 
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Enter last name" 
                    className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400 focus:border-orange-400" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number*</label>
                <Input 
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Enter phone number" 
                  className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400 focus:border-orange-400" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email*</label>
                <Input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter email address" 
                  className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400 focus:border-orange-400" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us your requirements (apartment type, budget, etc.)" 
                  className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400 min-h-24 focus:border-orange-400" 
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg py-3">
                Get Instant Call Back
              </Button>
              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to receive calls/WhatsApp from our certified consultants. 100% privacy guaranteed.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactUs;
