import React from "react";
import Image from "next/image";

const AlurApp = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-32 bg-gray-100" aria-labelledby="alur-heading">
      <h1 id="alur-heading" className="text-2xl md:text-3xl font-bold text-center mb-12 text-black">
        Alur Pembuatan Project
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12">
        {/* Perencanaan dan Desain */}
        <article className="flex flex-col items-center text-center min-h-[200px]" aria-label="Perencanaan dan Desain">
          <div className="flex justify-center items-center bg-blue-500 text-white font-bold w-12 h-12 rounded-full mb-4">1</div>
          <Image src="/images/iconapp/app1.svg" alt="Ilustrasi perencanaan dan desain UI aplikasi" width={128} height={128} className="w-20 md:w-32 mb-4" />
          <h2 className="text-lg font-semibold text-black">Perencanaan dan Desain</h2>
          <p className="text-gray-600 mt-2">Menganalisis kebutuhan, merancang UI responsif, dan menyiapkan struktur data.</p>
        </article>

        {/* Pengembangan Aplikasi */}
        <article className="flex flex-col items-center text-center min-h-[200px]" aria-label="Pengembangan Aplikasi">
          <div className="flex justify-center items-center bg-green-500 text-white font-bold w-12 h-12 rounded-full mb-4">2</div>
          <Image src="/images/iconapp/app2.svg" alt="Ilustrasi pengembangan aplikasi mobile dan backend" width={128} height={128} className="w-20 md:w-32 mb-4" />
          <h2 className="text-lg font-semibold text-black">Pengembangan Aplikasi</h2>
          <p className="text-gray-600 mt-2">Membangun frontend dengan Flutter, mengembangkan backend, dan mengintegrasikan keduanya.</p>
        </article>

        {/* Pengujian dan Peluncuran */}
        <article className="flex flex-col items-center text-center min-h-[200px]" aria-label="Pengujian dan Peluncuran">
          <div className="flex justify-center items-center bg-yellow-500 text-white font-bold w-12 h-12 rounded-full mb-4">3</div>
          <Image src="/images/iconapp/app3.svg" alt="Ilustrasi pengujian aplikasi sebelum rilis" width={128} height={128} className="w-20 md:w-32 mb-4" />
          <h2 className="text-lg font-semibold text-black">Pengujian dan Peluncuran</h2>
          <p className="text-gray-600 mt-2">Menguji aplikasi, memperbaiki bug, dan mempersiapkan peluncuran.</p>
        </article>
      </div>
    </section>
  );
};

export default AlurApp;
