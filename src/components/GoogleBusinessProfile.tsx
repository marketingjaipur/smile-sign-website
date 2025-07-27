import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink,
  Camera,
  MessageSquare
} from "lucide-react";
import { businessInfo } from "@/lib/seo";

const GoogleBusinessProfile = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    businessInfo.address.streetAddress + ', ' + businessInfo.address.addressLocality
  )}`;

  const googleReviewUrl = `https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID`;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Find Us Online</Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Connect with Us on Google
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find us on Google Maps, read reviews from our patients, and stay updated 
            with our latest services and announcements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Business Profile Info */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <MapPin className="text-primary" size={24} />
                <span>Google Business Profile</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-primary-soft rounded-lg">
                <div>
                  <h3 className="font-bold text-foreground">{businessInfo.name}</h3>
                  <p className="text-muted-foreground text-sm">Dental Clinic</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="font-bold text-foreground">4.9</span>
                  <span className="text-muted-foreground text-sm">(150+ reviews)</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-primary mt-1" size={18} />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">
                      {businessInfo.address.streetAddress}<br/>
                      {businessInfo.address.addressLocality}<br/>
                      {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="text-primary" size={18} />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground text-sm">{businessInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="text-primary mt-1" size={18} />
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <div className="text-muted-foreground text-sm">
                      <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p>Sunday: Emergency Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <Button variant="medical" className="w-full" asChild>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="mr-2" size={18} />
                    View on Google Maps
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
                    <Star className="mr-2" size={18} />
                    Write a Review
                    <ExternalLink className="ml-2" size={16} />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Google Business Profile Tips */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Help Us Serve You Better</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-card border rounded-lg">
                  <Star className="text-yellow-400 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Leave a Review</h4>
                    <p className="text-muted-foreground text-sm">
                      Share your experience to help other patients find quality dental care in Jaipur.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-card border rounded-lg">
                  <Camera className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Share Photos</h4>
                    <p className="text-muted-foreground text-sm">
                      Upload photos of your visit to help others see our modern facilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-card border rounded-lg">
                  <MessageSquare className="text-green-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Ask Questions</h4>
                    <p className="text-muted-foreground text-sm">
                      Use Google Q&A to get quick answers about our services and appointments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary-soft rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Quick Actions</h4>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground">Call directly from Google</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground">Get directions with one click</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground">View real-time business hours</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground">See patient photos and reviews</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Google Business Profile Setup Instructions */}
        <div className="mt-12 p-6 bg-medical-light rounded-lg border border-primary/20">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Google Business Profile Integration Notes
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Setup Requirements:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Verify business ownership with Google</li>
                <li>• Add high-quality photos of clinic and staff</li>
                <li>• Complete all business information fields</li>
                <li>• Enable messaging and Q&A features</li>
                <li>• Set up Google Posts for updates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Optimization Tips:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Respond to all patient reviews promptly</li>
                <li>• Post regular updates about services</li>
                <li>• Use relevant keywords in business description</li>
                <li>• Keep business hours updated</li>
                <li>• Monitor and respond to Q&A section</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleBusinessProfile;