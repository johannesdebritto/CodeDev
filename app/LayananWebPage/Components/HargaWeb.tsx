import Link from "next/link";
import React from "react";
import Image from "next/image";

const Price = () => {
  return (
    <section className="relative py-16 px-6 md:px-16 lg:px-32 text-white" aria-labelledby="price-heading">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src="/images/icondekstop/bgharga.svg" alt="Latar belakang harga" layout="fill" objectFit="cover" priority />
      </div>

      <header className="text-center mb-12">
        <h1 id="price-heading" className="text-3xl md:text-4xl font-bold">
          Punya Ide untuk Proyek Website Anda?
        </h1>
        <p className="text-lg mt-4">Bangun website profesional dengan mudah dan cepat</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Frontend Pack */}
        <article className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between" aria-label="Paket FrontEnd">
          <header>
            <h2 className="text-xl font-bold bg-blue-500 text-white rounded-full py-2 px-4 inline-block">FrontEnd Pack</h2>
          </header>
          <p className="text-3xl font-bold mt-4">IDR 150K</p>
          <p className="mt-4">Menyediakan fitur dan desain terbaik untuk memastikan pengalaman pengguna yang luar biasa dan tampilan web yang memukau.</p>
          <ul className="mt-4 space-y-2">
            <li>✅ Desain landing page sederhana (1–3 halaman)</li>
            <li>✅ Responsif untuk desktop dan mobile</li>
            <li>✅ Galeri sederhana</li>
            <li>✅ Integrasi dengan Sosial Media</li>
            <li>✅ Formulir Kontak</li>
            <li>✅ Desain kustomisasi dasar</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4 font-bold">Keterangan: *Fitur tambahan akan dikenakan biaya tambahan.</p>
          <Link href="/FormPage">
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg transform transition-transform hover:scale-105">Choose</button>
          </Link>
        </article>

        {/* Backend Pack */}
        <article className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between" aria-label="Paket BackEnd">
          <header>
            <h2 className="text-xl font-bold bg-purple-500 text-white rounded-full py-2 px-4 inline-block">BackEnd Pack</h2>
          </header>
          <p className="text-3xl font-bold mt-4">IDR 300K</p>
          <p className="mt-4">Menyediakan solusi backend yang handal untuk memastikan kinerja maksimal dan keamanan data yang optimal pada situs web Anda.</p>
          <ul className="mt-4 space-y-2">
            <li>✅ Pengelolaan Data Sederhana</li>
            <li>✅ CRUD (Create, Read, Update, Delete Sederhana)</li>
            <li>✅ API Dasar</li>
            <li>✅ Autentikasi Pengguna</li>
            <li>✅ Notifikasi Dasar</li>
            <li>✅ Pengelolaan Media</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4 font-bold">Keterangan: *Fitur tambahan akan dikenakan biaya tambahan.</p>
          <Link href="/FormPage">
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg transform transition-transform hover:scale-105">Choose</button>
          </Link>
        </article>

        {/* Fullstack Pack */}
        <article className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between" aria-label="Paket FullStack">
          <header>
            <h2 className="text-xl font-bold bg-green-500 text-white rounded-full py-2 px-4 inline-block">FullStack Pack</h2>
          </header>
          <p className="text-3xl font-bold mt-4">IDR 500K</p>
          <p className="mt-4">Menyediakan solusi fullstack yang lengkap untuk memastikan kinerja, fungsionalitas, dan pengalaman pengguna terbaik di seluruh aplikasi web Anda.</p>
          <ul className="mt-4 space-y-2">
            <li>✅ Desain Antarmuka Pengguna (UI) Responsif</li>
            <li>✅ Pengelolaan Data dan CRUD</li>
            <li>✅ Integrasi Frontend dan Backend</li>
            <li>✅ Notifikasi Pengguna</li>
            <li>✅ Formulir dan Pencarian</li>
            <li>✅ Analitik Dasar</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4 font-bold">Keterangan: *Fitur tambahan akan dikenakan biaya tambahan.</p>
          <Link href="/FormPage">
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg transform transition-transform hover:scale-105">Choose</button>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default Price;
