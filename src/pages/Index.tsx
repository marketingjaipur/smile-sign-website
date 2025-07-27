import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import InstagramFeed from "@/components/InstagramFeed";
import LocationMap from "@/components/LocationMap";
import LocalSEOContent from "@/components/LocalSEOContent";
import GoogleBusinessProfile from "@/components/GoogleBusinessProfile";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Best Orthodontist in Jaipur - Dr. Priyanka Singh | SMILECRAFT Dental Hospital"
        description="Expert orthodontic care in Jaipur by Dr. Priyanka Singh at SMILECRAFT Dental Hospital, Dholai. Specializing in braces, teeth alignment, cosmetic dentistry. Book: 072308 28551"
        keywords="orthodontist jaipur, dental clinic dholai, braces jaipur, dr priyanka singh, smilecraft dental hospital, teeth alignment jaipur, cosmetic dentistry rajasthan"
        canonical="https://smilecraftdental.com/"
      />
      <Header />
      <Hero />
      <Services />
      <About />
      <LocalSEOContent />
      <Gallery />
      <InstagramFeed />
      <GoogleBusinessProfile />
      <LocationMap />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
