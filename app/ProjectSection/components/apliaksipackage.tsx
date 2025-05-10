"use client";
import React from "react";

const aplikasiPackages = [
  {
    title: "FrontEnd Pack",
    price: "IDR 300K",
    color: "bg-blue-500",
    features: ["Desain UI responsif (max 3 halaman)", "Navigasi antarmuka", "Formulir pengguna", "Integrasi fitur perangkat", "Material UI"],
  },
  {
    title: "BackEnd Pack",
    price: "IDR 450K",
    color: "bg-purple-500",
    features: ["API Restful", "Manajemen database", "Autentikasi pengguna", "Push Notification", "Integrasi pembayaran"],
  },
  {
    title: "FullStack Pack",
    price: "IDR 700K",
    color: "bg-green-500",
    features: ["Desain UI + backend", "Fitur CRUD", "Notifikasi realtime", "Penyimpanan lokal/server", "Integrasi fitur Maps/dll"],
  },
  {
    title: "Custom Pack",
    price: "Hubungi Kami",
    color: "bg-gray-500",
    features: ["Paket sesuai kebutuhan Anda", "Konsultasi gratis", "Estimasi waktu & harga fleksibel"],
  },
];

const AplikasiPackages = () => {
  const handleSelect = (title: string) => {
    alert(`Kamu memilih: ${title}`);
  };

  return (
    <section id="paket-aplikasi" className="relative py-16 px-4 md:px-16 lg:px-24 text-gray-800">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-full"></div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Pilih Paket Aplikasi</h2>
        <p className="text-gray-300">Bangun aplikasi impianmu sesuai kebutuhan</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {aplikasiPackages.map((pack) => (
          <div key={pack.title} className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-2xl transition">
            <div>
              <h3 className={`text-lg font-bold text-white px-3 py-1 rounded-full inline-block ${pack.color}`}>{pack.title}</h3>
              <p className="text-2xl font-bold mt-4">{pack.price}</p>
              <ul className="mt-4 text-sm list-disc pl-5 text-left space-y-2">
                {pack.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
            <button onClick={() => handleSelect(pack.title)} className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full hover:scale-105 transition">
              Pilih Layanan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AplikasiPackages;
