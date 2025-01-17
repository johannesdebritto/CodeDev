import React from 'react'
import Image from 'next/image'

const AlurUX = () => {
  return (
    <div className="py-16 px-6 md:px-16 lg:px-32 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-12 text-black">
        Alur Pembuatan Project
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12">
        {/* Perencanaan dan Desain */}
        <div className="flex flex-col items-center text-center min-h-[200px]">
          <div className="flex justify-center items-center bg-blue-500 text-white font-bold w-12 h-12 rounded-full mb-4">
            1
          </div>
          <Image
            src="/images/iconapp/app1.svg"
            alt="Perencanaan dan Desain"
            width={128} // Set width for image
            height={128} // Set height for image
            className="mb-4"
          />
          <h2 className="text-lg font-semibold text-black">Perencanaan dan Desain</h2>
          <p className="text-gray-600 mt-2">
            Menganalisis kebutuhan, merancang UI responsif, dan menyiapkan
            struktur data.
          </p>
        </div>

        {/* Pengembangan Aplikasi */}
        <div className="flex flex-col items-center text-center min-h-[200px]">
          <div className="flex justify-center items-center bg-green-500 text-white font-bold w-12 h-12 rounded-full mb-4">
            2
          </div>
          <Image
            src="/images/iconapp/app2.svg"
            alt="Pengembangan Aplikasi"
            width={128} // Set width for image
            height={128} // Set height for image
            className="mb-4"
          />
          <h2 className="text-lg font-semibold text-black">Pengembangan UX/UI</h2>
          <p className="text-gray-600 mt-2">
            Membuat desain UX/UI yang menarik dan fungsional menggunakan Figma.
          </p>
        </div>

        {/* Pengujian dan Peluncuran */}
        <div className="flex flex-col items-center text-center min-h-[200px]">
          <div className="flex justify-center items-center bg-yellow-500 text-white font-bold w-12 h-12 rounded-full mb-4">
            3
          </div>
          <Image
            src="/images/iconapp/app3.svg"
            alt="Pengujian dan Peluncuran"
            width={128} // Set width for image
            height={128} // Set height for image
            className="mb-4"
          />
          <h2 className="text-lg font-semibold text-black">Pengujian dan Peluncuran</h2>
          <p className="text-gray-600 mt-2">
            Menguji desain, perbaiki masalah, dan persiapkan peluncuran.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AlurUX
