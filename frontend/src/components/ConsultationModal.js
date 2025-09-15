import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assuming you have these image files in a folder like 'src/assets'
// You will need to import them like this:
import phoneIcon from '../assets/phone.PNG';
import whatsappIcon from '../assets/whatsapp.PNG';
import emailIcon from '../assets/gmail.PNG';

// For this example, I'll use placeholders for the import paths.
// You need to replace these with the correct paths to your images.


const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 200, damping: 20 } 
  },
  exit: { opacity: 0, scale: 0.8, y: -50 }
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

// Placeholder contact information for the proprietor
const proprietorInfo = {
  name: "Mr. KOPPADI SURI BABU",
  phone: "+91 9849915677", 
  whatsapp: "+91 9849915677", 
  email: "koppadisuribabu@gmail.com"
};

const ConsultationModal = ({ isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-sm w-full mx-auto shadow-2xl relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Your Free Consultation</h3>
              <p className="text-gray-600 mb-6">Contact our proprietor directly to discuss your project.</p>
              
              <div className="space-y-4">
                {/* Phone Link */}
                <a
                  href={`tel:${proprietorInfo.phone}`}
                  className="flex items-center justify-center p-4 bg-gray-100 rounded-xl hover:bg-red-50 transition-colors"
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-3">
                    <img src={phoneIcon} alt="Phone Icon" className="h-8 w-8" />
                    <span className="text-gray-800 font-semibold">{proprietorInfo.phone}</span>
                  </motion.div>
                </a>
                
                {/* WhatsApp Link */}
                <a
                  href={`https://wa.me/${proprietorInfo.whatsapp.replace(/\s+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-100 rounded-xl hover:bg-green-50 transition-colors"
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-3">
                    <img src={whatsappIcon} alt="WhatsApp Icon" className="h-8 w-8" />
                    <span className="text-gray-800 font-semibold">{proprietorInfo.whatsapp}</span>
                  </motion.div>
                </a>

                {/* Gmail Link */}
                <a
                  href={`mailto:${proprietorInfo.email}`}
                  className="flex items-center justify-center p-4 bg-gray-100 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-3">
                    <img src={emailIcon} alt="Email Icon" className="h-8 w-8" />
                    <span className="text-gray-800 font-semibold">{proprietorInfo.email}</span>
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;