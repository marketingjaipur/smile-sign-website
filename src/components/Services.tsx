import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smile, 
  Shield, 
  Sparkles, 
  Heart, 
  Stethoscope, 
  Users 
} from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Orthodontics",
    description: "Specialized braces and aligners for perfect teeth alignment and bite correction.",
    features: ["Metal & Ceramic Braces", "Clear Aligners", "Retainers"],
    color: "text-primary"
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our aesthetic dental treatments and procedures.",
    features: ["Teeth Whitening", "Veneers", "Smile Makeover"],
    color: "text-trust-blue"
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Regular checkups and preventive treatments to maintain optimal oral health.",
    features: ["Regular Cleanings", "Fluoride Treatment", "Oral Exams"],
    color: "text-medical-blue"
  },
  {
    icon: Heart,
    title: "Restorative Dentistry",
    description: "Restore damaged teeth with our comprehensive restorative solutions.",
    features: ["Dental Fillings", "Crowns & Bridges", "Root Canal"],
    color: "text-primary"
  },
  {
    icon: Stethoscope,
    title: "Oral Surgery",
    description: "Advanced surgical procedures performed with precision and care.",
    features: ["Tooth Extraction", "Wisdom Teeth", "Minor Surgery"],
    color: "text-trust-blue"
  },
  {
    icon: Users,
    title: "Family Dentistry",
    description: "Comprehensive dental care for patients of all ages in our family.",
    features: ["Pediatric Care", "Adult Treatment", "Senior Care"],
    color: "text-medical-blue"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Dental Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine cleanings to advanced orthodontic treatments, we provide complete dental care 
            with the latest technology and personalized attention.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className={`${service.color} group-hover:text-primary`} size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;