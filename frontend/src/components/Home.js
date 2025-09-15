import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import sampleVideo from "../assets/bgvideo.mp4";
import beforeImage from "../assets/before-image.PNG";
import afterImage from "../assets/after-image.PNG";
import founderImage from '../assets/founder.PNG';
import ConsultationModal from "./ConsultationModal"; 

const fadeUp = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.2
    } 
  }
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const listItem = {
  hidden: { opacity: 0, x: -30, scale: 0.8 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: "backOut" }
  }
};

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// New animation variants for the interior design section
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8, rotateX: -20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotateX: 0,
    transition: { duration: 0.8, ease: "backOut" }
  }
};

const slideInUp = {
  hidden: { opacity: 0, y: 100, rotateX: 45 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const Home = () => {
  const containerRef = useRef(null);
  const contactRef = useRef(null); // Ref for the contact section
  const location = useLocation();
  const navigate = useNavigate(); // Initialize the useNavigate hook
  
  // New state to manage modal visibility
  const [showModal, setShowModal] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring animations for scroll-based effects
  const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "50%"]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3], [1, 0]), {
    stiffness: 100,
    damping: 30
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 1.2]), {
    stiffness: 100,
    damping: 30
  });

  // Typing animation state
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to Meena Interiors";

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeText, 100);
      }
    };

    const startTyping = setTimeout(typeText, 1000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(startTyping);
    };
  }, []);

  // Effect to scroll to the contact section when the URL hash matches
  useEffect(() => {
    if (location.hash === "#contact-section" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  // Function to handle navigation for the "Learn More" buttons
  const handleLearnMoreClick = () => {
    navigate("/services");
  };

  // Modified function to open the modal
  const handleConsultationClick = () => {
    setShowModal(true);
  };
  
  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Before/After Image Slider Component
  const BeforeAfterSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleMouseDown = () => {
      setIsDragging(true);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchStart = () => {
      setIsDragging(true);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    useEffect(() => {
      const handleMouseMove = (e) => {
        if (!isDragging || !containerRef.current) return;
  
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        
        if (percentage >= 0 && percentage <= 100) {
          setSliderPosition(percentage);
        }
      };
  
      const handleTouchMove = (e) => {
        if (!isDragging || !containerRef.current) return;
  
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        
        if (percentage >= 0 && percentage <= 100) {
          setSliderPosition(percentage);
        }
      };

      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
      }

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }, [isDragging]);

    return (
      <div 
        ref={containerRef}
        className="relative w-full h-full cursor-col-resize"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image (Background) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${beforeImage})`
          }}
        />

        {/* After Image (Foreground with clip-path) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-100 ease-out"
          style={{
            backgroundImage: `url(${afterImage})`,
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
          }}
        />

        {/* Slider Handle */}
        <div 
          className="absolute top-0 h-full flex items-center justify-center"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <motion.div
            className="w-12 h-12 bg-white rounded-full shadow-2xl border-4 border-red-900 flex items-center justify-center cursor-col-resize"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              boxShadow: isDragging 
                ? "0 0 30px rgba(185, 28, 28, 0.5)" 
                : "0 10px 25px rgba(0, 0, 0, 0.2)"
            }}
          >
            <div className="flex space-x-1">
              <div className="w-1 h-6 bg-red-900 rounded-full"></div>
              <div className="w-1 h-6 bg-red-900 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Vertical Line */}
        <div 
          className="absolute top-0 h-full w-0.5 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        />
      </div>
    );
  };

  return (
    <div ref={containerRef} className="w-full h-full overflow-x-hidden">
      {/* Hero Section with Parallax Video */}
      <div className="relative w-full h-screen mt-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y, scale }}
        >
          <video 
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
            autoPlay 
            loop 
            muted
            playsInline
          >
            <source src={sampleVideo} type="video/mp4" />
          </video>
          
          {/* Animated Overlay Gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 z-10"
          style={{ opacity }}
        >
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
            {...floatingAnimation}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl"
            animate={{
              y: [20, -20, 20],
              x: [-10, 10, -10],
              transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Main Title with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ 
              duration: 1.5, 
              ease: "backOut",
              delay: 0.5
            }}
            className="relative"
          >
            <h1 className="text-5xl md:text-7xl leading-tight">
              <span className="text-gray-900">
                {typedText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-gray-800"
              >
                |
              </motion.span>
            </h1>
            
            {/* Decorative underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
            />
          </motion.div>

          {/* Subtitle with Elegant Animation */}
          <motion.p
            className="text-xl md:text-3xl font-cinzel font-light mb-8 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block text-black">
              Beautiful Spaces
            </span>
          </motion.p>

          {/* Call to Action Button */}
          <Link to="/explore-work">
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-red-800 to-red-900 rounded-full font-semibold text-lg shadow-2xl hover:shadow-red-800/25 border border-white/20 backdrop-blur-sm text-white"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8, ease: "backOut" }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(90, 6, 6, 0.4)",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Work
            </motion.button>
          </Link>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
              animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)", "rgba(255,255,255,0.3)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* NEW: Interior Design Services Section */}
      <motion.div
        className="w-full py-24 px-8 md:px-20 relative overflow-hidden"
        style={{ backgroundColor: "#fefbf6" }}
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30px 30px, #800000 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            variants={scaleIn}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Transform Your Space
              <motion.div
                className="absolute -bottom-3 left-0 h-1.5 bg-gradient-to-r from-red-900 to-red-700 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1.2 }}
              />
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              variants={fadeUp}
            >
              We create stunning interiors that blend functionality with beauty, so you don't have to worry about the budget. Every room becomes a masterpiece of design, tailored to your lifestyle and dreams. Plus, our estimations are completely free.
            </motion.p>
          </motion.div>

          {/* Before/After Image Slider */}
          <motion.div
            className="mb-20"
            variants={fadeUp}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-4xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
                See The Transformation
              </h3>
              
              <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gray-200">
                <BeforeAfterSlider />
              </div>
              
              <div className="flex justify-center items-center mt-6 space-x-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <span className="font-medium">Before</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-900 rounded-full"></div>
                  <span className="font-medium">After</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mb-20"
            variants={staggerContainer}
          >
            {[
              {
                icon: "🏠",
                title: "Residential Design",
                description: "We transform houses into a luxuary ones with comprehensive residential interior design. Our team handles every detail, from concept to completion, to create a beautiful and functional space that is a true reflection of your lifestyle and vision over a vast areas",
                features: ["Custom furniture selection", "Color coordination", "Space optimization", "Lighting design"]
              },
              {
                icon: "🏢",
                title: "Commercial Spaces",
                description: "Our commercial interior design expertise covers a wide range of spaces, including offices, retail stores, cafes, and hospitality venues. We manage the entire project from initial concept to final execution, ensuring every detail contributes to a cohesive and professional environment.",
                features: ["Moderate Solutions", "Brand new Designs", "Customized interior", "Professional Work"]
              },
              {
                icon: "✨",
                title: "Luxury Interiors",
                description: "Our luxury interior service is defined by a commitment to perfection. We use only the finest materials to create stunning, bespoke designs. With an utmost level of care, our process is optimized for efficiency and minimal waste, ensuring your exclusive vision comes to life with precision.",
                features: ["Premium materials", "Custom artwork", "Designer furniture", "Exclusive finishes"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
                variants={slideInUp}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 30px 60px rgba(128, 0, 0, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <motion.div
                  className="text-6xl mb-6 text-center"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-red-900 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {service.description}
                </p>
                
                <motion.ul 
                  className="space-y-3"
                  variants={staggerContainer}
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      variants={listItem}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-red-50 transition-colors duration-200"
                    >
                      <motion.span 
                        className="w-2 h-2 bg-red-900 rounded-full"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  className="mt-6 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.button
                    onClick={handleLearnMoreClick}
                    className="w-full py-3 bg-gradient-to-r from-red-900 to-red-800 text-white rounded-xl font-semibold hover:from-red-800 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-12 text-white relative overflow-hidden"
            variants={fadeUp}
          >
            {/* Background decoration */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10">
              <motion.h3 
                className="text-4xl font-bold mb-12 text-center"
                variants={scaleIn}
              >
                Our Design Process
              </motion.h3>
              
              <motion.div
                className="grid md:grid-cols-4 gap-8"
                variants={staggerContainer}
              >
                {[
                  { step: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
                  { step: "02", title: "Design", desc: "Creating the Design according to the user satifaction" },
                  { step: "03", title: "Estimation", desc: "Deciding the budget required for your project" },
                  { step: "04", title: "Completion", desc: "Completion of the work and checking if it satifies the user" }
                ].map((process, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    variants={slideInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                      whileHover={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        scale: 1.1
                      }}
                    >
                      {process.step}
                    </motion.div>
                    <h4 className="text-xl font-semibold mb-3">{process.title}</h4>
                    <p className="text-white/80">{process.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

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
          </motion.div>
        </div>
      </div>
      
      {/* Statistics Section */}
      <motion.div
        className="w-full py-20 px-8 md:px-20 relative overflow-hidden bg-gray-100"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center"
            variants={scaleIn}
          >
            Our Achievements
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              { number: "20+", label: "Years Experience" },
              { number: "250+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeUp}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <motion.h4 
                  className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-red-900 to-red-800 bg-clip-text"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    delay: index * 0.1 
                  }}
                >
                  {stat.number}
                </motion.h4>
                <p className="text-gray-600 font-medium mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <div id="contact-section" ref={contactRef} className="bg-red-900 py-16 px-6 text-center">
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
          onClick={handleConsultationClick}
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
    </div>
  );
};

export default Home;