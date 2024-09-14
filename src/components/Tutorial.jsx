import React from "react";
import Image from "next/image";

const Tutorial = () => {
  return (
    <div className="tutorial-gallery-wrapper overflow-hidden w-full">
      {/* Mobile Layout */}
      <div className="md:hidden px-2.5 py-6">
        <div className="flex flex-row items-start">
          <div className="w-1/4 mr-3">
            <Image
              src="/images/line.svg"
              width={50}
              height={100}
              alt="Line Image"
              className="object-contain ml-[26rem]"
            />
          </div>
          <div className="w-1/4 flex flex-col space-y-60 ml-80">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="w-full">
                <Image
                  src={`/images/image${num}.svg`}
                  width={220}
                  height={280}
                  alt={`Image ${num}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-row items-start px-6 relative py-[-10rem] ml-[-5rem] lg:ml-[18rem]">
        <div className="w-[150px] mr-[-5rem] mt-[5rem] absolute">
          <Image
            src="/images/line.svg"
            width={100}
            height={180}
            alt="New Image"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col space-y-72 ml-[8rem]">
          {/* Increased from space-y-36 to space-y-72 */}
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="w-[450px]">
              <Image
                src={`/images/image${num}.svg`}
                width={450}
                height={550}
                alt={`Image ${num}`}
                className="w-full h-auto mt-[6rem]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
