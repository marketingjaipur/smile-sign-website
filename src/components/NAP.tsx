import { businessInfo } from "@/lib/seo";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

interface NAPProps {
  variant?: "header" | "footer" | "contact" | "inline";
  showIcons?: boolean;
  className?: string;
}

const NAP = ({ variant = "inline", showIcons = true, className = "" }: NAPProps) => {
  const baseClasses = "text-sm";
  
  const renderAddress = () => (
    <div className={`flex items-center space-x-2 ${baseClasses}`}>
      {showIcons && <MapPin size={16} className="text-primary flex-shrink-0" />}
      <span className="text-muted-foreground">
        {businessInfo.address.streetAddress}, {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
      </span>
    </div>
  );

  const renderPhone = () => (
    <div className={`flex items-center space-x-2 ${baseClasses}`}>
      {showIcons && <Phone size={16} className="text-primary flex-shrink-0" />}
      <a 
        href={`tel:+91${businessInfo.phone.replace(/\s/g, '')}`}
        className="text-muted-foreground hover:text-primary transition-colors"
        itemProp="telephone"
      >
        {businessInfo.phone}
      </a>
    </div>
  );

  const renderEmail = () => (
    <div className={`flex items-center space-x-2 ${baseClasses}`}>
      {showIcons && <Mail size={16} className="text-primary flex-shrink-0" />}
      <a 
        href={`mailto:${businessInfo.email}`}
        className="text-muted-foreground hover:text-primary transition-colors"
        itemProp="email"
      >
        {businessInfo.email}
      </a>
    </div>
  );

  const renderHours = () => (
    <div className={`flex items-center space-x-2 ${baseClasses}`}>
      {showIcons && <Clock size={16} className="text-primary flex-shrink-0" />}
      <div className="text-muted-foreground">
        <div>Mon - Sat: 9:00 AM - 8:00 PM</div>
        <div>Sunday: Emergency Only</div>
      </div>
    </div>
  );

  if (variant === "header") {
    return (
      <div className={`hidden md:flex items-center space-x-6 ${className}`} itemScope itemType="https://schema.org/DentalClinic">
        <meta itemProp="name" content={businessInfo.name} />
        {renderPhone()}
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={`space-y-3 ${className}`} itemScope itemType="https://schema.org/DentalClinic">
        <meta itemProp="name" content={businessInfo.name} />
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="streetAddress" content={businessInfo.address.streetAddress} />
          <meta itemProp="addressLocality" content={businessInfo.address.addressLocality} />
          <meta itemProp="addressRegion" content={businessInfo.address.addressRegion} />
          <meta itemProp="postalCode" content={businessInfo.address.postalCode} />
          <meta itemProp="addressCountry" content="IN" />
          {renderAddress()}
        </div>
        {renderPhone()}
        {renderEmail()}
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className={`space-y-4 ${className}`} itemScope itemType="https://schema.org/DentalClinic">
        <meta itemProp="name" content={businessInfo.name} />
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <meta itemProp="streetAddress" content={businessInfo.address.streetAddress} />
          <meta itemProp="addressLocality" content={businessInfo.address.addressLocality} />
          <meta itemProp="addressRegion" content={businessInfo.address.addressRegion} />
          <meta itemProp="postalCode" content={businessInfo.address.postalCode} />
          <meta itemProp="addressCountry" content="IN" />
          {renderAddress()}
        </div>
        {renderPhone()}
        {renderEmail()}
        {renderHours()}
      </div>
    );
  }

  return (
    <div className={`flex flex-col space-y-2 ${className}`} itemScope itemType="https://schema.org/DentalClinic">
      <meta itemProp="name" content={businessInfo.name} />
      <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <meta itemProp="streetAddress" content={businessInfo.address.streetAddress} />
        <meta itemProp="addressLocality" content={businessInfo.address.addressLocality} />
        <meta itemProp="addressRegion" content={businessInfo.address.addressRegion} />
        <meta itemProp="postalCode" content={businessInfo.address.postalCode} />
        <meta itemProp="addressCountry" content="IN" />
        {renderAddress()}
      </div>
      {renderPhone()}
    </div>
  );
};

export default NAP;