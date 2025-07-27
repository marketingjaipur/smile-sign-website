import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smile, 
  Shield, 
  Sparkles, 
  Heart, 
  Stethoscope, 
  Users,
  Clock,
  Award,
  Phone,
  Calendar
} from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Orthodontics",
    description: "Complete teeth alignment and bite correction using the latest orthodontic techniques and technology.",
    features: ["Metal & Ceramic Braces", "Clear Aligners (Invisalign)", "Retainers & Maintenance", "Bite Correction"],
    duration: "12-24 months",
    price: "Starting from ₹45,000",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop"
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our aesthetic dental treatments for a confident, beautiful appearance.",
    features: ["Professional Teeth Whitening", "Porcelain Veneers", "Smile Makeover", "Gum Contouring"],
    duration: "1-3 sessions",
    price: "Starting from ₹15,000",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop"
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Comprehensive preventive treatments to maintain optimal oral health and prevent dental problems.",
    features: ["Regular Cleanings", "Fluoride Treatment", "Oral Cancer Screening", "Dental Sealants"],
    duration: "30-60 minutes",
    price: "Starting from ₹2,500",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop"
  },
  {
    icon: Heart,
    title: "Restorative Dentistry",
    description: "Restore damaged or missing teeth with our comprehensive restorative dental solutions.",
    features: ["Dental Fillings", "Crowns & Bridges", "Root Canal Treatment", "Dental Implants"],
    duration: "1-3 sessions",
    price: "Starting from ₹8,000",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop"
  },
  {
    icon: Stethoscope,
    title: "Oral Surgery",
    description: "Advanced surgical procedures performed with precision, care, and modern anesthesia techniques.",
    features: ["Tooth Extraction", "Wisdom Teeth Removal", "Bone Grafting", "Periodontal Surgery"],
    duration: "30-90 minutes",
    price: "Starting from ₹5,000",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=300&fit=crop"
  },
  {
    icon: Users,
    title: "Family Dentistry",
    description: "Comprehensive dental care for patients of all ages, from children to seniors.",
    features: ["Pediatric Dentistry", "Adult General Care", "Senior Dental Care", "Family Treatment Plans"],
    duration: "45-90 minutes",
    price: "Starting from ₹3,000",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop"
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-medical-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4">Our Services</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive Dental Care
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From routine cleanings to advanced orthodontic treatments, we provide complete dental care 
              with the latest technology, personalized attention, and a commitment to your comfort.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 hover-lift">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Expert Care</h3>
                <p className="text-muted-foreground">Advanced treatments by qualified professionals</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover-lift">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">Flexible Hours</h3>
                <p className="text-muted-foreground">Convenient scheduling to fit your lifestyle</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover-lift">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-primary" size={32} />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">Emergency dental care when you need it</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover-lift animate-slide-up">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                        <service.icon className="text-primary" size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Includes:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Duration</p>
                          <p className="font-semibold text-foreground">{service.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Price</p>
                          <p className="font-semibold text-primary">{service.price}</p>
                        </div>
                      </div>
                      
                      <Button variant="medical" className="w-full mt-4">
                        <Calendar className="mr-2" size={16} />
                        Book Consultation
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Dental Journey?</h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Priyanka Singh and discover the best treatment plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2" size={20} />
              Call: 72308 28551
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              <Calendar className="mr-2" size={20} />
              Online Booking
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;