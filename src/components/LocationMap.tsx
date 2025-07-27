import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Car,
  Bus
} from "lucide-react";

const LocationMap = () => {
  return (
    <section className="py-20 bg-medical-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">Find Us</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Visit Our Modern Clinic
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conveniently located with easy access and ample parking. 
            Your comfort starts from the moment you arrive.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="text-primary" size={24} />
                  <span>Clinic Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-foreground text-lg">Smilecraft Dental</h3>
                  <p className="text-muted-foreground">
                    Modern dental clinic with state-of-the-art equipment and comfortable patient areas.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg">
                    <Phone className="text-primary" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-primary font-bold">72308 28551</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg">
                    <Clock className="text-primary" size={20} />
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Sat: 9AM-8PM</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="medical" className="w-full">
                  <Navigation className="mr-2" size={18} />
                  Get Directions
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Transportation & Parking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Car className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Free Parking</p>
                      <p className="text-sm text-muted-foreground">Available on-site</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Bus className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Public Transit</p>
                      <p className="text-sm text-muted-foreground">Bus routes nearby</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-accent rounded-lg border border-primary/20">
                  <h4 className="font-bold text-foreground mb-2">Accessibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Our clinic is fully wheelchair accessible with ground-floor access 
                    and handicap-friendly facilities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="overflow-hidden hover-lift">
              <CardContent className="p-0">
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="mx-auto mb-4 text-primary" size={48} />
                    <h3 className="text-xl font-bold text-foreground mb-2">Google Maps Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Please provide your Google Maps embed code to display the interactive map here.
                    </p>
                    <div className="bg-muted p-4 rounded-lg text-left">
                      <p className="text-sm text-muted-foreground font-mono">
                        {`<iframe src="https://www.google.com/maps/embed?pb=..." 
   width="100%" height="400" style="border:0;" 
   allowfullscreen="" loading="lazy">
</iframe>`}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground font-bold text-lg">5</span>
                  </div>
                  <p className="font-bold text-foreground">Minutes</p>
                  <p className="text-sm text-muted-foreground">From main road</p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground font-bold text-lg">24</span>
                  </div>
                  <p className="font-bold text-foreground">Hours</p>
                  <p className="text-sm text-muted-foreground">Emergency care</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;