"use client"; // Penting untuk Client Component
import Image from 'next/image';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const FloatingButtons: React.FC = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // State untuk kontrol tombol

  const handleNavigate = (path: string) => {
    router.push(path); // Navigasi ke halaman tujuan
  };

  const toggleButtons = () => {
    setIsOpen(!isOpen); // Toggle state
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-4 sm:hidden z-50"> {/* Tambahkan z-50 */}
      {/* Tombol Utama */}
      <button
        onClick={toggleButtons}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 text-white"
      >
        <Image
        src={isOpen ? "/images/icon/exit.svg" : "/images/icon/floatingbutton.svg"}
        alt={isOpen ? "Close Icon" : "Menu Icon"}
        width={32}
        height={32} // 8 Tailwind units (w-8, h-8)
        className="w-8 h-8"
      />
      </button>

      {/* Tombol WhatsApp */}
      {isOpen && (
        <button
          onClick={() => handleNavigate("/whatsapp")}
          className="flex items-center space-x-3 px-4 py-3 w-48 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 shadow-lg text-white"
        >
          <Image
        src="/images/icon/logo_wawhite.svg"
        alt="WhatsApp Icon"
        width={24}
        height={24} // 6 Tailwind units (w-6, h-6)
        className="w-6 h-6"
      />
          <span>WhatsApp</span>
        </button>
      )}

      {/* Tombol Chatbot */}
      {isOpen && (
        <button
          onClick={() => handleNavigate("/chatbot")}
          className="flex items-center space-x-3 px-4 py-3 w-48 rounded-lg bg-gradient-to-br from-green-500 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-900 shadow-lg text-white"
        >
           <Image
        src="/images/icon/chatbot.svg"
        alt="Chat Icon"
        width={24}
        height={24} // 6 Tailwind units (w-6, h-6)
        className="w-6 h-6"
      />
          <span>Chatbot</span>
        </button>
      )}

      {/* Tombol Kotak Saran */}
      {isOpen && (
        <button
          onClick={() => handleNavigate("/SaranSection")}
          className="flex items-center space-x-3 px-4 py-3 w-48 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 shadow-lg text-white"
        >
          <Image
        src="/images/icon/saran.svg"
        alt="Suggestion Icon"
        width={24}
        height={24} // 6 Tailwind units (w-6, h-6)
        className="w-6 h-6"
      />
          <span>Kotak Saran</span>
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
