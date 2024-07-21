"use client";

import { ICONS } from "@/constants";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-[102px]">
      <div className="container mx-auto flex justify-between">
        <div className="w-full md:w-[457px] pt-[52px]">
          <h1 className="text-white text-[34px] sm:text-[44px] lg:text-[64px] font-bold leading-[125.5%]">
            Discover Most Suitable Watches
          </h1>
          <p className="w-full md:w-[456px] text-[#8B8E99] font-medium leading-[125.5%] text-[16px] mb-[47px]">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full md:w-[443px] h-[60px] flex items-center relative rounded-[15px]"
          >
            <label htmlFor="search" className="w-full h-full">
              <div className="absolute text-[#3858D6] left-[19px] top-[19px] cursor-text">
                {ICONS.search}
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="w-full h-full bg-[#F5F5F5] rounded-[15px] outline-none font-medium pl-[56px] md:pr-[130px] pr-2 text-[16px] leading-[125.5%] placeholder::text-[#8b8e99b3] text-black"
                placeholder="Find the best brands"
              />
              <button
                type="submit"
                className="w-full h-[43px] bg-[#3858D6] border-[#3858D6] border-[2px] rounded-[15px] text-white font-medium transition-all duration-300 ease-in-out hover:bg-transparent hover:text-[#3858D6] focus:ring-2 ring-offset-1 ring-[#3858d6d3] outline-none md:absolute md:mt-0 mt-4 md:w-[112px] right-[9px] top-[9px]"
              >
                Search
              </button>
            </label>
          </form>
        </div>
        <div className="lg:block hidden">
          <Image
            src="/watch-large.png"
            alt="Hero image"
            className="w-[465] h-[563px]"
            width={465}
            height={563}
            priority
            blurDataURL="/watch-large.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
