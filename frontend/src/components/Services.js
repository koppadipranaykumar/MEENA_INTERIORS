import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ConsultationModal from "./ConsultationModal"; // Import the modal component

// --- Footer Component (Copied for brevity) ---
const Footer = () => {
    const year = new Date().getFullYear();
    
    const handleFooterLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-800 text-white pt-12 pb-4 px-4 sm:px-6 lg:px-20">
            <div className="max-w-7xl mx-auto border-b border-gray-700 pb-10 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                {/* Contact Us */}
                <div className="space-y-4 col-span-2 sm:col-span-1">
                    <h3 className="text-lg font-bold text-red-600 uppercase tracking-wider">Contact Us</h3>
                    <div className="space-y-2 text-sm text-gray-400">
                        <a href="tel:+919849915677" className="flex items-center hover:text-red-400 transition-colors">
                            <span className="mr-2">📞</span>+91 984991 5677 / +91 95334 64777
                        </a>
                        <a href="tel:+919849915677" className="flex items-center hover:text-red-400 transition-colors">
                            <span className="mr-2">📱</span>+91 98499 15677
                        </a>
                        <a href="mailto:koppadisuribabu@gmail.com" className="flex items-center hover:text-red-400 transition-colors">
                            <span className="mr-2">📧</span>koppadisuribabu@gmail.com
                        </a>
                        <div className="flex items-start">
                            <span className="mr-2 mt-1">📍</span>
                            <p>
                                Bolarum, Railway Employees Colony,
                                <br />
                                Secunderabad, Telangana - 500010
                            </p>
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div className="space-y-4 col-span-2 sm:col-span-1">
                    <h3 className="text-lg font-bold text-red-600 uppercase tracking-wider">Links</h3>
                    <nav className="space-y-2 text-sm text-gray-400 flex flex-col">
                        <Link to="/" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">Home</Link>
                        <Link to="/services" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">Services</Link>
                        <Link to="/explore-work" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">Projects</Link>
                        <Link to="/contact" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">Contact</Link>
                    </nav>
                </div>

                {/* Products/Services (Our Focus) */}
                <div className="space-y-4 col-span-2 md:col-span-1">
                    <h3 className="text-lg font-bold text-red-600 uppercase tracking-wider">Our Focus</h3>
                    <nav className="space-y-2 text-sm text-gray-400 flex flex-col">
                        <Link to="/explore-work" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">Modular Kitchens</Link>
                        <Link to="/explore-work" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">Designer Doors</Link>
                        <Link to="/explore-work" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">Living Halls</Link>
                        <Link to="/explore-work" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">False Ceilings</Link>
                        <Link to="/explore-work" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">TV Units</Link>
                        <Link to="/explore-work" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">Wardrobes</Link>
                        <Link to="/explore-work" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">Shoe Box</Link>
                        <Link to="/explore-work" onClick={handleFooterLinkClick} className="hover:text-red-400 transition-colors">Pooja Unit</Link>
                    </nav>
                </div>

                {/* Social Media (Only Instagram) */}
                <div className="space-y-4 col-span-2 sm:col-span-1">
                    <h3 className="text-lg font-bold text-red-600 uppercase tracking-wider">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="#" className="hover:text-red-500 transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        
                        {/* Instagram icon with the provided link */}
                        <a 
                            href="https://www.instagram.com/meena_interiors/?hl=en" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-red-500 transition-colors" 
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="#" className="hover:text-red-500 transition-colors" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="hover:text-red-500 transition-colors" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section (Updated styling and text) */}
            <div className="max-w-7xl mx-auto pt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {year} Meena Interiors. All rights reserved.</p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2 sm:mt-0 items-center">
                    <span className="hover:text-gray-300 transition-colors cursor-default">Privacy Policy</span>
                    <span className="hover:text-gray-300 transition-colors cursor-default">Terms And Conditions</span>
                    <span className="text-gray-500 hover:text-gray-300 transition-colors mt-2 sm:mt-0 cursor-default">Made with ❤️ by K Pranay Kumar</span>
                </div>
            </div>
        </footer>
    );
};

// --- Services Component ---

const Services = () => {
    // New state to manage modal visibility
    const [showModal, setShowModal] = useState(false);

    // useEffect to scroll to the top of the page when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Effect to disable body scroll when the modal is open
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]); // Dependency on showModal

    const [activeTab, setActiveTab] = useState('services');
    
    // New function to open the modal
    const handleConsultationClick = () => {
        setShowModal(true);
    };
    
    // Function to close the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };


    // New list of specific project types with "Estimation"
    const serviceCategories = [
        {
            id: "residential-interiors",
            title: "Residential Interiors",
            icon: "🏠",
            description: "Complete interior design and execution for new homes and apartments.",
        },
        {
            id: "home-renovations",
            title: "Home Renovations",
            icon: "🔨",
            description: "Transforming existing spaces with modern layouts, materials, and finishes.",
        },
        {
            id: "commercial-spaces",
            title: "Commercial Spaces",
            icon: "🏢",
            description: "Designing professional and functional interiors for offices, retail, and more.",
        },
        {
            id: "furniture",
            title: "Furniture",
            icon: "🪑",
            description: "We also design the furnitures(beds,Dining table and many more)",
        },
        {
            id: "modular-solutions",
            title: "Modular Solutions",
            icon: "📦",
            description: "Creating efficient modular kitchens, wardrobes, and storage systems.",
        },
        {
            id: "estimation",
            title: "Estimation",
            icon: "📊",
            description: "We provide the free Estimations require for your project",
        }
    ];

    // Material specifications
    const materialSpecs = [
        {
            category: "Wood & Boards",
            items: [
                { name: "Dock Ply Club", grade: "CM/L-8435685", thickness: "19mm" },
                { name: "Gurjan Plywood", grade: "710 BWP Grade", thickness: "19mm" },
                { name: "practical board", grade: "Fine Wood", thickness: "25mm" }
            ]
        },
        {
            category: "Hardware & Accessories",
            items: [
                { name: "Hinges", grade: "Soft Close", brand: "Hettich/Blum" },
                { name: "Drawer Channels", grade: "Full Extension", brand: "Hettich" },
                { name: "Handles & Knobs", grade: "Stainless Steel/Aluminum", brand: "Various" },
                { name: "Locks", grade: "Multi-Point", brand: "Yale/Godrej" }
            ]
        },
        {
            category: "Finishes & Surfaces",
            items: [
                { name: "Laminates (liner)", grade: "0.8mm", color: "White" },
                { name: "Laminates (out sold)", grade: "1mm", brand: "Virgo, Croma, Centares, Green Laminate, Marino" }
            ]
        },
        {
            category: "Glass",
            items: [
                { name: "Modiguard", grade: "5mm", type: "Glass" },
                { name: "Sand Globin", grade: "8mm", type: "Glass" }
            ]
        }
    ];

    // Terms and conditions
    const termsAndConditions = [
        {
            category: "Payment Terms",
            items: [
                "Payments are to be made in cheque/Neft advance -60%",
                "After Structure is formed 30% payment",
                "5% payment at the time of hardware fitting",
                "Final payment: 5% after completion and at the time of handover",
                "Payment modes: Cash, Bank Transfer, Cheque",
            ]
        },
        {
            category: "Service Guidelines",
            items: [
                "Site visit and measurement are taken before quotation",
                "quotation is made and must be approved by the client",
                "Once the quotation is made and approved their will not be any changes ",
                "Any additional scope in work will be charged extra",
                "Any damage caused due to rough usage after handover will not come under our responsibility",
                "3 days prior information has to be given to start the site"        
            ]
        }
    ];
    
    return (
        <div className="min-h-screen pt-20">
            {/* Back to Home Button */}
            <Link to="/" className="absolute top-20 left-4 z-20">
                <motion.button
                    className="px-6 py-2 bg-white text-red-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    ← Back to Home
                </motion.button>
            </Link>

            {/* Header Section */}
            <div className="text-center py-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 relative inline-block"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Our Services
                        <motion.div
                            className="absolute -bottom-3 left-0 h-1.5 bg-gradient-to-r from-red-900 to-red-700 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1, duration: 1.2 }}
                        />
                    </motion.h1>
                    <motion.p
                        className="text-xl text-black-600 max-w-3xl mx-auto leading-relaxed font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Services in Meena-Interiors cover all the Services, Material Type and the Terms & conditions.
                    </motion.p>
                </motion.div>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
                <div className="bg-white rounded-full p-2 shadow-lg">
                    {[
                        { id: 'services', label: 'Services' },
                        { id: 'materials', label: 'Materials' },
                        { id: 'terms', label: 'Terms & Conditions' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'bg-red-900 text-white'
                                    : 'text-gray-600 hover:text-red-900'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Services Tab */}
            {activeTab === 'services' && (
                <div className="px-6 pb-20">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceCategories.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="relative h-48 bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300 transform group"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
                            >
                                {/* Initial Content */}
                                <div className="flex flex-col items-center transition-all duration-500 transform group-hover:-translate-y-8 group-hover:opacity-0">
                                    <div className="text-5xl mb-4 text-red-700">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                                </div>

                                {/* Hover Content */}
                                <div className="absolute inset-0 p-6 flex items-center justify-center bg-red-800 rounded-xl transition-all duration-500 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    <div className="text-white text-center">
                                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                        <p className="text-sm font-light leading-relaxed">{service.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {/* Materials Tab */}
            {activeTab === 'materials' && (
                <div className="px-6 pb-20">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {materialSpecs.map((category, index) => (
                                <motion.div
                                    key={category.category}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <div className="bg-gradient-to-r from-red-900 to-red-800 p-6">
                                        <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead>
                                                    <tr className="border-b border-gray-200">
                                                        <th className="text-left py-3 px-4 font-semibold">Material</th>
                                                        <th className="text-left py-3 px-4 font-semibold">Grade</th>
                                                        <th className="text-left py-3 px-4 font-semibold">Specification</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {category.items.map((item, itemIndex) => (
                                                        <tr key={itemIndex} className="border-b border-gray-100 hover:bg-gray-50">
                                                            <td className="py-3 px-4 font-medium">{item.name}</td>
                                                            <td className="py-3 px-4 text-gray-600">{item.grade}</td>
                                                            <td className="py-3 px-4 text-gray-600">
                                                                {item.thickness || item.brand || 'Standard'}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}

            {/* Terms Tab */}
            {activeTab === 'terms' && (
                <div className="px-6 pb-20">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            className="grid md:grid-cols-2 gap-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {termsAndConditions.map((section, index) => (
                                <motion.div
                                    key={section.category}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="bg-gradient-to-r from-red-900 to-red-800 p-4">
                                        <h3 className="text-xl font-bold text-white">{section.category}</h3>
                                    </div>
                                    
                                    <div className="p-6">
                                        <ul className="space-y-3">
                                            {section.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-start space-x-3">
                                                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            )}

            {/* About Proprietor Section (Empty in original) */}
            <div className="bg-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl font-bold text-gray-800 mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                    </motion.h2> 
                </div>
            </div>

            {/* Contact Section (MODIFIED) */}
            <div className="bg-red-900 py-16 px-6 text-center">
                <motion.h2
                    className="text-3xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Ready to Start Your Project?
                </motion.h2>
                <motion.p
                    className="text-white/90 mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Contact us today for a detailed quotation and free consultation. All measurements and design consultations are complimentary.
                </motion.p>
                <motion.button
                    onClick={handleConsultationClick} // Use handler to open modal
                    className="bg-white text-red-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Free Consultation
                </motion.button>
            </div>
            
            {/* Render the modal component here */}
            <ConsultationModal isVisible={showModal} onClose={handleCloseModal} />

            {/* FOOTER INTEGRATION */}
            <Footer />
        </div>
    );
};

export default Services;