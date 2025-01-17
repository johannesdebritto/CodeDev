import React from "react";
import Image from 'next/image';

const AboutUs: React.FC = () => {
  return (
    <section id="tentangkami" className="bg-white py-10 px-5 sm:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Gambar */}
        <div className="sm:col-span-5 flex justify-start">
          <Image
            src="/images/icondekstop/gambartentang.svg" // Ganti dengan path gambar Anda
            alt="Tentang Kami"
            width={500} // Sesuaikan dengan lebar gambar yang diinginkan
            height={500} // Sesuaikan dengan tinggi gambar yang diinginkan
            className="w-full max-w-sm"
          />
        </div>

        {/* Konten Teks */}
        <div className="sm:col-span-7 space-y-4">
          <div className="flex items-center space-x-1">
            <h2 className="text-3xl font-bold text-black">Tentang Kami</h2>
            <Image
              src="/images/icon/icontentang.svg" // Ganti dengan path gambar kecil
              alt="Logo Kecil"
              width={40}  // Menyesuaikan dengan ukuran gambar kecil
              height={40} // Menyesuaikan dengan ukuran gambar kecil
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-2xl font-semibold text-black">
            Mengapa Harus Memilih Code<span className="text-blue-600">Dev?</span>
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify text-xl">
            Code<span className="text-blue-600">Dev</span> adalah mitra terpercaya untuk solusi digital Anda. Kami berkomitmen menghadirkan
            layanan yang tidak hanya berkualitas tetapi juga dirancang khusus untuk memenuhi kebutuhan bisnis Anda.
            Dengan pengalaman dan teknologi terkini, kami memastikan setiap proyek berjalan tepat waktu dan memberikan
            hasil yang maksimal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
