import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="beranda" className="scroll-mt-20 min-h-screen flex items-start bg-white px-8 py-10 relative overflow-hidden" aria-label="Halaman utama Maggot BSF Colomadu">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto w-full gap-8 relative">
        {/* Kolom Gambar - muncul duluan di mobile */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden order-1 md:order-2">
          <Image src="/images/cover.svg" alt="Ilustrasi Maggot BSF Colomadu" fill className="object-contain object-center md:object-right translate-x-0 md:translate-x-2 lg:translate-x-4 animate-fadeIn delay-100" priority />
        </div>

        {/* Kolom Teks */}
        <div className="flex flex-col justify-center z-10 relative order-2 md:order-1">
          {/* Dekorasi - hanya muncul di md ke atas */}
          <div aria-hidden="true">
            <Image src="/images/eco1.svg" alt="" width={112} height={112} className="absolute top-2 left-0 opacity-50 animate-fadeIn hidden md:block" />
            <Image src="/images/eco2.svg" alt="" width={96} height={96} className="absolute top-[3.75rem] right-4 opacity-60 animate-fadeIn delay-100 hidden md:block" />
            <Image src="/images/eco5.svg" alt="" width={72} height={72} className="absolute bottom-5 left-6 opacity-40 animate-fadeIn delay-700 hidden md:block" />
            <Image src="/images/eco4.svg" alt="" width={88} height={88} className="absolute bottom-20 right-4 opacity-60 animate-fadeIn delay-[800ms] hidden md:block" />
          </div>

          {/* Judul dan deskripsi */}
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-2 relative z-10 ">Selamat Datang di Maggot BSF Colomadu</h1>

          <p className="text-base md:text-lg text-black mb-4 font-semibold italic relative z-10">&ldquo;Ubah Sampah sebagai cuan – solusi ramah lingkungan untuk pakan ternak dan pengelolaan limbah organik.&rdquo;</p>

          {/* Tombol WhatsApp */}
          <a
            href="https://wa.me/6283170416820" // ← ganti dengan nomor WA beneran kamu
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-700 text-white font-bold rounded-2xl transform hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,128,0,0.4)] transition duration-300 ease-in-out text-base w-fit relative z-10"
          >
            <Image src="/images/wa.svg" alt="WhatsApp" width={20} height={20} />
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
