"use client"; // Add this directive at the top if using Next.js

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full py-8 flex flex-col items-center md:items-center">
      <h2 className="text-2xl font-bold text-[#003C3C] px-4 py-2 rounded mb-2 ml-40 md:ml-0 md:text-center">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p className="text-base ml-48 md:ml-0 max-w-3xl md:max-w-4xl md:text-center mb-8 px-4">
        Quick answers to questions you may have. Can't find what you're looking
        for? <br />
        <br />
        Check out our full documentation.
      </p>
      {/* Small Bars */}
      {[
        "How much does it cost to set up a store?",
        "What kind of digital products can I sell?",
        "Do I need technical skills to use the platform?",
        "Is there a limit to the number of products I can list?",
        "How do I receive payments for my sales?",
        "Can I sell internationally on this marketplace?",
        "What support and resources are available for sellers?",
        "Is there a review process for uploaded products?",
      ].map((text, index) => (
        <div
          key={index}
          className="bg-[#E5F0F1] w-[500px] ml-36 md:ml-0 md:w-[730px] h-[48px] md:px-6 flex items-center mb-5 rounded relative"
        >
          <span className="ml-20 md:ml-0">{text}</span>
          <button className="absolute right-4">
            <Image
              src="/images/Icon.svg" // Updated path to the image in the public/images directory
              alt="icon"
              width={24} // Adjust size as needed
              height={24} // Adjust size as needed
            />
          </button>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
