import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Clock, 
  Users, 
  Calendar 
} from "lucide-react";

const qualifications = [
  { degree: "B.D.S", description: "Bachelor of Dental Surgery" },
  { degree: "M.D.S", description: "Master of Dental Surgery in Orthodontics" }
];

const achievements = [
  { icon: Users, label: "1000+", description: "Happy Patients" },
  { icon: Award, label: "5+", description: "Years Experience" },
  { icon: Clock, label: "24/7", description: "Emergency Care" }
];

const About = () => {
  return (
    <section className="py-20 bg-medical-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4">About Doctor</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Meet Dr. Priyanka Singh
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                A dedicated orthodontist with extensive experience in creating beautiful, healthy smiles. 
                Dr. Singh combines advanced dental techniques with personalized care to ensure every patient 
                receives the best possible treatment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Committed to staying at the forefront of dental technology and continuing education, 
                she provides comprehensive orthodontic solutions tailored to each patient's unique needs.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-4">Qualifications</h3>
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{qual.degree}</p>
                    <p className="text-muted-foreground">{qual.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="medical" size="lg">
              <Calendar className="mr-2" size={20} />
              Schedule Consultation
            </Button>
          </div>
          
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-to-br from-card to-primary-soft border-primary/20">
              <CardContent className="space-y-6 p-0">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Experience & Excellence
                  </h3>
                  <p className="text-muted-foreground">
                    Delivering exceptional dental care with compassion and expertise
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <achievement.icon className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">{achievement.label}</p>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-primary text-primary-foreground">
              <CardContent className="p-0 text-center">
                <h4 className="text-xl font-bold mb-2">Why Choose Smilecraft Dental?</h4>
                <ul className="space-y-2 text-primary-foreground/90">
                  <li>✓ Advanced orthodontic techniques</li>
                  <li>✓ Personalized treatment plans</li>
                  <li>✓ State-of-the-art equipment</li>
                  <li>✓ Comfortable, modern facility</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;