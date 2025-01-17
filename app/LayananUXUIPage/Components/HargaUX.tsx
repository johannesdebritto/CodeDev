import React from 'react'
import Link from 'next/link'
const HargaUX = () => {
    return (
        <div 
        style={{
            backgroundImage: "url('images/icondekstop/bgharga.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="py-16 px-6 md:px-16 lg:px-32 text-white">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">
            Punya Ide untuk Proyek Aplikasi Anda?
            </h1>
            <p className="text-lg mt-4">
            Bangun Aplikasi profesional dengan mudah dan cepat
            </p>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Pack */}
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold bg-blue-500 text-white rounded-full py-2 px-4 inline-block">
                  Starter Pack
                </h2>
                <p className="text-3xl font-bold mt-4">IDR 100K</p>
                <p className="mt-4">
                  Menyediakan fitur dan desain terbaik untuk memastikan pengalaman
                  pengguna yang luar biasa dan tampilan UX/UI yang memukau.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>✅ Desain sederhana</li>
                  <li>✅ 3-7 layar</li>
                  <li>✅ wireframe dasar</li>
                  <li>✅ responsif</li>
                  
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
                  Standard Pack
                </h2>
                <p className="text-3xl font-bold mt-4">IDR 250K</p>
                <p className="mt-4">
                  Menyediakan solusi backend yang handal untuk memastikan kinerja
                  maksimal dan keamanan data yang optimal pada desain UX/UI Anda.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>✅ Desain profesional</li>
                  <li>✅ 8-12 layar</li> 
                  <li>✅ wireframe + prototipe</li>
                  <li>✅ revisi hingga 3 kali</li>
                  <li>✅ responsif</li>
                  
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
                  Advance Pack
                </h2>
                <p className="text-3xl font-bold mt-4">IDR 450K</p>
                <p className="mt-4">
                  Menyediakan solusi fullstack yang lengkap untuk memastikan kinerja,
                  fungsionalitas, dan pengalaman pengguna terbaik pada UX/UI Anda.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>✅ Desain kompleks</li>  
                  <li>✅ 13-15 layar</li>
                  <li>✅ Prototipe interaktif</li>
                  <li>✅ Revisi hingga 5 kali</li>
                  <li>✅ Konsistensi branding</li>
                  
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
}

export default HargaUX