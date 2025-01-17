import React from "react";
import Image from "next/image";

const InfoWeb = () => {
  return (
    <div className="text-center p-6 bg-white text-black">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">Kode Pemrograman Yang Kami Gunakan</h2>
      <div className="flex justify-center gap-6 mb-8 py-5">
        <Image
          src="/images/icon/logo_next.svg"
          alt="Next.js"
          width={80}
          height={80}
        />
        <Image
          src="/images/icon/logo_laravel.svg"
          alt="Laravel"
          width={80}
          height={80}
        />
        <Image
          src="/images/icon/logo_tailwind.svg"
          alt="Tailwind CSS"
          width={80}
          height={80}
        />
      </div>

      {/* Subheading */}
      <h3 className="text-xl font-bold mb-2">Tingkatkan Bisnis Anda dengan Jasa Pembuatan Website</h3>
      <p className="text-lg font-bold mb-6">Beragam Kategori</p>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {/* Custom Website */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconweb/customweb.svg"
            alt="Custom Website"
            width={130}
            height={130}
            className="mb-2"
          />
          <p className="text-sm font-medium">Custom Website</p>
        </div>

        {/* Company Profile */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconweb/companyprofile.svg"
            alt="Company Profile"
            width={130}
            height={130}
            className="mb-2"
          />
          <p className="text-sm font-medium">Company Profile</p>
        </div>

        {/* E-Commerce */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconweb/ecommerce.svg"
            alt="E-Commerce"
            width={130}
            height={130}
            className="mb-2"
          />
          <p className="text-sm font-medium">E-Commerce</p>
        </div>

        {/* Portfolio Web */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconweb/webportofolio.svg"
            alt="Portofolio Web"
            width={130}
            height={130}
            className="mb-2"
          />
          <p className="text-sm font-medium">Portofolio Web</p>
        </div>

        {/* Landing Page */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconweb/landingpage.svg"
            alt="Landing Page"
            width={130}
            height={130}
            className="mb-2"
          />
          <p className="text-sm font-medium">Landing Page</p>
        </div>

        {/* Government Website */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconweb/webpemerintah.svg"
            alt="Website Pemerintahan"
            width={130}
            height={130}
            className="mb-2"
          />
          <p className="text-sm font-medium">Website Pemerintahan</p>
        </div>
      </div>
    </div>
  );
};

export default InfoWeb;
