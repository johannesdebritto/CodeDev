import React from "react";

const AlurApp = () => {
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
          <img
            src="/images/iconapp/app1.svg"
            alt="Perencanaan dan Desain"
            className="w-20 md:w-32 mb-4"
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
          <img
            src="/images/iconapp/app2.svg"
            alt="Pengembangan Aplikasi"
            className="w-20 md:w-32 mb-4"
          />
          <h2 className="text-lg font-semibold text-black">Pengembangan Aplikasi</h2>
          <p className="text-gray-600 mt-2">
            Membangun frontend dengan Flutter, mengembangkan backend, dan
            mengintegrasikan keduanya.
          </p>
        </div>

        {/* Pengujian dan Peluncuran */}
        <div className="flex flex-col items-center text-center min-h-[200px]">
          <div className="flex justify-center items-center bg-yellow-500 text-white font-bold w-12 h-12 rounded-full mb-4">
            3
          </div>
          <img
            src="/images/iconapp/app3.svg"
            alt="Pengujian dan Peluncuran"
            className="w-20 md:w-32 mb-4"
          />
          <h2 className="text-lg font-semibold text-black">Pengujian dan Peluncuran</h2>
          <p className="text-gray-600 mt-2">
            Menguji aplikasi, perbaiki bug, dan persiapkan peluncuran.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlurApp;
