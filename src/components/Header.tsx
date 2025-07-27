import { Phone, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">SMILECRAFT</h1>
              <p className="text-primary text-sm font-medium">DENTAL</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone size={16} />
              <span className="text-sm">72308 28551</span>
            </div>
            <Button variant="medical" size="sm">
              <Calendar size={16} className="mr-2" />
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;