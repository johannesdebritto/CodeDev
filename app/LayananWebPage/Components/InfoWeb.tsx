import React from "react";
import Image from "next/image";

const InfoWeb = () => {
  return (
    <section className="text-center p-6 bg-white text-black" aria-labelledby="tech-stack-title">
      {/* Header */}
      <h2 id="tech-stack-title" className="text-2xl font-bold mb-4">
        Kode Pemrograman yang Kami Gunakan
      </h2>

      <div className="flex justify-center gap-6 mb-8 py-5">
        <Image src="/images/icon/logo_next.svg" alt="Logo Next.js - Framework React" width={80} height={80} priority />
        <Image src="/images/icon/logo_laravel.svg" alt="Logo Laravel - Framework PHP" width={80} height={80} priority />
        <Image src="/images/icon/logo_tailwind.svg" alt="Logo Tailwind CSS - Utility First CSS" width={80} height={80} priority />
      </div>

      {/* Subheading */}
      <h3 className="text-xl font-bold mb-2">Tingkatkan Bisnis Anda dengan Jasa Pembuatan Website</h3>
      <p className="text-lg font-bold mb-6">Beragam Kategori</p>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6" aria-label="Kategori Website">
        {[
          { src: "/images/iconweb/customweb.svg", alt: "Ilustrasi Custom Website", label: "Custom Website" },
          { src: "/images/iconweb/companyprofile.svg", alt: "Ilustrasi Company Profile", label: "Company Profile" },
          { src: "/images/iconweb/ecommerce.svg", alt: "Ilustrasi E-Commerce", label: "E-Commerce" },
          { src: "/images/iconweb/webportofolio.svg", alt: "Ilustrasi Portofolio Web", label: "Portofolio Web" },
          { src: "/images/iconweb/landingpage.svg", alt: "Ilustrasi Landing Page", label: "Landing Page" },
          { src: "/images/iconweb/webpemerintah.svg", alt: "Ilustrasi Website Pemerintahan", label: "Website Pemerintahan" },
        ].map((item) => (
          <article key={item.label} className="flex flex-col items-center" aria-label={item.label}>
            <Image src={item.src} alt={item.alt} width={130} height={130} className="mb-2" priority />
            <p className="text-sm font-medium">{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InfoWeb;
