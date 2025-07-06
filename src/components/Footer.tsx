import Logo from "@/assets/Logo_Horizontal.svg?react";
import { Facebook, Instagram, MailIcon, MapPin, PhoneCallIcon, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Logo className=" fill-white h-16" />
            <h3 className="text-2xl font-bold text-orange-400">MOTI INFRAHEIGHTS PRIVATE LIMITED</h3>
            <p className="text-gray-300">
              Moti Infraheights is a leading real estate company based in Ranchi, India. The company specializes in the development and construction of residential and commercial properties. Moti Infraheights has a reputation for delivering high-quality projects on time and within budget.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/motiinfra" target="_blank"><Facebook className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer" /></a>
               <a href="https://www.youtube.com/@motiinfraheights/" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 text-gray-300 hover:text-orange-400 transition-colors" />
                </a>
              <a href="https://www.instagram.com/motiinfraheights/" target="_blank"><Instagram className="w-5 h-5 text-gray-400 hover:text-orange-400 cursor-pointer" /></a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="text-gray-300 space-y-2">
              <p className="flex items-center gap-2"><PhoneCallIcon className="w-4 h-4" /> 9264296043 / 6203708389 / 9264296044</p>
              <p className="flex items-center gap-2"><MailIcon className="w-4 h-4" /> motiinfraheights23@gmail.com</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Argora Pundag Road, Near Moti Fuel Centre, Argora, Ranchi, Jharkhand</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400">Home</a></li>
              <li><a href="#" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400">Projects</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Moti Infraheights. All rights reserved.</p>
          <p className="text-sm mt-2">Developed by the, <a href="https://theroguepixxel.com" target="_blank" className="text-orange-400 hover:text-orange-500">Rogue Pixxel</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
