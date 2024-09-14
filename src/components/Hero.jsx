import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center w-full mt-[52px] bg-[#f4f4f9] font-sans overflow-hidden">
      {/* Mobile Layout */}
      <div className="md:hidden w-full ml-36">
        <video
          src="/images/Video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex w-full md:ml-[-1px]">
        <video
          src="/images/Video.mp4"
          autoPlay
          loop
          muted
          className="w-full h-auto object-cover md:max-w-[1400px] md:h-auto"
        />
        {/* Optional desktop text overlay */}
      </div>
    </div>
  );
};

export default Hero;
