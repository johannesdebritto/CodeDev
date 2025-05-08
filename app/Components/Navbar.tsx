"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (): void => {
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${isMenuOpen ? "bg-white bg-opacity-30 backdrop-blur-md" : "bg-white"}`}
      style={{
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo/logo.svg" alt="CodeDev Logo" width={40} height={40} className="object-contain" priority />
          <span className="text-xl font-bold text-gray-800">
            Code<span className="text-blue-800">Dev</span>
          </span>
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-8 flex-grow justify-center">
          <ul className="flex space-x-6 text-gray-700 font-medium">
            {"Home Layanan Portfolio".split(" ").map((item, idx) => (
              <li key={idx} className="relative group">
                {/* Layanan with dropdown */}
                {item === "Layanan" ? (
                  <button onClick={toggleDropdown} className="hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-gray-700 transition-all duration-300 group-hover:scale-105 focus:outline-none">
                    Layanan
                  </button>
                ) : (
                  <Link
                    href={
                      item === "Home"
                        ? "/" // Direct to root for "Home"
                        : item === "Portfolio"
                        ? "/PortofolioPage"
                        : `#${item.toLowerCase()}`
                    }
                    scroll={item !== "Home"} // Prevent scroll for "Home" since it's a root navigation
                    className="hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-gray-700 transition-all duration-300 group-hover:scale-105"
                  >
                    {item}
                  </Link>
                )}

                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>

                {/* Dropdown Content */}
                {item === "Layanan" && isDropdownOpen && (
                  <ul className="absolute left-[50%] transform -translate-x-1/2 top-full mt-2 w-48 bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg rounded-lg z-10">
                    {[
                      { name: "Web Developer", path: "/LayananWebPage" },
                      { name: "Android Developer", path: "/LayananAndroidPage" },
                    ].map((service, idx) => (
                      <li key={idx}>
                        <Link href={service.path} onClick={closeDropdown} className="block px-6 py-2 text-white text-sm hover:bg-gray-700 transition-all duration-300">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            scroll={false}
            className="flex items-center space-x-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:scale-105 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300"
          >
            <Image src="/images/logo_wa.svg" alt="WhatsApp" width={20} height={20} className="object-contain" priority />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Chatbot and Suggestion Box */}
        <div className={`${styles.wrapper} hidden md:flex items-center space-x-4`}>
          <a href="#" className={`${styles.button} text-white`}>
            <div className={styles.icon} style={{ backgroundImage: "url(/images/icon/chatbot.svg)" }}></div>
            <span>Chatbot</span>
          </a>

          <Link href="/SaranSection" className={`${styles.button} text-white`}>
            <div className={styles.icon} style={{ backgroundImage: "url(/images/icon/saran.svg)" }}></div>
            <span>Kotak Saran</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-x2 z-40 flex flex-col items-center justify-start py-10 space-y-4 min-h-screen">
          <button onClick={closeMenu} className="absolute top-4 right-4 text-gray-800 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <ul className="flex flex-col items-center space-y-4 text-center text-gray-800 font-medium w-full px-4">
            {/* Home link */}
            <li className="w-full">
              <Link href="/" onClick={closeMenu} className="block text-white transition-all duration-300 text-2xl hover:scale-105">
                Home
              </Link>
            </li>

            {/* Layanan link with dropdown */}
            <li className="w-full">
              <button onClick={toggleDropdown} className="block w-full text-white transition-all duration-300 text-2xl hover:scale-105 text-center">
                Layanan
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <ul className="mt-2 w-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg rounded-lg space-y-2 px-4 py-2">
                  {[
                    { name: "Web Developer", route: "/LayananWebPage" },
                    { name: "Android Developer", route: "/LayananAndroidPage" },
                  ].map((service, idx) => (
                    <li key={idx}>
                      <Link
                        href={service.route}
                        onClick={() => {
                          closeMenu();
                          closeDropdown();
                        }}
                        className="block text-white hover:bg-gray-700 transition-all duration-300 px-4 py-2 rounded text-center"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Portfolio link */}
            <li className="w-full">
              <Link href="/PortofolioPage" onClick={closeMenu} className="block text-white transition-all duration-300 text-2xl hover:scale-105">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
