import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Calendar, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-background to-medical-light py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                Your Perfect
                <span className="text-primary block">Smile Awaits</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert orthodontic care with Dr. Priyanka Singh. Creating beautiful, healthy smiles with advanced dental treatments in a comfortable, modern environment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="lg" className="text-lg px-8">
                <Calendar className="mr-2" size={20} />
                Book Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Phone className="mr-2" size={20} />
                Call Now
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Certified</p>
                  <p className="text-sm text-muted-foreground">M.D.S Orthodontics</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Trusted</p>
                  <p className="text-sm text-muted-foreground">1000+ Patients</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/479488246_17995938374756085_2842135367964327149_n.jpg" 
                alt="SMILECRAFT Dental Hospital - Dr. Priyanka Singh" 
                className="w-full h-96 object-cover"
              />
            </Card>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Emergency Care</p>
                  <p className="text-primary font-medium">072308 28551</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;