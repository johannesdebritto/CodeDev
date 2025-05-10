import React from "react";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    {
      label: "Instagram",
      url: "https://www.instagram.com/codedev_id/",
      icon: "/images/icon/logo_ig.svg",
    },
    {
      label: "Threads",
      url: "https://www.threads.com/@codedev_id",
      icon: "/images/icon/logo_threats.svg",
    },
  ];

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Section - Logo and Description */}
        <div className="col-span-1">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo/logo.svg" alt="CodeDev Logo" width={40} height={40} className="object-contain" />
            <h3 className="text-lg font-semibold">
              Code<span className="text-blue-600">Dev</span>
            </h3>
          </div>
          <p className="text-sm mt-2">Wujudkan Solusi Digital Terbaik Bersama CodeDev untuk Bisnis yang Lebih Modern, Efisien, dan Berkembang.</p>
          <p className="text-sm mt-4 text-gray-400">&copy; 2024 All Rights Reserved</p>
        </div>

        {/* Center Section - Social Media and Contact */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-4">Follow us</h4>
          <div className="flex space-x-4">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" className="relative w-6 h-6 hover:scale-110 transition-transform duration-300">
                <Image src={item.icon} alt={item.label} fill className="object-contain" />
              </a>
            ))}
          </div>

          <h4 className="font-semibold mt-4 mb-2">Call us</h4>
          <a
            href="https://wa.me/6285642667034?text=Hallo%20CodeDev%20Indonesia%2C%20Hari%20ini%20saya%20mau%20berkonsultasi%20untuk%20project%20saya%20%F0%9F%98%8A%F0%9F%9A%80"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl hover:scale-105 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 text-center transition-transform duration-300"
          >
            <Image src="/images/logo_wa.svg" alt="WhatsApp" width={20} height={20} className="object-contain" priority />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Right Section - Services */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-4">Layanan</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/LayananWebPage" className="hover:underline">
                Web Developers
              </a>
            </li>
            <li>
              <a href="/LayananAndroidPage" className="hover:underline">
                Android Developers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
