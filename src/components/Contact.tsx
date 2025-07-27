import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Calendar,
  MessageSquare
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Number",
    detail: "72308 28551",
    description: "Call us for appointments",
    action: "tel:+917230828551"
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Smilecraft Dental",
    description: "Visit our modern clinic",
    action: "#"
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Sat: 9AM - 8PM",
    description: "Sunday: Emergency only",
    action: "#"
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@smilecraftdental.com",
    description: "Send us a message",
    action: "mailto:info@smilecraftdental.com"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Contact Us</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule your consultation today and take the first step towards a healthier, 
            more beautiful smile with Dr. Priyanka Singh.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300 border-border hover:border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <info.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-lg mb-1">{info.title}</h3>
                        <p className="text-primary font-semibold mb-1">{info.detail}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gradient-to-br from-primary to-trust-blue text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Emergency Dental Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-primary-foreground/90">
                  Dental emergencies can happen anytime. Call us immediately for urgent dental care.
                </p>
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                  <Phone className="mr-2" size={18} />
                  Emergency Contact
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Book Your Appointment</CardTitle>
                <p className="text-muted-foreground">
                  Choose your preferred way to schedule a consultation with Dr. Priyanka Singh.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <Button variant="medical" size="lg" className="w-full">
                    <Calendar className="mr-2" size={20} />
                    Online Booking
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <Phone className="mr-2" size={20} />
                    Call to Schedule
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full">
                    <MessageSquare className="mr-2" size={20} />
                    WhatsApp Consultation
                  </Button>
                </div>
                
                <div className="p-6 bg-medical-light rounded-lg border border-primary/20">
                  <h4 className="font-bold text-foreground mb-3">What to Expect:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Comprehensive oral examination</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Personalized treatment plan</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Cost estimate and options</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Flexible scheduling options</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;