import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ConsultationModal from "./ConsultationModal"; // Assuming this path is correct

// --- Helper Modal Component (Recreated based on your request) ---
// This is required here since the modal logic is NOT global.

const ContactModalWrapper = ({ onClose }) => {
    // This state manages the visibility of the modal within this component
    const [isVisible, setIsVisible] = useState(true);

    const navigate = useNavigate();

    // Function to close the modal and navigate away
    const handleCloseAndNavigate = () => {
        setIsVisible(false);
        // After closing the modal, navigate back to the home page or a neutral page.
        // Using window.history.back() or navigate("/", {replace: true}) is common.
        // We'll navigate home to clean the URL.
        navigate("/", { replace: true }); 

        // Also call the original onClose handler if needed (from parent)
        if (onClose) onClose(); 
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleCloseAndNavigate}
                >
                    {/* The modal structure itself, using ConsultationModal */}
                    <ConsultationModal isVisible={isVisible} onClose={handleCloseAndNavigate} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};


// --- Contact Component ---

const Contact = () => {
    // We use useState here, but the main goal is to render the modal wrapper immediately.
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();

    // This useEffect ensures the component scrolls to the top (standard practice)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function that runs when the modal is closed to redirect home
    const handleModalClose = () => {
        setShowModal(false);
        navigate("/", { replace: true });
    };

    // The component renders NOTHING but the modal, fulfilling the requirement.
    return (
        // The minimal rendering structure to house the modal logic
        <div className="min-h-screen relative">
            {/* The contact page itself is replaced by the modal functionality */}
            <div 
                className="min-h-screen flex items-center justify-center text-center"
                style={{ backgroundColor: "white" }} // Use a neutral background while modal is up
            >
                {/* This is the content that would show behind the modal if it didn't fill the screen */}
                <h1 className="text-gray-800">Loading Contact...</h1>
            </div>

            {/* Modal should be rendered here */}
            {showModal && (
                <ConsultationModal isVisible={showModal} onClose={handleModalClose} />
            )}
        </div>
    );
};

export default Contact;