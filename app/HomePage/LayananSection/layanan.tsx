import React from "react";
import Image from "next/image"; // Import komponen Image

const Layanan = () => {
  return (
    <section id="layanan" className="scroll-offset py-10 px-5 bg-white" aria-labelledby="layanan-heading">
      <div className="max-w-6xl mx-auto">
        {/* Judul Layanan */}
        <header className="mb-8">
          <h2 id="layanan-heading" className="text-3xl font-bold text-black">
            Layanan <span className="text-blue-600">CodeDev</span>
          </h2>
          <p className="text-gray-700 text-lg mt-2">CodeDev menyediakan layanan Mobile Development, Web Development, dan UX/UI Design untuk menciptakan solusi digital yang modern, responsif, dan sesuai kebutuhan Anda.</p>
        </header>

        {/* Konten Layanan */}
        <div className="flex flex-col gap-12">
          {/* Jasa Pembuatan Aplikasi Android */}
          <article className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <figure className="flex flex-col items-center">
              <Image
                src="/images/icondekstop/android.svg" // Gunakan path relatif jika gambar berada di folder public
                alt="Ilustrasi layanan pembuatan aplikasi Android"
                width={400} // Sesuaikan ukuran gambar
                height={400} // Sesuaikan ukuran gambar
                className="object-contain"
                priority // Tambahkan priority jika gambar ini penting dan perlu diprioritaskan
              />
            </figure>
            <div className="mt-12">
              <div className="flex space-x-4 items-center mb-2">
                <Image src="/images/icon/logo_flutter.svg" alt="Logo Flutter" width={40} height={40} />
                <Image src="/images/icon/logo_firebase.svg" alt="Logo Firebase" width={40} height={40} />
              </div>
              <h3 className="text-[22px] font-bold text-blue-600 mb-1">Jasa Pembuatan Aplikasi Android</h3>
              <hr className="h-0.5 bg-black mb-2 border-0" />
              <p className="text-gray-700 text-justify font-semibold text-[19px]">
                Dorong pertumbuhan bisnis Anda dengan aplikasi Android yang dirancang khusus oleh tim profesional kami. Kami menghadirkan solusi inovatif yang sesuai dengan kebutuhan industri, memastikan efisiensi, kemudahan, dan hasil
                maksimal untuk kesuksesan Anda.
              </p>
              <a
                href="/LayananAndroidPage"
                className="relative inline-flex items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group mt-2"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Lihat Detail</span>
                <span className="relative invisible">Lihat Detail</span>
              </a>
            </div>
          </article>

          {/* Jasa Pembuatan Website */}
          <article className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <figure className="order-1 md:order-2 flex justify-center">
              <Image
                src="/images/icondekstop/web.svg"
                alt="Ilustrasi layanan pembuatan website"
                width={400} // Sesuaikan ukuran gambar
                height={400} // Sesuaikan ukuran gambar
                className="object-contain"
                priority
              />
            </figure>
            <div className="order-2 md:order-1">
              <div className="flex space-x-4 items-center mb-2">
                <Image src="/images/icon/logo_html.svg" alt="Logo HTML" width={40} height={40} />
                <Image src="/images/icon/logo_laravel.svg" alt="Logo Laravel" width={40} height={40} />
                <Image src="/images/icon/logo_next.svg" alt="Logo Next.js" width={40} height={40} />
                <Image src="/images/icon/logo_tailwind.svg" alt="Logo Tailwind CSS" width={40} height={40} />
              </div>
              <h3 className="text-[22px] font-bold text-blue-600 mb-2">Jasa Pembuatan Website</h3>
              <hr className="h-0.5 bg-black mb-2 border-0" />
              <p className="text-gray-700 text-justify font-semibold text-[19px]">
                Tingkatkan kesuksesan bisnis Anda dengan layanan pengembangan website modern dan responsif. Kami menghadirkan solusi web yang dirancang khusus untuk memenuhi kebutuhan industri, membantu meningkatkan visibilitas, efisiensi,
                dan keberhasilan Anda secara online.
              </p>
              <a
                href="/LayananWebPage"
                className="relative inline-flex items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group mt-2"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Lihat Detail</span>
                <span className="relative invisible">Lihat Detail</span>
              </a>
            </div>
          </article>

          {/* Jasa UX/UI */}
          <article className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <figure className="flex flex-col items-center">
              <Image src="/images/icondekstop/ux.svg" alt="Ilustrasi layanan desain UX/UI" width={400} height={400} className="object-contain" priority />
            </figure>
            <div className="mt-8">
              <div className="flex space-x-4 items-center mb-2">
                <Image src="/images/icon/logo_figma.svg" alt="Logo Figma" width={40} height={40} />
              </div>
              <h3 className="text-[22px] font-bold text-blue-600 mb-2">Jasa Pembuatan Desain UX / UI</h3>
              <hr className="h-0.5 bg-black mb-2 border-0" />
              <p className="text-gray-700 text-justify font-semibold text-[19px]">
                Transformasikan ide Anda menjadi desain UX/UI yang menarik dan fungsional. Kami menciptakan solusi desain yang fokus pada pengalaman pengguna, memastikan tampilan modern dan interaksi yang intuitif untuk mendukung kesuksesan
                bisnis Anda.
              </p>
              <a
                href="/LayananUXUIPage"
                className="relative inline-flex items-center justify-center p-4 px-6 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group mt-2"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Lihat Detail</span>
                <span className="relative invisible">Lihat Detail</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
