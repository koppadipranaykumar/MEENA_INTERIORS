import React from "react";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-center"
      style={{ backgroundColor: "#c4bdbdff" }} // ← Replace this with any color you prefer
    >
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700">
          Reach us at: contact@meenainteriors.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
