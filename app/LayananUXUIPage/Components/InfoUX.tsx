import React from 'react'

const InfoUX = () => {
    return (
        <div className="text-center p-6 bg-white text-black">
          {/* Header */}
          <h2 className="text-2xl font-bold mb-4">Kami Menggunakan</h2>
          <div className="flex justify-center gap-6 mb-8 py-5">
            <img src="images/icon/logo_figma.svg" alt="Flutter" className="w-20 h-20" />
          
          </div>
    
          {/* Subheading */}
          <h3 className="text-xl font-bold mb-2">Tingkatkan Bisnis Anda dengan Jasa Pembuatan Website</h3>
          <p className="text-lg font-bold mb-6">Beragam Kategori</p>
    
          {/* Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {/* Custom Website */}
            <div className="flex flex-col items-center">
                <img
                    src="images/iconapp/custom.svg"
                    alt="Custom Website"
                    className="w-[130px] h-[130px] mb-2"  // Menggunakan ukuran kustom dengan Tailwind
                />
                <p className="text-sm font-medium">Desain Custom Website</p>
            </div>

    
            {/* Company Profile */}
            <div className="flex flex-col items-center">
              <img
                src="images/iconapp/kesehatan.svg"
                alt="Company Profile"
                className="w-[130px] h-[130px] mb-2"
              />
              <p className="text-sm font-medium">Desain Aplikasi Kesehatan</p>
            </div>
    
            {/* E-Commerce */}
            <div className="flex flex-col items-center">
              <img
                src="images/iconapp/commerce.svg"
                alt="E-Commerce"
                className="w-[130px] h-[130px] mb-2"
              />
              <p className="text-sm font-medium">Desain Aplikasi E-Commerce</p>
            </div>
    
            {/* Portfolio Web */}
            <div className="flex flex-col items-center">
              <img
                src="images/iconapp/edukasi.svg"
                alt="Portofolio Web"
                className="w-[130px] h-[130px] mb-2"
              />
              <p className="text-sm font-medium">Desain Aplikasi Edukasi</p>
            </div>
    
            {/* Landing Page */}
            <div className="flex flex-col items-center">
              <img
                src="images/iconapp/travel.svg"
                alt="Landing Page"
                className="w-[130px] h-[130px] mb-2"
              />
              <p className="text-sm font-medium">Desain Apikasi Travel</p>
            </div>
    
            {/* Government Website */}
            <div className="flex flex-col items-center">
              <img
                src="images/iconapp/produktiv.svg"
                alt="Website Pemerintahan"
                className="w-[130px] h-[130px] mb-2"
              />
              <p className="text-sm font-medium">Desain Aplikasi Produktif</p>
            </div>
          </div>
        </div>
      );
}

export default InfoUX