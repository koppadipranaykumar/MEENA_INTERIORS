import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence for exit animations
import { Link } from "react-router-dom";
import founderImage from '../assets/founder.PNG';

// A helper function to dynamically import all images from a directory
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
};

// Use require.context to load all PNG files from their respective folders
const kitchenImages = importAll(require.context('../assets/modularkitchen', false, /\.(PNG)$/));
const doorImages = importAll(require.context('../assets/doors', false, /\.(PNG)$/));
const livinghallsImages = importAll(require.context('../assets/livinghalls', false, /\.(PNG)$/));
const fallsImages = importAll(require.context('../assets/falls', false, /\.(PNG)$/));
const tvImages = importAll(require.context('../assets/TVUNIT', false, /\.(PNG)$/));
const wardrobesImages = importAll(require.context('../assets/wardrobes', false, /\.(PNG)$/));
const poojaUnitImages = importAll(require.context('../assets/poojaunit', false, /\.(PNG)$/));
const shoeBoxImages = importAll(require.context('../assets/shoebox', false, /\.(PNG)$/));
const stairCaseImages = importAll(require.context('../assets/staircase', false, /\.(PNG)$/));
const barRoomImages = importAll(require.context('../assets/barroom', false, /\.(PNG)$/));
const sinkAreaImages = importAll(require.context('../assets/washarea', false, /\.(PNG)$/));


// --- Footer Component (Copied for integration) ---

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


// --- ExploreWorkPage Component ---

const ExploreWorkPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    // useEffect to scroll to the top of the page when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    // FIX: Use useEffect to disable/enable body scrolling when the modal opens/closes
    useEffect(() => {
        if (selectedCategory) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedCategory]); 

    // Initial ID counter to ensure unique IDs for all images across categories
    let nextImageId = 1;

    // Function to create an array of image objects from the dynamic import
    const createImagesArray = (imagesObject, titlePrefix) => {
        return Object.keys(imagesObject).map((key) => {
            const id = nextImageId++;
            return {
                id: id,
                title: `${titlePrefix} ${id}`,
                imageUrl: imagesObject[key],
            };
        });
    };

    // Work categories with image containers
    const workCategories = [
        {
            id: "modular-kitchen",
            title: "Modular Kitchen",
            icon: "🍳",
            description: "Modern and functional kitchen designs",
            images: createImagesArray(kitchenImages, "Kitchen Design"),
        },
        {
            id: "doors",
            title: "Designer Doors",
            icon: "🚪",
            description: "Elegant door designs for your home",
            images: createImagesArray(doorImages, "Door Design"),
        },
        {
            id: "halls",
            title: "Living Halls",
            icon: "🛋️",
            description: "Comfortable living spaces",
            images: createImagesArray(livinghallsImages, "Hall Design"),
        },
        {
            id: "false-ceiling",
            title: "False Ceiling",
            icon: "⚡",
            description: "Creative ceiling designs with lighting",
            images: createImagesArray(fallsImages, "Ceiling Design"),
        },
        {
            id: "tv-units",
            title: "TV Units",
            icon: "📺",
            description: "Stylish entertainment centers",
            images: createImagesArray(tvImages, "TV Unit"),
        },
        {
            id: "wardrobes",
            title: "Wardrobes",
            icon: "👗",
            description: "Custom storage solutions",
            images: createImagesArray(wardrobesImages, "Wardrobe"),
        },
        {
            id: "pooja-unit",
            title: "Pooja Unit",
            icon: "🕉️",
            description: "Custom pooja unit designs for your prayer room",
            images: createImagesArray(poojaUnitImages, "Pooja Unit"),
        },
        {
            id: "shoe-box",
            title: "Shoe Box",
            icon: "👟",
            description: "Creative and compact shoe storage solutions",
            images: createImagesArray(shoeBoxImages, "Shoe Box"),
        },
        {
            id: "stair-case",
            title: "Stair Case",
            icon: "🪜",
            description: "Elegant and modern stair case designs",
            images: createImagesArray(stairCaseImages, "Stair Case"),
        },
        {
            id: "bar-room",
            title: "Bar Room",
            icon: "🍸",
            description: "Stylish and sophisticated bar room interiors",
            images: createImagesArray(barRoomImages, "Bar Room"),
        },
        {
            id: "sink-area",
            title: "Wash Area",
            icon: "🚰",
            description: "Functional and stylish sink area solutions",
            images: createImagesArray(sinkAreaImages, "Sink Area"),
        }
    ];

    const ImageModal = ({ category, onClose }) => {
        const [selectedImageInModal, setSelectedImageInModal] = useState(null); // New state for full-screen image

        const currentIndex = selectedImageInModal 
            ? category.images.findIndex(img => img.id === selectedImageInModal.id) 
            : -1;

        const goToNextImage = () => {
            const nextIndex = (currentIndex + 1) % category.images.length;
            setSelectedImageInModal(category.images[nextIndex]);
        };

        const goToPrevImage = () => {
            const prevIndex = (currentIndex - 1 + category.images.length) % category.images.length;
            setSelectedImageInModal(category.images[prevIndex]);
        };

        return (
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => { // Click outside closes modal if not on full image
                    if (!selectedImageInModal) {
                        onClose();
                    } else {
                        // If full image is open, click outside takes it back to grid
                        setSelectedImageInModal(null);
                    }
                }}
            >
                <AnimatePresence>
                    {selectedImageInModal ? (
                        // Full-screen image view
                        <motion.div
                            key="fullscreen-image"
                            className="relative bg-white rounded-lg p-4 sm:p-6 max-w-5xl w-full h-[90vh] flex flex-col items-center justify-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing on image click
                            onWheel={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-4 right-4 flex space-x-2 z-10">
                                <button
                                    onClick={() => setSelectedImageInModal(null)}
                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-300 transition-colors"
                                >
                                    All Images
                                </button>
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="flex items-center justify-center w-full h-full relative">
                                <button 
                                    onClick={(e) => { e.stopPropagation(); goToPrevImage(); }} 
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full text-2xl z-10 hover:bg-opacity-75 transition-opacity"
                                >
                                    &lt;
                                </button>
                                <img
                                    src={selectedImageInModal.imageUrl}
                                    alt={selectedImageInModal.title}
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                                    onError={(e) => { e.target.src = 'https://placehold.co/800x600/E55757/white?text=Image+Not+Found' }}
                                />
                                <button 
                                    onClick={(e) => { e.stopPropagation(); goToNextImage(); }} 
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full text-2xl z-10 hover:bg-opacity-75 transition-opacity"
                                >
                                    &gt;
                                </button>
                            </div>
                            <div className="absolute bottom-4 text-gray-700 font-semibold text-lg">
                                {currentIndex + 1} / {category.images.length}
                            </div>
                        </motion.div>
                    ) : (
                        // Grid of images view
                        <motion.div
                            key="image-grid"
                            className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            onWheel={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    {category.icon} {category.title}
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-gray-700 text-2xl"
                                >
                                    ×
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {category.images.map((image) => (
                                    <motion.div
                                        key={image.id}
                                        className="relative rounded-lg overflow-hidden border-2 border-gray-300 bg-gray-200 cursor-pointer hover:shadow-lg transition-shadow duration-200"
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => setSelectedImageInModal(image)} // Set image for full-screen view
                                    >
                                        <img 
                                            src={image.imageUrl} 
                                            alt={image.title} 
                                            className="w-full h-full object-contain" 
                                            onError={(e) => { e.target.src = 'https://placehold.co/400x300/E55757/white?text=Image+Not+Found' }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

    return (
        <div
            className="min-h-screen pt-20"
        >
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
                        Explore Our Work
                        <motion.div
                            className="absolute -bottom-3 left-0 h-1.5 bg-gradient-to-r from-red-900 to-red-700 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1, duration: 1.2 }}
                        />
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        We at Meena-Interiors define all type of works we do. We majorly do a large amount of wood work including all the types displayed below.
                        The images displayed below are genuinely done by meena-interiors and no image was taken from the external websites
                    </motion.p>
                </motion.div>
                
            </div>

            {/* Work Categories Grid */}
            <div className="px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {workCategories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {/* Category Header */}
                                <div className="bg-gradient-to-r from-red-900 to-red-800 p-6 text-center">
                                    <div className="text-5xl mb-3">{category.icon}</div>
                                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                                    <p className="text-white/80 mt-2">{category.description}</p>
                                </div>

                                {/* Image Preview Grid */}
                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        {category.images.slice(0, 4).map((image, imgIndex) => (
                                            <div
                                                key={image.id}
                                                className="rounded h-20 flex items-center justify-center overflow-hidden border-2 border-gray-200"
                                            >
                                                <img 
                                                    src={image.imageUrl} 
                                                    alt={image.title} 
                                                    className="w-full h-full object-contain" 
                                                    onError={(e) => { e.target.src = 'https://placehold.co/400x300/E55757/white?text=Image+Not+Found' }}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="text-center">
                                        <span className="text-gray-600 font-medium">
                                            {category.images.length} Images
                                        </span>
                                        <div className="mt-3">
                                            <button className="bg-red-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-800 transition-colors">
                                                View All
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* About Proprietor Section */}
            <div className="bg-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl font-bold text-gray-800 mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Meet Our Proprietor
                    </motion.h2>

                    <motion.div
                        className="bg-gray-50 rounded-lg p-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Proprietor Image */}
                        <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                            <img 
                                src={founderImage} 
                                alt="Proprietor" 
                                className="w-full h-full object-cover" 
                                onError={(e) => { e.target.src = 'https://placehold.co/128x128/E55757/white?text=Founder' }}
                            />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            Mr. KOPPADI SURI BABU
                        </h3>
                        <p className="text-red-900 font-semibold mb-4">
                            Founder & Chief Designer
                        </p>
                        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                            With over 20 years of experience in interior design, our proprietor has been the visionary behind Meena Interiors' success. His dedication and hardwork in creating beautiful, functional spaces has transformed hundreds of homes and commercial properties. Every project reflects his commitment to excellence and client satisfaction.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                            {[
                                { label: "Experience", value: "20+ Years" },
                                { label: "Projects", value: "250+" },
                                { label: "Meeting Customer Satisfaction", value: "100%" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-2xl font-bold text-red-900">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Contact Section */}
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
                    Contact us today for a free consultation and let's bring your dream space to life.
                </motion.p>
                <motion.button
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

            {/* Image Modal */}
            <AnimatePresence> {/* Wrap ImageModal with AnimatePresence for exit animations */}
                {selectedCategory && (
                    <ImageModal
                        category={selectedCategory}
                        onClose={() => setSelectedCategory(null)}
                    />
                )}
            </AnimatePresence>
            
            {/* FOOTER INTEGRATION */}
            <Footer />
        </div>
    );
};

export default ExploreWorkPage;