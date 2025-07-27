import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Clock,
  Heart,
  Star,
  Calendar,
  Phone
} from "lucide-react";

const qualifications = [
  { 
    degree: "B.D.S", 
    description: "Bachelor of Dental Surgery",
    institution: "Dental College",
    year: "2018"
  },
  { 
    degree: "M.D.S", 
    description: "Master of Dental Surgery in Orthodontics",
    institution: "Specialized Orthodontic Program",
    year: "2021"
  }
];

const achievements = [
  { icon: Users, label: "1000+", description: "Happy Patients Treated" },
  { icon: Award, label: "5+", description: "Years of Experience" },
  { icon: Clock, label: "24/7", description: "Emergency Care Available" },
  { icon: Star, label: "4.9", description: "Average Patient Rating" }
];

const specializations = [
  "Orthodontic Treatment Planning",
  "Metal & Ceramic Braces",
  "Clear Aligner Therapy (Invisalign)",
  "Bite Correction & TMJ Treatment",
  "Cosmetic Dentistry",
  "Preventive Dental Care"
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="About Dr. Priyanka Singh - Expert Orthodontist in Jaipur | SMILECRAFT Dental Hospital"
        description="Meet Dr. Priyanka Singh, M.D.S Orthodontist at SMILECRAFT Dental Hospital, Jaipur. 5+ years experience, 1000+ happy patients. Expert in braces, teeth alignment & cosmetic dentistry."
        keywords="dr priyanka singh orthodontist, orthodontist jaipur, mds orthodontics, dental surgeon jaipur, smilecraft dental hospital, teeth alignment specialist jaipur"
        canonical="https://smilecraftdental.com/about"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-medical-light py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-4">About Dr. Priyanka Singh</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Your Trusted
                <span className="text-primary block">Orthodontist</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Dr. Priyanka Singh is a dedicated orthodontist committed to creating beautiful, 
                healthy smiles through expert care, advanced technology, and personalized treatment plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="medical" size="lg">
                  <Calendar className="mr-2" size={20} />
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2" size={20} />
                  Call: 72308 28551
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <Card className="overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/479488277_17995938365756085_7720740443232890062_n.jpg"
                  alt="Dr. Priyanka Singh"
                  className="w-full h-96 object-cover"
                />
              </Card>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Caring Excellence</p>
                    <p className="text-primary font-medium">Since 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Qualifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Education & Qualifications</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Professional Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dr. Singh's extensive education and continuous learning ensure you receive 
              the most advanced and effective dental care available.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {qualifications.map((qual, index) => (
              <Card key={index} className="hover-lift animate-slide-up">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center">
                      <GraduationCap className="text-primary" size={32} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{qual.degree}</CardTitle>
                      <p className="text-muted-foreground">{qual.year}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-bold text-foreground text-lg mb-2">{qual.description}</h3>
                  <p className="text-muted-foreground">{qual.institution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover-lift animate-scale-in">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{achievement.label}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Areas of Expertise</Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Specialized Care Areas
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Dr. Singh specializes in comprehensive orthodontic care, combining traditional 
                techniques with modern technology to deliver exceptional results.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {specializations.map((specialization, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-card rounded-lg border border-border hover-lift">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="font-medium text-foreground">{specialization}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary to-trust-blue text-primary-foreground">
                <CardContent className="p-0 text-center">
                  <h3 className="text-2xl font-bold mb-4">Philosophy of Care</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    "Every patient deserves a beautiful, healthy smile. I believe in combining 
                    advanced orthodontic techniques with compassionate care to create not just 
                    straight teeth, but confident smiles that last a lifetime."
                  </p>
                  <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                    <p className="font-bold">- Dr. Priyanka Singh</p>
                    <p className="text-sm text-primary-foreground/80">M.D.S Orthodontics</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle>Why Choose Dr. Singh?</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Advanced orthodontic techniques and technology</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Personalized treatment plans for each patient</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Comfortable, modern clinical environment</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Continuous education and skill development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a personal consultation with Dr. Priyanka Singh and discover how 
            expert orthodontic care can give you the confident smile you deserve.
          </p>
          <Button variant="medical" size="lg" className="text-lg px-8">
            <Calendar className="mr-2" size={20} />
            Book Your Consultation Today
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;