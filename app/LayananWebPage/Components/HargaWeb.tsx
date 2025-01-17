import Link from 'next/link'
import React from "react";

const Price = () => {
  return (
    <div
      style={{
        backgroundImage: "url('images/icondekstop/bgharga.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-16 px-6 md:px-16 lg:px-32 text-white"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Punya Ide untuk Proyek Website Anda?
        </h1>
        <p className="text-lg mt-4">
          Bangun website profesional dengan mudah dan cepat
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Frontend Pack */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold bg-blue-500 text-white rounded-full py-2 px-4 inline-block">
              FrontEnd Pack
            </h2>
            <p className="text-3xl font-bold mt-4">IDR 150K</p>
            <p className="mt-4">
              Menyediakan fitur dan desain terbaik untuk memastikan pengalaman
              pengguna yang luar biasa dan tampilan web yang memukau.
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                ✅ Desain landing page sederhana <br />
                <span className="pl-6">(1-3 halaman)</span>
              </li>
              <li>
                ✅ Responsif untuk desktop dan <br />
                <span className="pl-6">(mobile)</span>
              </li>
              <li>✅ Galeri sederhana</li>
              <li>✅ Integrasi dengan Sosial Media</li>
              <li>✅ Formulir Kontak</li>
              <li>✅ Desain kustomisasi dasar</li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-4 font-bold">
              Keterangan: *Fitur tambahan akan dikenakan biaya tambahan.
            </p>
            <Link href="/FormPage">
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg transform transition-transform hover:scale-105">
                Choose
            </button>
            </Link>
          </div>
        </div>

        {/* Backend Pack */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold bg-purple-500 text-white rounded-full py-2 px-4 inline-block">
              BackEnd Pack
            </h2>
            <p className="text-3xl font-bold mt-4">IDR 300K</p>
            <p className="mt-4">
              Menyediakan solusi backend yang handal untuk memastikan kinerja
              maksimal dan keamanan data yang optimal pada situs web Anda.
            </p>
            <ul className="mt-4 space-y-2">
              <li>✅ Pengelolaan Data Sederhana</li>
              <li>
                ✅ CRUD (Create, Read, Update,
                <br />
                <span className="pl-6">(Delete) Sederhana)</span>
              </li>
              <li>✅ API Dasar</li>
              <li>✅ Autentikasi Pengguna</li>
              <li>✅ Notifikasi Dasar</li>
              <li>✅ Pengelolaan Media</li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-4 font-bold">
              Keterangan: *Fitur tambahan akan dikenakan biaya tambahan.
            </p>
            <Link href="/FormPage">
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg transform transition-transform hover:scale-105">
                Choose
            </button>
            </Link>
          </div>
        </div>

        {/* Fullstack Pack */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold bg-green-500 text-white rounded-full py-2 px-4 inline-block">
              FullStack Pack
            </h2>
            <p className="text-3xl font-bold mt-4">IDR 500K</p>
            <p className="mt-4">
              Menyediakan solusi fullstack yang lengkap untuk memastikan kinerja,
              fungsionalitas, dan pengalaman pengguna terbaik di seluruh aplikasi
              web Anda.
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                ✅ Desain Antarmuka Pengguna (UI)
                <br />
                <span className="pl-6">(Responsif)</span>
              </li>
              <li>✅ Pengelolaan Data dan CRUD</li>
              <li>✅ Integrasi Frontend dan Backend</li>
              <li>✅ Notifikasi Pengguna</li>
              <li>✅ Formulir dan Pencarian</li>
              <li>✅ Analitik Dasar</li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-4 font-bold">
              Keterangan: *Fitur tambahan akan dikenakan biaya tambahan.
            </p>
            <Link href="/FormPage">
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg transform transition-transform hover:scale-105">
                Choose
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
