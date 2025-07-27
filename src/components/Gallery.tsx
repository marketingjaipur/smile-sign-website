import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Quote } from "lucide-react";

const beforeAfterImages = [
  {
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
    title: "Orthodontic Treatment",
    description: "Complete smile transformation with braces"
  },
  {
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
    title: "Teeth Whitening",
    description: "Professional whitening results"
  },
  {
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
    title: "Cosmetic Dentistry",
    description: "Beautiful smile makeover"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
    rating: 5,
    text: "Dr. Priyanka Singh transformed my smile completely. The treatment was comfortable and the results are amazing!"
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    text: "Professional, caring, and excellent results. Highly recommend Smilecraft Dental for any orthodontic needs."
  },
  {
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    text: "The best dental experience I've ever had. Dr. Singh is incredibly skilled and the clinic is modern and clean."
  }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-medical-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">Before & After</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Smile Transformations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible results our patients have achieved with expert orthodontic care 
            and advanced dental treatments at Smilecraft Dental.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {beforeAfterImages.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover-lift animate-slide-up border-primary/20">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img 
                        src={item.before} 
                        alt="Before treatment"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={item.after} 
                        alt="After treatment"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                        AFTER
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-sm text-white/90">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">What Our Patients Say</h3>
            <p className="text-muted-foreground">Real experiences from our satisfied patients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover-lift animate-scale-in">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="text-primary mb-2" size={20} />
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="medical" size="lg">
            View More Transformations
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;