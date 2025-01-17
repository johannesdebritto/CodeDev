import React from "react";
import Image from "next/image";

const HeroApp = () => {
  return (
    <section className="bg-white py-20 px-5 sm:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Gambar */}
        <div className="sm:col-span-5 flex justify-center">
          <Image
            src="/images/iconapp/heroapp.svg" // Path to the image in the public folder
            alt="Tentang Kami"
            width={500} // Adjust width for smaller screens
            height={500} // Adjust height proportionally
            className="w-full max-w-xs"
          />
        </div>

        {/* Konten Teks */}
        <div className="sm:col-span-7 space-y-4">
          <h3 className="text-2xl font-semibold text-black">
            Pengembangan Aplikasi Android Modern dengan Fokus pada Pengalaman Pengguna dan Harga Terjangkau
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify text-xl">
            Bangun Aplikasi Android Profesional untuk Bisnis Anda dengan Desain Modern, Fungsional, dan Pengalaman Pengguna Responsif, Semua dengan Harga Terjangkau!
          </p>
          {/* Iconn */}
          <div className="mt-10 grid grid-cols-2 gap-6 text-gray-800">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/iconapp/cerdas.svg"
                alt="Proses Cepat"
                width={56} // Adjust width
                height={56} // Adjust height
                className="w-[3.50rem] h-[3.50rem]"
              />
              <span className="text-lg font-bold">Aplikasi Cerdas</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/images/iconapp/modern.svg"
                alt="Hasil Maksimal"
                width={56} // Adjust width
                height={56} // Adjust height
                className="w-[3.50rem] h-[3.50rem]"
              />
              <span className="text-lg font-bold">Desain Modern</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/images/iconapp/solusi.svg"
                alt="Akses Mudah"
                width={56} // Adjust width
                height={56} // Adjust height
                className="w-[3.50rem] h-[3.50rem]"
              />
              <span className="text-lg font-bold">Solusi Praktis</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/images/iconweb/terjangkau.svg"
                alt="Terjangkau"
                width={56} // Adjust width
                height={56} // Adjust height
                className="w-[3.50rem] h-[3.50rem]"
              />
              <span className="text-lg font-bold">Terjangkau</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroApp;
