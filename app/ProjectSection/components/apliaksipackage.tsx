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
    <section id="paket-aplikasi" className="py-12 px-4 md:px-16 lg:px-24 bg-white text-gray-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Pilih Paket Aplikasi</h2>
        <p className="text-gray-600">Bangun aplikasi impianmu sesuai kebutuhan</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aplikasiPackages.map((pack) => (
          <div key={pack.title} className="border rounded-xl p-6 shadow hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className={`text-lg font-bold text-white inline-block px-3 py-1 rounded-full ${pack.color}`}>{pack.title}</h3>
              <p className="text-2xl font-bold mt-3">{pack.price}</p>
              <ul className="mt-4 text-sm space-y-1 list-disc list-inside">
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
