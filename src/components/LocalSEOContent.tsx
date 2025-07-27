import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Award, Clock } from "lucide-react";
import { businessInfo } from "@/lib/seo";

const LocalSEOContent = () => {
  const localKeywords = [
    "orthodontist in Jaipur",
    "dental clinic in Dholai",
    "braces treatment Jaipur",
    "cosmetic dentistry Rajasthan",
    "teeth alignment Jaipur",
    "dental hospital Mansarovar"
  ];

  const serviceAreas = [
    "Dholai, Jaipur",
    "Mansarovar, Jaipur", 
    "Malviya Nagar, Jaipur",
    "Vaishali Nagar, Jaipur",
    "Jagatpura, Jaipur",
    "Sanganer, Jaipur"
  ];

  return (
    <section className="py-16 bg-medical-light">
      <div className="container mx-auto px-4">
        {/* Local Service Area */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Serving Jaipur & Surrounding Areas</Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Premier Orthodontic Care in Jaipur, Rajasthan
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of Dholai, Jaipur, <strong>Abhipriya's SMILECRAFT Dental Hospital</strong> 
            by <strong>Dr. Priyanka Singh</strong> provides expert orthodontic and dental care to patients 
            across Jaipur and surrounding areas in Rajasthan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Location Info */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <MapPin className="text-primary" size={24} />
                <span>Our Location</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground">Address:</h4>
                  <p className="text-muted-foreground">
                    {businessInfo.address.streetAddress}<br/>
                    {businessInfo.address.addressLocality}<br/>
                    {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Convenient Access:</h4>
                  <p className="text-muted-foreground text-sm">
                    Easily accessible from major areas of Jaipur including Mansarovar, 
                    Malviya Nagar, and Vaishali Nagar. Free parking available.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Areas */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Users className="text-primary" size={24} />
                <span>Areas We Serve</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                And many more areas across Jaipur, Rajasthan
              </p>
            </CardContent>
          </Card>

          {/* Local Recognition */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Award className="text-primary" size={24} />
                <span>Local Recognition</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Happy Patients in Jaipur</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Serving Jaipur</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Local Keywords Section */}
        <div className="bg-card rounded-lg p-8 border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Why Choose SMILECRAFT Dental Hospital in Jaipur?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {localKeywords.map((keyword, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-primary-soft rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground font-medium capitalize">{keyword}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              As the leading <strong>orthodontist in Jaipur</strong>, Dr. Priyanka Singh combines 
              advanced dental technology with personalized care to deliver exceptional results 
              for patients throughout <strong>Rajasthan</strong>.
            </p>
          </div>
        </div>

        {/* Local Business Hours */}
        <div className="mt-8 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-3">
                <Clock className="text-primary" size={24} />
                <span>Business Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Saturday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-primary">Emergency Only</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Extended hours available for working professionals
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOContent;