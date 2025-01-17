import React from 'react'
import Image from 'next/image'

const InfoApp = () => {
  return (
    <div className="text-center p-6 bg-white text-black">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">Kode Pemrograman Yang Kami Gunakan</h2>
      <div className="flex justify-center gap-6 mb-8 py-5">
        <Image
          src="/images/icon/logo_flutter.svg" // Path to the image in the public folder
          alt="Flutter"
          width={80} // Adjust width
          height={80} // Adjust height
        />
        <Image
          src="/images/icon/logo_firebase.svg" // Path to the image in the public folder
          alt="Firebase"
          width={80} // Adjust width
          height={80} // Adjust height
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
            src="/images/iconapp/custom.svg"
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
            src="/images/iconapp/kesehatan.svg"
            alt="Company Profile"
            width={130}
            height={130}
            className="mb-2"
          />
          <p className="text-sm font-medium">Aplikasi Kesehatan</p>
        </div>

        {/* E-Commerce */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconapp/commerce.svg"
            alt="E-Commerce"
            width={130}
            height={130}
            className="mb-2"
          />
          <p className="text-sm font-medium">Aplikasi E-Commerce</p>
        </div>

        {/* Portfolio Web */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconapp/edukasi.svg"
            alt="Portofolio Web"
            width={130}
            height={130}
            className="mb-2"
          />
          <p className="text-sm font-medium">Aplikasi Edukasi</p>
        </div>

        {/* Landing Page */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconapp/travel.svg"
            alt="Landing Page"
            width={130}
            height={130}
            className="mb-2"
          />
          <p className="text-sm font-medium">Apikasi Travel</p>
        </div>

        {/* Government Website */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconapp/produktiv.svg"
            alt="Website Pemerintahan"
            width={130}
            height={130}
            className="mb-2"
          />
          <p className="text-sm font-medium">Aplikasi Produktif</p>
        </div>
      </div>
    </div>
  );
}

export default InfoApp;
