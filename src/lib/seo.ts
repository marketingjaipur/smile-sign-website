// SEO utilities and structured data for local business
export const businessInfo = {
  name: "Abhipriya's SMILECRAFT Dental Hospital",
  legalName: "SMILECRAFT Dental Hospital",
  doctor: "Dr. Priyanka Singh",
  address: {
    streetAddress: "C42, Sheer Sagar Patarkar Colony, Patrakar Colony",
    addressLocality: "Dholai, Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302020",
    addressCountry: "IN"
  },
  phone: "072308 28551",
  email: "info@smilecraftdental.com",
  website: "https://smilecraftdental.com",
  coordinates: {
    latitude: "26.9124", // Approximate coordinates for Jaipur
    longitude: "75.7873"
  },
  hours: {
    monday: "09:00-20:00",
    tuesday: "09:00-20:00", 
    wednesday: "09:00-20:00",
    thursday: "09:00-20:00",
    friday: "09:00-20:00",
    saturday: "09:00-20:00",
    sunday: "Emergency Only"
  },
  services: [
    "Orthodontics",
    "Cosmetic Dentistry", 
    "Preventive Care",
    "Restorative Dentistry",
    "Oral Surgery",
    "Family Dentistry",
    "Teeth Whitening",
    "Dental Implants",
    "Root Canal Treatment",
    "Braces Treatment"
  ],
  specialties: [
    "Orthodontics",
    "Dental Surgery",
    "Cosmetic Dentistry"
  ]
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    "name": businessInfo.name,
    "legalName": businessInfo.legalName,
    "image": [
      "/lovable-uploads/Dr Priyanka Singh Orthodontics .png",
      "/lovable-uploads/8d8aacd7-f8df-4392-9234-2719912c37fa.png"
    ],
    "description": "Expert orthodontic and dental care in Jaipur by Dr. Priyanka Singh. Specializing in braces, cosmetic dentistry, and comprehensive oral health treatments.",
    "url": businessInfo.website,
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.streetAddress,
      "addressLocality": businessInfo.address.addressLocality,
      "addressRegion": businessInfo.address.addressRegion,
      "postalCode": businessInfo.address.postalCode,
      "addressCountry": businessInfo.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.coordinates.latitude,
      "longitude": businessInfo.coordinates.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "₹₹",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI"],
    "currenciesAccepted": "INR",
    "hasMap": `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address.streetAddress + ', ' + businessInfo.address.addressLocality)}`,
    "medicalSpecialty": businessInfo.specialties,
    "availableService": businessInfo.services.map(service => ({
      "@type": "MedicalProcedure",
      "name": service
    })),
    "founder": {
      "@type": "Person",
      "name": businessInfo.doctor,
      "jobTitle": "Orthodontist",
      "image": "/lovable-uploads/479488277_17995938365756085_7720740443232890062_n.jpg"
    },
    "employee": {
      "@type": "Person", 
      "name": businessInfo.doctor,
      "jobTitle": "Chief Orthodontist & Founder"
    },
    "areaServed": [
      "Jaipur",
      "Dholai",
      "Mansarovar",
      "Rajasthan"
    ],
    "knowsAbout": [
      "Orthodontics",
      "Dental Braces",
      "Teeth Alignment",
      "Cosmetic Dentistry",
      "Oral Health"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
};

export const generateDoctorSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": businessInfo.doctor,
    "jobTitle": "Orthodontist",
    "worksFor": {
      "@type": "DentalClinic",
      "name": businessInfo.name
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.streetAddress,
      "addressLocality": businessInfo.address.addressLocality,
      "addressRegion": businessInfo.address.addressRegion,
      "postalCode": businessInfo.address.postalCode,
      "addressCountry": businessInfo.address.addressCountry
    },
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "image": "/lovable-uploads/479488277_17995938365756085_7720740443232890062_n.jpg",
    "alumniOf": "Dental College",
    "knowsAbout": [
      "Orthodontics",
      "M.D.S Orthodontics",
      "Dental Braces",
      "Teeth Alignment",
      "Bite Correction"
    ],
    "hasCredential": [
      "B.D.S - Bachelor of Dental Surgery",
      "M.D.S - Master of Dental Surgery in Orthodontics"
    ]
  };
};

export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};