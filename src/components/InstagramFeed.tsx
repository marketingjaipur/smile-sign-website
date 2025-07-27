import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&h=300&fit=crop",
    likes: 245,
    comments: 12,
    caption: "Beautiful smile transformation! ✨ #SmileMakeover #DentalCare"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=300&fit=crop",
    likes: 189,
    comments: 8,
    caption: "Professional teeth whitening results 🦷 #TeethWhitening #DentalHealth"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=300&fit=crop",
    likes: 156,
    comments: 15,
    caption: "Orthodontic care that changes lives! 📸 #Orthodontics #BracesJourney"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300&h=300&fit=crop",
    likes: 203,
    comments: 6,
    caption: "State-of-the-art dental technology 🔬 #ModernDentistry #TechInnovation"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=300&fit=crop",
    likes: 278,
    comments: 18,
    caption: "Your comfort is our priority 💙 #PatientCare #ComfortableTreatment"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
    likes: 167,
    comments: 9,
    caption: "Healthy smiles, happy patients! 😊 #HealthySmiles #DentalWellness"
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none">
            <Instagram className="mr-2" size={16} />
            Follow Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            @SmilecraftDental
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow our Instagram for daily dental tips, patient stories, and behind-the-scenes 
            content from our modern dental practice.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <Card key={post.id} className="group overflow-hidden hover-lift cursor-pointer animate-scale-in border-0 shadow-lg">
              <CardContent className="p-0 relative">
                <img 
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-48 md:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Heart size={16} className="fill-red-500 text-red-500" />
                          <span className="text-xs">{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle size={16} />
                          <span className="text-xs">{post.comments}</span>
                        </div>
                      </div>
                      <ExternalLink size={16} />
                    </div>
                    <p className="text-xs line-clamp-2">{post.caption}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-none hover:from-pink-600 hover:to-purple-600"
          >
            <Instagram className="mr-2" size={20} />
            Follow @SmilecraftDental
          </Button>
          <p className="text-sm text-muted-foreground">
            Join 15,000+ followers for daily dental inspiration and tips!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;