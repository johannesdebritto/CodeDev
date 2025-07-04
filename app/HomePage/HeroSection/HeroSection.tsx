import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="bg-white pt-32 pb-16 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeIn">
        {/* Kolom Gambar - Mobile muncul duluan */}
        <div className="w-full flex justify-center order-1 md:order-2">
          <Image src="/images/heros.svg" alt="Hero Image" width={600} height={400} className="object-contain object-center" priority />
        </div>

        {/* Kolom Teks */}
        <article className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-gray-900">
            Jasa Pembuatan Website,
            <br />
            Aplikasi Mobile, dan <br />
            Desain UX/UI
          </h1>
          <hr className="my-4 border-t-4 border-black" />
          <p className="text-gray-700 text-xl lg:text-2xl font-medium italic">
            Wujudkan Solusi Digital Terbaik Bersama Code
            <span className="text-blue-800 font-semibold">Dev</span> untuk Bisnis yang Lebih Modern, Efisien, dan Berkembang.
          </p>

          <div className="mt-6">
            <Link href="/ProjectSection" passHref>
              <a className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-2xl group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-2xl bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Buat Project</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-2xl group-hover:mb-0 group-hover:mr-0" />
              </a>
            </Link>
          </div>

          {/* Ikon Sosial Media */}
          <div className="flex justify-center lg:justify-start items-center space-x-6 mt-4">
            {[
              {
                label: "Instagram",
                url: "https://www.instagram.com/codedev_id/",
                icon: "logo_ig.svg",
              },
              {
                label: "Threads",
                url: "https://www.threads.com/@codedev_id",
                icon: "logo_threats.svg",
              },
            ].map((item) => (
              <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="relative focus:outline-none transition-transform duration-300 hover:scale-125 group">
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-12 h-6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image src={`/images/icon/${item.icon}`} alt={item.label} width={40} height={40} className="relative z-10" />
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
