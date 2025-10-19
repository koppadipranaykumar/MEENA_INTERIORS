import React, { useEffect } from 'react';

// NOTE: Ensure your existing BUSINESS_DATA object is imported or defined here.
const BUSINESS_DATA = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Meena Interiors",
    "url": "https://www.meenainteriors.com/",          
    "image": "https://www.meenainteriors.com/logo3.PNG", 
    "telephone": "+91 984991 5677", 
    "email": "koppadisuribabu@gmail.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bolarum, Railway Employees Colony",
        "addressLocality": "Secunderabad",
        "addressRegion": "Telangana",
        "postalCode": "500010",
        "addressCountry": "IN"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8", 
        "bestRating": "5.0",
        "ratingCount": "150"  
    },
    "founder": {
        "@type": "Person",
        "name": "Mr. KOPPADI SURI BABU",
        "jobTitle": "Founder & Chief Designer"
    }
};

const LocalBusinessSchema = () => {
    useEffect(() => {
        // 1. Create the <script> element
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        
        // 2. Insert the stringified JSON data
        // This uses innerHTML directly on the script tag, which is guaranteed to work.
        script.innerHTML = JSON.stringify(BUSINESS_DATA);
        
        // 3. Append the script to the <head>
        document.head.appendChild(script);

        // Cleanup function: remove the script tag when the component unmounts
        return () => {
            document.head.removeChild(script);
        };
    }, []); // Empty dependency array ensures this runs once on mount

    // This component renders nothing visible
    return null; 
};

export default LocalBusinessSchema;