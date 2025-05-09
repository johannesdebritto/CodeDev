import React from "react";

import Image from "next/image";

const HargaApp = () => {
  return (
    <section aria-label="Harga Paket Aplikasi" className="relative py-16 px-6 md:px-16 lg:px-32 text-white">
      {/* Gambar latar belakang sebagai elemen img agar bisa terbaca crawler */}
      <div className="absolute inset-0 -z-10">
        <Image src="/images/icondekstop/bgharga.svg" alt="Background Harga Aplikasi" fill priority style={{ objectFit: "cover", objectPosition: "center" }} />
      </div>

      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Punya Ide untuk Proyek Aplikasi Anda?</h1>
        <p className="text-lg mt-4">Bangun Aplikasi profesional dengan mudah dan cepat</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Artikel 1: Frontend Pack */}
        <article className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <header>
            <h2 className="text-xl font-bold bg-blue-500 text-white rounded-full py-2 px-4 inline-block">FrontEnd Pack</h2>
            <p className="text-3xl font-bold mt-4">IDR 300K</p>
          </header>
          <p className="mt-4">Menyediakan fitur dan desain terbaik untuk memastikan pengalaman pengguna yang luar biasa dan tampilan web yang memukau.</p>
          <ul className="mt-4 space-y-2">
            <li>
              ✅ Desain Antarmuka Pengguna (UI) <span className="pl-6">Responsif (maksimal 3 halaman)</span>
            </li>
            <li>✅ Navigasi Antarmuka</li>
            <li>✅ Formulir Pengguna</li>
            <li>✅ Integrasi dengan Fitur Perangkat</li>
            <li>✅ Desain Material UI</li>
            <li>
              ✅ Responsif untuk Semua Ukuran <span className="pl-6">Layar</span>
            </li>
          </ul>
          <footer>
            <p className="text-sm text-gray-500 mt-4 font-bold">Keterangan: *Fitur tambahan akan dikenakan biaya tambahan.</p>
          </footer>
        </article>

        {/* Artikel 2: Backend Pack */}
        <article className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <header>
            <h2 className="text-xl font-bold bg-purple-500 text-white rounded-full py-2 px-4 inline-block">BackEnd Pack</h2>
            <p className="text-3xl font-bold mt-4">IDR 450K</p>
          </header>
          <p className="mt-4">Menyediakan solusi backend yang handal untuk memastikan kinerja maksimal dan keamanan data yang optimal pada situs web Anda.</p>
          <ul className="mt-4 space-y-2">
            <li>✅ API Restful untuk Aplikasi</li>
            <li>✅ Pengelolaan Database</li>
            <li>✅ Autentikasi Pengguna</li>
            <li>✅ Manajemen Data Pengguna</li>
            <li>✅ Pengiriman Notifikasi Push</li>
            <li>✅ Integrasi Pembayaran</li>
          </ul>
          <footer>
            <p className="text-sm text-gray-500 mt-4 font-bold">Keterangan: *Fitur tambahan akan dikenakan biaya tambahan.</p>
          </footer>
        </article>

        {/* Artikel 3: Fullstack Pack */}
        <article className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <header>
            <h2 className="text-xl font-bold bg-green-500 text-white rounded-full py-2 px-4 inline-block">FullStack Pack</h2>
            <p className="text-3xl font-bold mt-4">IDR 700K</p>
          </header>
          <p className="mt-4">Menyediakan solusi fullstack yang lengkap untuk memastikan kinerja, fungsionalitas, dan pengalaman pengguna terbaik di seluruh aplikasi web Anda.</p>
          <ul className="mt-4 space-y-2">
            <li>✅ Desain UI dan Integrasi Backend</li>
            <li>
              ✅ Fitur CRUD (Create, Read, Update, <span className="pl-6">Delete)</span>
            </li>
            <li>
              ✅ Autentikasi dan Manajemen <span className="pl-6">Pengguna</span>
            </li>
            <li>
              ✅ Notifikasi Push dan Pembaruan <span className="pl-6">Langsung</span>
            </li>
            <li>
              ✅ Penyimpanan Data Lokal dan <span className="pl-6">Server</span>
            </li>
            <li>
              ✅ Integrasi Fitur Lain (Maps, <span className="pl-6">Kamera, dll.)</span>
            </li>
          </ul>
          <footer>
            <p className="text-sm text-gray-500 mt-4 font-bold">Keterangan: *Fitur tambahan akan dikenakan biaya tambahan.</p>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default HargaApp;
