import React from "react";

const InfoWeb = () => {
  return (
    <div className="text-center p-6 bg-white text-black">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">Kode Pemrograman Yang Kami Gunakan</h2>
      <div className="flex justify-center gap-6 mb-8 py-5">
        <img src="images/icon/logo_next.svg" alt="Next.js" className="w-20 h-20" />
        <img src="images/icon/logo_laravel.svg" alt="Laravel" className="w-20 h-20" />
        <img src="/images/icon/logo_tailwind.svg" alt="Tailwind CSS" className="w-20 h-20" />
      </div>

      {/* Subheading */}
      <h3 className="text-xl font-bold mb-2">Tingkatkan Bisnis Anda dengan Jasa Pembuatan Website</h3>
      <p className="text-lg font-bold mb-6">Beragam Kategori</p>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {/* Custom Website */}
        <div className="flex flex-col items-center">
          <img
            src="images/iconweb/customweb.svg"
            alt="Custom Website"
            className="w-[130px] h-[130px] mb-2"
          />
          <p className="text-sm font-medium">Custom Website</p>
        </div>

        {/* Company Profile */}
        <div className="flex flex-col items-center">
          <img
            src="images/iconweb/companyprofile.svg"
            alt="Company Profile"
            className="w-[130px] h-[130px] mb-2"
          />
          <p className="text-sm font-medium">Company Profile</p>
        </div>

        {/* E-Commerce */}
        <div className="flex flex-col items-center">
          <img
            src="images/iconweb/ecommerce.svg"
            alt="E-Commerce"
            className="w-[130px] h-[130px] mb-2"
          />
          <p className="text-sm font-medium">E-Commerce</p>
        </div>

        {/* Portfolio Web */}
        <div className="flex flex-col items-center">
          <img
            src="images/iconweb/webportofolio.svg"
            alt="Portofolio Web"
            className="w-[130px] h-[130px] mb-2"
          />
          <p className="text-sm font-medium">Portofolio Web</p>
        </div>

        {/* Landing Page */}
        <div className="flex flex-col items-center">
          <img
            src="images/iconweb/landingpage.svg"
            alt="Landing Page"
            className="w-[130px] h-[130px] mb-2"
          />
          <p className="text-sm font-medium">Landing Page</p>
        </div>

        {/* Government Website */}
        <div className="flex flex-col items-center">
          <img
            src="images/iconweb/webpemerintah.svg"
            alt="Website Pemerintahan"
            className="w-[130px] h-[130px] mb-2"
          />
          <p className="text-sm font-medium">Website Pemerintahan</p>
        </div>
      </div>
    </div>
  );
};

export default InfoWeb;
