import { Phone, MapPin, Mail, Clock, Heart } from "lucide-react";
import NAP from "@/components/NAP";
import { businessInfo } from "@/lib/seo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/Dr Priyanka Singh Orthodontics .png" 
                alt="SMILECRAFT Dental Hospital Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-lg font-bold">SMILECRAFT</h3>
                <p className="text-xs text-primary-foreground/80">DENTAL HOSPITAL</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {businessInfo.name} - Expert orthodontic care with {businessInfo.doctor}. 
              Creating beautiful, healthy smiles with advanced dental treatments in Jaipur, Rajasthan.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact Information</h4>
            <NAP variant="footer" showIcons={true} />
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
            <span>© 2024 {businessInfo.name}. Made with</span>
            <Heart size={16} className="text-red-400" />
            <span>for better smiles.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;