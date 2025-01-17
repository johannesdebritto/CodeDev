import React from 'react'
import Image from 'next/image'

const HeroUX = () => {
  return (
    <section className="bg-white py-20 px-5 sm:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Gambar */}
        <div className="sm:col-span-5 flex justify-center">
          <Image
            src="/images/iconuxui/heroux.svg" // Ganti dengan path gambar Anda
            alt="Tentang Kami"
            width={400} // Set width for image
            height={400} // Set height for image
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
          {/* Icon */}
          <div className="mt-10 grid grid-cols-2 gap-6 text-gray-800">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/iconuxui/inovatif.svg"
                alt="Proses Cepat"
                width={56} // Set width for image
                height={56} // Set height for image
              />
              <span className="text-lg font-bold">Desain Inovatif</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/images/iconuxui/intuitif.svg"
                alt="Hasil Maksimal"
                width={56} // Set width for image
                height={56} // Set height for image
              />
              <span className="text-lg font-bold">Interaksi Intuitif</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/images/iconuxui/modern.svg"
                alt="Akses Mudah"
                width={56} // Set width for image
                height={56} // Set height for image
              />
              <span className="text-lg font-bold">Tampilan Modern</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/images/iconweb/terjangkau.svg"
                alt="Terjangkau"
                width={56} // Set width for image
                height={56} // Set height for image
              />
              <span className="text-lg font-bold">Harga Bersahabat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroUX
