import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  // Smooth background opacity based on scroll
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle contact button click
  const handleContactClick = (e) => {
    e.preventDefault();
    
    // If we're already on home page, scroll to contact section
    if (location.pathname === "/") {
      const contactElement = document.getElementById("contact-section");
      if (contactElement) {
        contactElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If we're on a different page, navigate to home with hash
      window.location.href = "/#contact-section";
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  // Animation variants
  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 1.2,
        ease: "backOut",
        delay: 0.3
      }
    },
    hover: { 
      scale: 1.05,
      rotate: 2,
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    initial: { opacity: 0, x: -30 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8 + (i * 0.1),
        ease: "easeOut"
      }
    }),
    hover: {
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -50 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact", isContactButton: true }
  ];

  return (
    <motion.nav
      className="fixed w-full top-0 left-0 z-50"
      variants={navVariants}
      initial="initial"
      animate="animate"
    >
      {/* Dynamic background with glassmorphism */}
      <motion.div
        className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-white/20"
        style={{
          opacity: backgroundOpacity,
          backdropFilter: `blur(${backdropBlur}px)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isScrolled ? 0.95 : 0,
          transition: { duration: 0.3 }
        }}
      />

      {/* Gradient overlay for extra depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0,
          transition: { duration: 0.3 }
        }}
      />

      <div className="relative flex items-center justify-between py-4 px-6 md:px-8">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group">
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="relative"
          >
            <img
              src={logo}
              alt="Meena Interiors Logo"
              className="h-16 w-16 object-contain relative z-10 drop-shadow-lg"
            />
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col leading-tight"
          >
            <motion.span
              className="text-lg tracking-wide font-black bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent"
              style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              MEENA INTERIORS
            </motion.span>
            <motion.span
              className="text-sm text-gray-700 font-medium"
              style={{ fontFamily: "Lucida Sans Unicode, Arial, sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Beautiful Spaces
            </motion.span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.ul 
          className="hidden md:flex items-center space-x-8"
          initial="initial"
          animate="animate"
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.path}
              variants={linkVariants}
              custom={index}
              whileHover="hover"
              className="relative"
            >
              {item.isContactButton ? (
                <button
                  onClick={handleContactClick}
                  className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-red-700"
                      : "text-gray-800 hover:text-red-700"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: location.pathname === item.path ? "100%" : 0 
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-red-50 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-red-700"
                      : "text-gray-800 hover:text-red-700"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: location.pathname === item.path ? "100%" : 0 
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-red-50 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              )}
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.span
              key={index}
              className="block h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-red-700"
              animate={{
                width: isMobileMenuOpen ? "24px" : index === 1 ? "20px" : "16px",
                rotate: isMobileMenuOpen ? 
                  (index === 0 ? 45 : index === 2 ? -45 : 0) : 0,
                y: isMobileMenuOpen ? 
                  (index === 0 ? 4 : index === 2 ? -4 : 0) : 0,
                opacity: isMobileMenuOpen && index === 1 ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  variants={mobileItemVariants}
                >
                  {item.isContactButton ? (
                    <button
                      onClick={handleContactClick}
                      className={`block w-full text-left px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? "text-red-700 bg-red-50"
                          : "text-gray-800 hover:text-red-700 hover:bg-gray-50"
                      }`}
                    >
                      <motion.span
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        {item.name}
                      </motion.span>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? "text-red-700 bg-red-50"
                          : "text-gray-800 hover:text-red-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.span
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative line at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      />
    </motion.nav>
  );
};

export default Navbar;