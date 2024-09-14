"use client";

import React from "react";
import Image from "next/image";

const BlueBar = () => {
  const handleItineraryClick = () => {};
  const handleButtonClick = () => {};
  const handlePricingClick = () => {};
  const handleMoreClick = () => {};

  return (
    <div className="flex justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-16 ml-48 sm:ml-0">
      <div className="bg-[#E5F0F1] w-full max-w-7xl p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg">
        {/* Products Title and Button Images */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl ml-48 md:ml-0 md:text-4xl lg:text-5xl font-bold font-urbanist mb-4 sm:mb-0 sm:px-20 md:px-20">
            Products
          </h1>
          <div className="flex space-x-2 sm:space-x-4">
            <button onClick={handleItineraryClick}>
              <Image
                src="/images/Itinerary.svg"
                width={100}
                height={120}
                alt="Itinerary"
                className="object-contain w-20 sm:w-24 md:w-28 lg:w-32"
              />
            </button>
            <button onClick={handleButtonClick}>
              <Image
                src="/images/button.svg"
                width={100}
                height={120}
                alt="Button"
                className="object-contain w-20 sm:w-24 md:w-28 lg:w-32"
              />
            </button>
          </div>
        </div>

        {/* Delhi Itinerary Text */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-urbanist mb-2 sm:mb-4">
            Delhi Itinerary
          </h2>
          <p className="font-urbanist text-sm sm:text-base md:text-lg">
            Delhi, India's capital territory, is a massive metropolitan area in
            the country's north. In Old Delhi, a neighborhood dating to the
            1600s, stands the imposing Mughal-era Red Fort, a symbol of India,
            and the sprawling Jama Masjid mosque, whose courtyard accommodates
            25,000 people.
          </p>
        </div>

        {/* India Gate Image */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10">
          <Image
            src="/images/Indiagate.svg"
            width={240}
            height={140}
            alt="India Gate"
            className="object-contain max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          />
        </div>

        {/* Pricing and More Images */}
        <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6 md:space-x-8">
          <button onClick={handlePricingClick}>
            <Image
              src="/images/pricing.svg"
              width={95}
              height={52}
              alt="Pricing"
              className="object-contain w-20 sm:w-24 md:w-28 lg:w-32"
            />
          </button>
          <button onClick={handleMoreClick}>
            <Image
              src="/images/More.svg"
              width={85}
              height={45}
              alt="More"
              className="object-contain w-18 sm:w-22 md:w-26 lg:w-30"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlueBar;
