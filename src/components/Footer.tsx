import { Phone, MapPin, Mail, Clock, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SMILECRAFT</h3>
                <p className="text-sm text-primary-foreground/80">DENTAL</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Expert orthodontic care with Dr. Priyanka Singh. Creating beautiful, 
              healthy smiles with advanced dental treatments.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-foreground/60" />
                <span className="text-primary-foreground/80">72308 28551</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-foreground/60" />
                <span className="text-primary-foreground/80">info@smilecraftdental.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-foreground/60" />
                <span className="text-primary-foreground/80">Smilecraft Dental Clinic</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Working Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-primary-foreground/60" />
                <div className="text-primary-foreground/80">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center space-x-2">
            <span>© 2024 Smilecraft Dental. Made with</span>
            <Heart size={16} className="text-red-400" />
            <span>for better smiles.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;