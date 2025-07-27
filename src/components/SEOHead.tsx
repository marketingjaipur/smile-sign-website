import { Helmet } from "react-helmet-async";
import { businessInfo, generateLocalBusinessSchema, generateDoctorSchema } from "@/lib/seo";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object[];
}

const SEOHead = ({ 
  title = "Best Orthodontist in Jaipur - Dr. Priyanka Singh | SMILECRAFT Dental Hospital",
  description = "Expert orthodontic care in Jaipur by Dr. Priyanka Singh at SMILECRAFT Dental Hospital. Specializing in braces, teeth alignment, and cosmetic dentistry. Book appointment: 072308 28551",
  keywords = "orthodontist jaipur, dental clinic jaipur, braces jaipur, teeth alignment, cosmetic dentistry, dr priyanka singh, smilecraft dental, dholai jaipur, best dentist jaipur",
  canonical,
  ogImage = "/lovable-uploads/Dr Priyanka Singh Orthodontics .png",
  structuredData = []
}: SEOHeadProps) => {
  const defaultStructuredData = [
    generateLocalBusinessSchema(),
    generateDoctorSchema()
  ];

  const allStructuredData = [...defaultStructuredData, ...structuredData];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Local Business Meta Tags */}
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur" />
      <meta name="geo.position" content={`${businessInfo.coordinates.latitude};${businessInfo.coordinates.longitude}`} />
      <meta name="ICBM" content={`${businessInfo.coordinates.latitude}, ${businessInfo.coordinates.longitude}`} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="business.business" />
      <meta property="og:url" content={canonical || businessInfo.website} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={businessInfo.name} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Business Specific Open Graph */}
      <meta property="business:contact_data:street_address" content={businessInfo.address.streetAddress} />
      <meta property="business:contact_data:locality" content={businessInfo.address.addressLocality} />
      <meta property="business:contact_data:region" content={businessInfo.address.addressRegion} />
      <meta property="business:contact_data:postal_code" content={businessInfo.address.postalCode} />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:phone_number" content={businessInfo.phone} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Local Business Verification */}
      <meta name="google-site-verification" content="your-google-verification-code" />
      
      {/* Structured Data */}
      {allStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;