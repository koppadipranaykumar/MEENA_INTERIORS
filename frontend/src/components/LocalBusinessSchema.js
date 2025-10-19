import React from 'react';
import { Helmet } from 'react-helmet';

// --- SCHEMA DATA ---
// NOTE: We are using "logo3.PNG" which was confirmed to be in your public/ folder.
// Ensure this filename and capitalization is exact on your server.

const BUSINESS_DATA = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness", // Appropriate category for Interior Design
    
    // Core Business Identity
    "name": "Meena Interiors",
    "url": "https://www.meenainteriors.com/", 
    
    // Corrected Logo URL - Using the file found in your public/ folder
    "image": "https://www.meenainteriors.com/logo192.PNG", 
    
    // Contact Information (Extracted from Home.js Footer)
    "telephone": "+91 984991 5677", 
    "email": "koppadisuribabu@gmail.com",
    
    // Physical Location (Extracted from Home.js Footer)
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bolarum, Railway Employees Colony",
        "addressLocality": "Secunderabad",
        "addressRegion": "Telangana",
        "postalCode": "500010",
        "addressCountry": "IN"
    },
    
    // Aggregate Rating (Crucial for Rich Snippets)
    // IMPORTANT: These values MUST be visible on your website's homepage.
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8", // Replace with your actual average rating
        "bestRating": "5.0",
        "ratingCount": "150"  // Replace with your actual total review count
    },
    
    // Proprietor/Founder for better SEO Entity recognition
    "founder": {
        "@type": "Person",
        "name": "Mr. KOPPADI SURI BABU",
        "jobTitle": "Founder & Chief Designer"
    }
    // You may also add a 'description' property here if you have a short description.
};

const LocalBusinessSchema = () => (
    <Helmet>
        {/* This method uses JSON.stringify() and dangerouslySetInnerHTML to correctly 
            inject the unescaped JSON data into the document head, making it crawlable by Google.
        */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_DATA) }}
        />
    </Helmet>
);

export default LocalBusinessSchema;