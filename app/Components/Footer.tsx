import React from "react";
import Image from "next/image";
const Footer = () => {
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
          <div className="flex space-x-2">
            <div className="relative w-6 h-6">
              <Image src="/images/icon/logo_twitterwhite.svg" alt="Twitter" width={40} height={40} className="object-contain transition-transform duration-300 transform hover:scale-110" />
            </div>
            <div className="relative w-6 h-6">
              <Image src="/images/icon/logo_tiktokwhite.svg" alt="TikTok" width={40} height={40} className="object-contain transition-transform duration-300 transform hover:scale-110" />
            </div>
            <div className="relative w-6 h-6">
              <Image src="/images/icon/logo_igwhite.svg" alt="Instagram" width={40} height={40} className="object-contain transition-transform duration-300 transform hover:scale-110" />
            </div>
          </div>
          <h4 className="font-semibold mt-2 mb-2">Call us</h4>
          <div className="flex items-center space-x-2">
            <div className="relative w-6 h-6">
              <Image src="/images/icon/logo_wawhite.svg" alt="WhatsApp" width={40} height={40} className="object-contain" />
            </div>
            <p className="text-sm">+1 600 654 36-60</p>
          </div>
        </div>

        {/* Right Section - Use Cases */}
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
