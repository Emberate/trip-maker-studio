import { Plane, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-travel-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-accent rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">TripMaker</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your trusted travel partner for booking flights, hotels, and creating amazing travel experiences across India and beyond.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-travel-orange cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-travel-orange cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-travel-orange cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-travel-orange cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Customer Care</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">+91 9876543210</p>
                  <p className="text-white/60 text-sm">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">support@tripmaker.com</p>
                  <p className="text-white/60 text-sm">Email Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Mumbai, India</p>
                  <p className="text-white/60 text-sm">Headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 TripMaker. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;