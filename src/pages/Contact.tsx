import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Calendar,
  MessageSquare,
  Send,
  User,
  Stethoscope
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    primary: "72308 28551",
    secondary: "Call us anytime for appointments",
    action: "tel:+917230828551",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Mail,
    title: "Email",
    primary: "info@smilecraftdental.com",
    secondary: "Send us your questions",
    action: "mailto:info@smilecraftdental.com",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: MapPin,
    title: "Location",
    primary: "Smilecraft Dental Clinic",
    secondary: "Visit our modern facility",
    action: "#location",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: Clock,
    title: "Working Hours",
    primary: "Mon - Sat: 9AM - 8PM",
    secondary: "Sunday: Emergency only",
    action: "#hours",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  }
];

const services = [
  "General Consultation",
  "Orthodontic Treatment",
  "Cosmetic Dentistry",
  "Teeth Whitening",
  "Emergency Care",
  "Preventive Care"
];

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-medical-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Contact Us</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your journey to a perfect smile? Contact Dr. Priyanka Singh 
              and the Smilecraft Dental team today to schedule your consultation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group text-center hover-lift animate-scale-in">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className={method.color} size={32} />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{method.title}</h3>
                  <p className="text-primary font-semibold mb-1">{method.primary}</p>
                  <p className="text-muted-foreground text-sm">{method.secondary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Schedule Your Appointment</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours to confirm your appointment.
              </p>
              
              <Card className="hover-lift">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 text-muted-foreground" size={18} />
                          <Input placeholder="Enter your full name" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 text-muted-foreground" size={18} />
                          <Input placeholder="Your phone number" className="pl-10" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <Input placeholder="your.email@example.com" className="pl-10" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Service Needed</label>
                      <div className="relative">
                        <Stethoscope className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <select className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground">
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Message</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-muted-foreground" size={18} />
                        <Textarea 
                          placeholder="Tell us about your dental concerns or questions..."
                          className="pl-10 min-h-[120px]"
                        />
                      </div>
                    </div>
                    
                    <Button variant="medical" size="lg" className="w-full">
                      <Send className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Calendar className="text-primary" size={24} />
                    <span>Quick Booking Options</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Choose your preferred way to schedule an appointment with Dr. Priyanka Singh.
                  </p>
                  
                  <div className="space-y-3">
                    <Button variant="medical" className="w-full justify-start">
                      <Phone className="mr-3" size={18} />
                      Call: 72308 28551
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="mr-3" size={18} />
                      WhatsApp Booking
                    </Button>
                    <Button variant="secondary" className="w-full justify-start">
                      <Calendar className="mr-3" size={18} />
                      Online Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Clinic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Working Hours</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium text-foreground">9:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium text-primary">Emergency Only</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-bold text-foreground mb-3">What to Expect</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground text-sm">Comprehensive oral examination</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground text-sm">Personalized treatment plan</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground text-sm">Cost estimate and payment options</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground text-sm">Follow-up care instructions</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary to-trust-blue text-primary-foreground hover-lift">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">Emergency Dental Care</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    Dental emergencies can happen anytime. We provide 24/7 emergency consultation 
                    and same-day appointments for urgent cases.
                  </p>
                  <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                    Emergency Contact: 72308 28551
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;