"use client";
import React from "react";
import Image from "next/image";

const WebPackages = () => {
  const handleSelect = (title: string) => {
    alert(`Kamu memilih: ${title}`);
  };

  const packages = [
    {
      title: "FrontEnd Pack",
      price: "IDR 150K",
      color: "bg-blue-500",
      features: ["Desain landing page sederhana (1–3 halaman)", "Responsif untuk desktop dan mobile", "Galeri sederhana", "Integrasi dengan Sosial Media", "Formulir Kontak", "Desain kustomisasi dasar"],
    },
    {
      title: "BackEnd Pack",
      price: "IDR 300K",
      color: "bg-purple-500",
      features: ["Pengelolaan Data Sederhana", "CRUD (Create, Read, Update, Delete Sederhana)", "API Dasar", "Autentikasi Pengguna", "Notifikasi Dasar", "Pengelolaan Media"],
    },
    {
      title: "FullStack Pack",
      price: "IDR 500K",
      color: "bg-green-500",
      features: ["Desain Antarmuka Pengguna (UI) Responsif", "Pengelolaan Data dan CRUD", "Integrasi Frontend dan Backend", "Notifikasi Pengguna", "Formulir dan Pencarian", "Analitik Dasar"],
    },
    {
      title: "Custom Pack",
      price: "Hubungi Kami",
      color: "bg-gray-500",
      features: ["Paket sesuai kebutuhan Anda", "Konsultasi gratis", "Estimasi waktu & harga fleksibel"],
    },
  ];

  return (
    <section id="paket-website" className="relative py-16 px-4 md:px-16 lg:px-24 text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image src="/images/icondekstop/bgharga.svg" alt="Latar belakang harga" fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Punya Ide untuk Proyek Website Anda?</h1>
        <p className="text-lg mt-4">Bangun website profesional dengan mudah dan cepat</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {packages.map((pack) => (
          <div key={pack.title} className="bg-white text-gray-900 rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-2xl transition">
            <div>
              <h2 className={`text-lg font-bold text-white px-3 py-1 rounded-full inline-block ${pack.color}`}>{pack.title}</h2>
              <p className="text-2xl font-bold mt-4">{pack.price}</p>
              <ul className="mt-4 text-sm list-disc pl-5 text-left space-y-2">
                {pack.features.map((item, index) => (
                  <li key={index}>{item}</li>
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

export default WebPackages;
