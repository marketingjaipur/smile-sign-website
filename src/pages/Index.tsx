import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import InstagramFeed from "@/components/InstagramFeed";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <InstagramFeed />
      <LocationMap />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
