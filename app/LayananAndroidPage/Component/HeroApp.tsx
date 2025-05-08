import React from "react";
import Image from "next/image";

const HeroApp = () => {
  return (
    <section aria-label="Tentang Pengembangan Aplikasi Android" className="bg-white py-20 px-5 sm:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Gambar Utama */}
        <div className="sm:col-span-5 flex justify-center">
          <Image src="/images/iconapp/heroapp.svg" alt="Ilustrasi Pengembangan Aplikasi Android" width={500} height={500} className="w-full max-w-xs" priority />
        </div>

        {/* Konten Utama */}
        <article className="sm:col-span-7 space-y-4 animate-fadeIn" aria-labelledby="hero-heading">
          <header>
            <h1 id="hero-heading" className="text-2xl font-semibold text-black">
              Pengembangan Aplikasi Android Modern dengan Fokus pada Pengalaman Pengguna dan Harga Terjangkau
            </h1>
          </header>
          <p className="text-gray-700 leading-relaxed text-justify text-xl">Bangun Aplikasi Android Profesional untuk Bisnis Anda dengan Desain Modern, Fungsional, dan Pengalaman Pengguna Responsif, Semua dengan Harga Terjangkau!</p>

          {/* Fitur-fitur */}
          <div className="mt-10 grid grid-cols-2 gap-6 text-gray-800" aria-label="Fitur Aplikasi">
            <div className="flex items-center space-x-3">
              <Image src="/images/iconapp/cerdas.svg" alt="Aplikasi Cerdas" width={56} height={56} className="w-[3.50rem] h-[3.50rem]" priority />
              <span className="text-lg font-bold">Aplikasi Cerdas</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/images/iconapp/modern.svg" alt="Desain Modern" width={56} height={56} className="w-[3.50rem] h-[3.50rem]" priority />
              <span className="text-lg font-bold">Desain Modern</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/images/iconapp/solusi.svg" alt="Solusi Praktis" width={56} height={56} className="w-[3.50rem] h-[3.50rem]" priority />
              <span className="text-lg font-bold">Solusi Praktis</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/images/iconweb/terjangkau.svg" alt="Harga Terjangkau" width={56} height={56} className="w-[3.50rem] h-[3.50rem]" priority />
              <span className="text-lg font-bold">Terjangkau</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeroApp;
