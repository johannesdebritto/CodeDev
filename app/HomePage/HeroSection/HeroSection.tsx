"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="bg-white py-16 pt-32 min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900">
            Jasa Pembuatan Website, <br />
            Aplikasi Mobile, dan <br />
            Desain UX/UI
          </h1>
          <hr className="my-4 border-t-4 border-black" />
          <p className="text-gray-700 text-xl lg:text-2xl mb-5">
            Wujudkan Solusi Digital Terbaik Bersama Code
            <span className="text-blue-800 font-semibold">Dev</span> untuk
            Bisnis yang Lebih Modern, Efisien, dan Berkembang.
          </p>

          <a href="#layanan" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-2xl group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-2xl bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Buat Project</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-2xl group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-2xl"
            ></span>
          </a>

          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start items-center space-x-6 mt-4">
            <button
              className="relative focus:outline-none transition-transform duration-300 hover:scale-125 group"
              aria-label="Instagram"
              onClick={() => window.open("https://www.instagram.com", "_blank")}
            >
              <div
                className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <Image
                src="/images/icon/logo_ig.svg" // Update with your image path
                alt="Instagram"
                width={40} // Adjust the width as needed
                height={40} // Adjust the height as needed
                className="relative z-10"
              />
            </button>
            <button
              className="relative focus:outline-none transition-transform duration-300 hover:scale-125 group"
              aria-label="TikTok"
              onClick={() => window.open("https://www.tiktok.com", "_blank")}
            >
              <div
                className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <Image
                src="/images/icon/logo_tiktok.svg" // Update with your image path
                alt="TikTok"
                width={40} // Adjust the width as needed
                height={40} // Adjust the height as needed
                className="relative z-10"
              />
            </button>
            <button
              className="relative focus:outline-none transition-transform duration-300 hover:scale-125 group"
              aria-label="Threads"
              onClick={() => window.open("https://www.threads.net", "_blank")}
            >
              <div
                className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <Image
                src="/images/icon/logo_threats.svg" // Update with your image path
                alt="Threads"
                width={40} // Adjust the width as needed
                height={40} // Adjust the height as needed
                className="relative z-10"
              />
            </button>
            <button
              className="relative focus:outline-none transition-transform duration-300 hover:scale-125 group"
              aria-label="X"
              onClick={() => window.open("https://www.threads.net", "_blank")}
            >
              <div
                className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <Image
                src="/images/icon/logo_x.svg" // Update with your image path
                alt="X"
                width={40} // Adjust the width as needed
                height={40} // Adjust the height as needed
                className="relative z-10"
              />
            </button>
          </div>
        </div>

        {/* Right Content (Mockup) */}
        <div className="lg:w-1/2 flex justify-center items-center relative z-0">
          <div className="relative">
            <Image
              src="/images/icon/hero.svg" // Update with your image path
              alt="Mockup 1"
              width={600} // Adjust the width as needed
              height={600} // Adjust the height as needed
              className="w-full h-full object-cover shadow-none rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
