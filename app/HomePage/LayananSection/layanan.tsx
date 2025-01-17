import React from "react";

const Layanan = () => {
  return (
    <section id="layanan" className=" scroll-offset py-10 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Judul Layanan */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">
            Layanan <span className="text-blue-600">CodeDev</span>
          </h1>
          <p className="text-gray-700 text-lg mt-2">
            CodeDev menyediakan layanan Mobile Development, Web Development, dan UX/UI Design
            untuk menciptakan solusi digital yang modern, responsif, dan sesuai kebutuhan Anda.
          </p>
        </div>

        {/* Konten Layanan */}
        <div className="flex flex-col gap-12">
          {/* Jasa Pembuatan Aplikasi Android */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="flex flex-col items-center">
              <img
                src="images/icondekstop/android.svg"
                alt="Jasa Pembuatan Aplikasi Android"
                className="w-64 md:w-80 lg:w-96 object-contain"
              />
             
            </div>
            <div className="mt-12">
              {/* flutterimage */}
              <div className="flex space-x-4 items-center mb-2">
                <img
                  src="images/icon/logo_flutter.svg"
                  alt="Flutter Logo"
                  className="w-10 h-10"
                />
                <img
                  src="images/icon/logo_firebase.svg"
                  alt="Firebase Logo"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-[22px] font-bold text-blue-600 mb-1">
                Jasa Pembuatan Aplikasi Android
              </h3>
              <hr className="h-0.5 bg-black mb-2 border-0" />
              <p className="text-gray-700 text-justify font-semibold text-[19px]">
                Dorong pertumbuhan bisnis Anda dengan aplikasi Android yang dirancang khusus oleh tim
                profesional kami. Kami menghadirkan solusi inovatif yang sesuai dengan kebutuhan industri,
                memastikan efisiensi, kemudahan, dan hasil maksimal untuk kesuksesan Anda.
              </p>
              {/* Button Lebih Lanjut */}
              <a href="/LayananAndroidPage" className="relative inline-flex items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group mt-2">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Lihat Detail
              </span>
              <span className="relative invisible">Lihat Detail</span>
            </a>

            </div>
          </div>

          {/* Jasa Pembuatan Website */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Gambar */}
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="images/icondekstop/web.svg"
                alt="Jasa Pembuatan Website"
                className="w-64 md:w-80 lg:w-96 object-contain"
              />
            </div>

            {/* Teks dan Ikon */}
            <div className="order-2 md:order-1">
              <div className="flex space-x-4 items-center mb-2">
                <img
                  src="images/icon/logo_html.svg"
                  alt="HTML Logo"
                  className="w-10 h-10"
                />
                <img
                  src="images/icon/logo_laravel.svg"
                  alt="Laravel Logo"
                  className="w-10 h-10"
                />
                <img
                  src="images/icon/logo_next.svg"
                  alt="Next.js Logo"
                  className="w-10 h-10"
                />
                <img
                  src="images/icon/logo_tailwind.svg"
                  alt="Tailwind Logo"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-[22px] font-bold text-blue-600 mb-2">
                Jasa Pembuatan Website
              </h3>
              <hr className="h-0.5 bg-black mb-2 border-0" />
              <p className="text-gray-700 text-justify font-semibold text-[19px]">
                Tingkatkan kesuksesan bisnis Anda dengan layanan pengembangan website modern dan
                responsif. Kami menghadirkan solusi web yang dirancang khusus untuk memenuhi kebutuhan
                industri, membantu meningkatkan visibilitas, efisiensi, dan keberhasilan Anda secara online.
              </p>
              {/* Tombol */}
              <a
                href="/LayananWebPage"
                className="relative inline-flex items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group mt-2"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Lihat Detail
                </span>
                <span className="relative invisible">Lihat Detail</span>
              </a>
            </div>
          </div>

          {/* Jasa Pembuatan Desain UX/UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="flex flex-col items-center">
              <img
                src="images/icondekstop/ux.svg"
                alt="Jasa Pembuatan Desain UX/UI"
                className="w-64 md:w-80 lg:w-96 object-contain"
              />
            </div>
            <div className="mt-8">
            <div className="flex space-x-4 items-center mb-2">
                <img
                  src="images/icon/logo_figma.svg"
                  alt="Flutter Logo"
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-[22px] font-bold text-blue-600 mb-2">
                Jasa Pembuatan Desain UX / UI
              </h3>
              <hr className="h-0.5 bg-black mb-2 border-0" />
              <p className="text-gray-700 text-justify font-semibold text-[19px]">
                Transformasikan ide Anda menjadi desain UX/UI yang menarik dan fungsional. Kami
                menciptakan solusi desain yang fokus pada pengalaman pengguna, memastikan tampilan modern
                dan interaksi yang intuitif untuk mendukung kesuksesan bisnis Anda.
              </p>
              {/* Button Lebih Lanjut */}
              <a href="/LayananUXUIPage" className="relative inline-flex items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group mt-2">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Lihat Detail
              </span>
              <span className="relative invisible">Lihat Detail</span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
