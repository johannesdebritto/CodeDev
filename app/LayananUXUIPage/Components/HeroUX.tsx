import React from 'react'

const HeroUX = () => {
    return (
        <section className="bg-white py-20 px-5 sm:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
            {/* Gambar */}
            <div className="sm:col-span-5 flex justify-center">
              <img
                src="images/iconuxui/heroux.svg" // Ganti dengan path gambar Anda
                alt="Tentang Kami"
                className="w-full max-w-xs" // Ukuran gambar lebih kecil
              />
            </div>
    
            {/* Konten Teks */}
            <div className="sm:col-span-7 space-y-4">
              <h3 className="text-2xl font-semibold text-black">
              Desain UX/UI Modern dengan Fokus pada Kenyamanan Pengguna dan Harga Bersahabat
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify text-xl">
              Ciptakan Desain UX/UI Profesional untuk Bisnis Anda dengan Tampilan Modern, Fungsional, dan Pengalaman Pengguna yang Maksimal, Semua dengan Harga Bersahabat!
              </p>
              {/* Iconn */}
              <div className="mt-10 grid grid-cols-2 gap-6 text-gray-800">
            <div className="flex items-center space-x-3">
              <img
                src="images/iconuxui/inovatif.svg"
                alt="Proses Cepat"
                className="w-[3.50rem] h-[3.50rem]"
              />
              <span className="text-lg font-bold">Desain Inovatif</span>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src="images/iconuxui/intuitif.svg"
                alt="Hasil Maksimal"
                className="w-[3.50rem] h-[3.50rem]"
              />
              <span className="text-lg font-bold">Interaksi Intuitif</span>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src="images/iconuxui/modern.svg"
                alt="Akses Mudah"
                className="w-[3.50rem] h-[3.50rem]"
              />
              <span className="text-lg font-bold">Tampilan Modern</span>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src="images/iconweb/terjangkau.svg"
                alt="Terjangkau"
                className="w-[3.50rem] h-[3.50rem]"
              />
              <span className="text-lg font-bold">Harga Bersahabat</span>
            </div>
          </div>
            </div>
          </div>
        </section>
    );
}

export default HeroUX