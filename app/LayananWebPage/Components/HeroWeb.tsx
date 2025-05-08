import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white py-20 px-5 sm:px-16" aria-labelledby="hero-heading">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Gambar */}
        <div className="sm:col-span-5 flex justify-center">
          <Image src="/images/iconweb/heroweb.svg" alt="Ilustrasi pembuatan website profesional" width={500} height={500} priority className="w-full max-w-xs" />
        </div>

        {/* Konten Teks */}
        <article className="sm:col-span-7 space-y-4 animate-fadeIn" aria-label="Deskripsi Layanan Website">
          <header>
            <h1 id="hero-heading" className="text-2xl font-semibold text-black">
              Jasa Pembuatan Website Responsif, Modern dan Terjangkau
            </h1>
          </header>
          <p className="text-gray-700 leading-relaxed text-justify text-xl">Wujudkan Website Impian untuk Mendukung Bisnis Anda dengan Desain Responsif, Modern, dan Harga Terjangkau!</p>

          {/* Icon */}
          <div className="mt-10 grid grid-cols-2 gap-6 text-gray-800">
            <div className="flex items-center space-x-3">
              <Image src="/images/iconweb/prosescepat.svg" alt="Ikon Proses Cepat" width={56} height={56} priority />
              <span className="text-lg font-bold">Proses Cepat</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/images/iconweb/hasilmaksimal.svg" alt="Ikon Hasil Maksimal" width={56} height={56} priority />
              <span className="text-lg font-bold">Hasil Maksimal</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/images/iconweb/mudahdigunakan.svg" alt="Ikon Akses Mudah" width={56} height={56} priority />
              <span className="text-lg font-bold">Akses Mudah</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image src="/images/iconweb/terjangkau.svg" alt="Ikon Harga Terjangkau" width={56} height={56} priority />
              <span className="text-lg font-bold">Terjangkau</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
