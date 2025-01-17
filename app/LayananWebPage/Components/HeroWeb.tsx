import React from 'react';

const Hero = () => {
    return (
        <section className="bg-white py-20 px-5 sm:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
            {/* Gambar */}
            <div className="sm:col-span-5 flex justify-center">
              <img
               src="images/iconweb/heroweb.svg" // // Ganti dengan path gambar Anda
                alt="Tentang Kami"
                className="w-full max-w-xs" // Ukuran gambar lebih kecil
              />
            </div>
    
            {/* Konten Teks */}
            <div className="sm:col-span-7 space-y-4">
              <h3 className="text-2xl font-semibold text-black">
              Jasa Pembuatan Website Responsif, Modern dan Terjangkau
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify text-xl">
              Wujudkan Website Impian untuk Mendukung Bisnis Anda dengan Desain Responsif, Modern, dan Harga Terjangkau!
              </p>
              {/* Iconn */}
              <div className="mt-10 grid grid-cols-2 gap-6 text-gray-800">
                    <div className="flex items-center space-x-3">
                    <img src="images/iconweb/prosescepat.svg" alt="Proses Cepat" className="w-[3.50rem] h-[3.50rem]" />
                    <span className="text-lg font-bold">Proses Cepat</span>
                    </div>
                    <div className="flex items-center space-x-3">
                    <img src="images/iconweb/hasilmaksimal.svg" alt="Hasil Maksimal" className="w-[3.50rem] h-[3.50rem]" />
                    <span className="text-lg font-bold">Hasil Maksimal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                    <img src="images/iconweb/mudahdigunakan.svg" alt="Akses Mudah" className="w-[3.50rem] h-[3.50rem]" />
                    <span className="text-lg font-bold">Akses Mudah</span>
                    </div>
                    <div className="flex items-center space-x-3">
                    <img src="images/iconweb/terjangkau.svg" alt="Terjangkau" className="w-[3.50rem] h-[3.50rem]" />
                    <span className="text-lg font-bold">Terjangkau</span>
                    </div>
                </div>
            </div>
          </div>
        </section>
    );
};

export default Hero;
