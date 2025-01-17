import React from 'react'
import Image from 'next/image'

const InfoUX = () => {
  return (
    <div className="text-center p-6 bg-white text-black">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">Kami Menggunakan</h2>
      <div className="flex justify-center gap-6 mb-8 py-5">
        <Image
          src="/images/icon/logo_figma.svg" // Ganti dengan path gambar Anda
          alt="Flutter"
          width={80} // Set width for image
          height={80} // Set height for image
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
            width={130} // Set width for image
            height={130} // Set height for image
            className="mb-2"
          />
          <p className="text-sm font-medium">Desain Custom Website</p>
        </div>

        {/* Company Profile */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconapp/kesehatan.svg"
            alt="Company Profile"
            width={130} // Set width for image
            height={130} // Set height for image
            className="mb-2"
          />
          <p className="text-sm font-medium">Desain Aplikasi Kesehatan</p>
        </div>

        {/* E-Commerce */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconapp/commerce.svg"
            alt="E-Commerce"
            width={130} // Set width for image
            height={130} // Set height for image
            className="mb-2"
          />
          <p className="text-sm font-medium">Desain Aplikasi E-Commerce</p>
        </div>

        {/* Portfolio Web */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconapp/edukasi.svg"
            alt="Portofolio Web"
            width={130} // Set width for image
            height={130} // Set height for image
            className="mb-2"
          />
          <p className="text-sm font-medium">Desain Aplikasi Edukasi</p>
        </div>

        {/* Landing Page */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconapp/travel.svg"
            alt="Landing Page"
            width={130} // Set width for image
            height={130} // Set height for image
            className="mb-2"
          />
          <p className="text-sm font-medium">Desain Apikasi Travel</p>
        </div>

        {/* Government Website */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/iconapp/produktiv.svg"
            alt="Website Pemerintahan"
            width={130} // Set width for image
            height={130} // Set height for image
            className="mb-2"
          />
          <p className="text-sm font-medium">Desain Aplikasi Produktif</p>
        </div>
      </div>
    </div>
  )
}

export default InfoUX
