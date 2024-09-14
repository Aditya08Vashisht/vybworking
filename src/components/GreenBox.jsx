"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const GreenBox = () => {
  return (
    <div className="relative w-full md:w-auto">
      {/* Mobile Layout */}
      <div className="md:hidden absolute left-52 w-[220px] h-auto bg-[#003C3C] rounded-[15px] flex flex-col items-start mt-8 mb-8 px-4 py-6">
        <main className="w-full">
          <h1 className="text-white mb-4 text-lg font-bold">
            Start Vybing with us!
          </h1>
          <h2 className="text-white mt-4 text-xs">
            "We help influencers make money by monetizing their travel plans,
            merchandise, and digital goods and many more."
          </h2>
        </main>
        <div className="mt-2 w-full">
          <Link href="/signup" className="inline-block">
            <Image
              src="/images/Join.svg"
              width={70}
              height={20}
              alt="Join Us"
              className="object-contain w-full max-w-[70px]"
            />
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex static w-full md:max-w-[400px] h-auto bg-[#003C3C] rounded-[15px] flex-col items-start ml-16 mt-16 mb-10 px-6 py-8">
        <main className="w-full">
          <h1 className="text-white mb-4 text-2xl font-bold">
            Start Vybing with us!
          </h1>
          <h2 className="text-white mt-4 text-base">
            "We help influencers make money by monetizing their travel plans,
            merchandise, and digital goods and many more."
          </h2>
        </main>
        <div className="mt-2 w-full">
          <Link href="/signup" className="inline-block">
            <Image
              src="/images/Join.svg"
              width={120}
              height={30}
              alt="Join Us"
              className="object-contain w-full max-w-[100px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GreenBox;
