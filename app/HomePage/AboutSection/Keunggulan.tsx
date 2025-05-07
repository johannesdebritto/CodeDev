import React from "react";
import Image from "next/image";

const Keunggulan = () => {
  return (
    <section className="bg-cover bg-center py-10 px-5 sm:px-10" style={{ backgroundImage: "url('images/icondekstop/bgkeunggulan.svg')" }}>
      <article className="max-w-6xl mx-auto text-center text-white">
        {/* Header Section */}
        <header className="flex items-center justify-center mb-4 relative">
          <h2 className="text-3xl font-bold text-white">Keunggulan CodeDev</h2>
          <Image
            src="/images/icon/iconunggul.svg" // Update with your image path
            alt="Icon Keunggulan"
            width={128} // Adjust width as needed
            height={128} // Adjust height as needed
            className="hidden sm:block" // Hide on mobile screens
            style={{ marginTop: "-10px" }} // Adjust margin as needed
            priority // Gambar penting diberi priority untuk SEO
          />
        </header>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 sm:mt-[-20px]">
          {/* Card 1 */}
          <article className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <div className="py-5 text-lg font-semibold text-center text-black" style={{ backgroundColor: "#CEF6E9" }}>
              Solusi yang Disesuaikan dengan Kebutuhan Anda
            </div>
            <div className="p-5 flex flex-col items-center">
              <p className="text-sm mb-4 text-center">Kami merancang dan mengembangkan website, aplikasi mobile, dan UX/UI yang sepenuhnya sesuai dengan tujuan dan identitas bisnis Anda.</p>
              <Image
                src="/images/icondekstop/solusi.svg"
                alt="Icon 1"
                width={160} // Adjust width as needed
                height={160} // Adjust height as needed
                className="w-40 h-40" // Optional: Keep or adjust width/height
                priority // Gambar penting diberi priority
              />
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <div className="py-5 text-lg font-semibold text-center text-black" style={{ backgroundColor: "#D4A373" }}>
              Harga Terjangkau dengan Kualitas Terbaik
            </div>
            <div className="p-5 flex flex-col items-center">
              <p className="text-sm mb-4 text-center">CodeDev menawarkan layanan premium dengan harga yang kompetitif tanpa mengorbankan kualitas, sehingga cocok untuk berbagai skala bisnis.</p>
              <Image
                src="/images/icondekstop/harga.svg"
                alt="Icon 2"
                width={160} // Adjust width as needed
                height={160} // Adjust height as needed
                className="w-40 h-40" // Optional: Keep or adjust width/height
                priority // Gambar penting diberi priority
              />
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <div className="py-5 text-lg font-semibold text-center text-black" style={{ backgroundColor: "#D5C8FB" }}>
              Teknologi Terkini & Desain Modern
            </div>
            <div className="p-5 flex flex-col items-center">
              <p className="text-sm mb-4 text-center">Kami memanfaatkan teknologi terbaru dan tren desain terkini untuk memastikan hasil yang responsif, modern, dan fungsional di semua perangkat.</p>
              <Image
                src="/images/icondekstop/teknologi.svg"
                alt="Icon 3"
                width={160} // Adjust width as needed
                height={160} // Adjust height as needed
                className="w-40 h-40" // Optional: Keep or adjust width/height
                priority // Gambar penting diberi priority
              />
            </div>
          </article>

          {/* Card 4 */}
          <article className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <div className="py-5 text-lg font-semibold text-center text-black" style={{ backgroundColor: "#A7C957" }}>
              Dukungan Pelanggan yang Cepat & Responsif
            </div>
            <div className="p-5 flex flex-col items-center">
              <p className="text-sm mb-4 text-center">Tim kami selalu siap memberikan dukungan dan solusi, mulai dari konsultasi hingga purna layanan, memastikan pengalaman Anda tetap lancar dan memuaskan.</p>
              <Image
                src="/images/icondekstop/dukungan.svg"
                alt="Icon 4"
                width={160} // Adjust width as needed
                height={160} // Adjust height as needed
                className="w-40 h-40" // Optional: Keep or adjust width/height
                priority // Gambar penting diberi priority
              />
            </div>
          </article>
        </div>
      </article>
    </section>
  );
};

export default Keunggulan;
