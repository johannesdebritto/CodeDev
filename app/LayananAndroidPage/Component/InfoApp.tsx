import React from "react";
import Image from "next/image";

const InfoApp = () => {
  return (
    <section aria-label="Informasi Teknologi dan Kategori Aplikasi" className="text-center p-6 bg-white text-black">
      <header>
        <h2 className="text-2xl font-bold mb-4">Kode Pemrograman Yang Kami Gunakan</h2>
      </header>

      <div className="flex justify-center gap-6 mb-8 py-5" aria-label="Logo Teknologi">
        <Image src="/images/icon/logo_flutter.svg" alt="Flutter" width={80} height={80} priority />
        <Image src="/images/icon/logo_firebase.svg" alt="Firebase" width={80} height={80} priority />
      </div>

      <article aria-labelledby="kategori-heading">
        <header>
          <h3 id="kategori-heading" className="text-xl font-bold mb-2">
            Tingkatkan Bisnis Anda dengan Jasa Pembuatan Website
          </h3>
          <p className="text-lg font-bold mb-6">Beragam Kategori</p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {/* Custom Website */}
          <div className="flex flex-col items-center">
            <Image src="/images/iconapp/custom.svg" alt="Custom Website" width={130} height={130} className="mb-2" priority />
            <p className="text-sm font-medium">Custom Website</p>
          </div>

          {/* Aplikasi Kesehatan */}
          <div className="flex flex-col items-center">
            <Image src="/images/iconapp/kesehatan.svg" alt="Aplikasi Kesehatan" width={130} height={130} className="mb-2" priority />
            <p className="text-sm font-medium">Aplikasi Kesehatan</p>
          </div>

          {/* Aplikasi E-Commerce */}
          <div className="flex flex-col items-center">
            <Image src="/images/iconapp/commerce.svg" alt="Aplikasi E-Commerce" width={130} height={130} className="mb-2" priority />
            <p className="text-sm font-medium">Aplikasi E-Commerce</p>
          </div>

          {/* Aplikasi Edukasi */}
          <div className="flex flex-col items-center">
            <Image src="/images/iconapp/edukasi.svg" alt="Aplikasi Edukasi" width={130} height={130} className="mb-2" priority />
            <p className="text-sm font-medium">Aplikasi Edukasi</p>
          </div>

          {/* Aplikasi Travel */}
          <div className="flex flex-col items-center">
            <Image src="/images/iconapp/travel.svg" alt="Aplikasi Travel" width={130} height={130} className="mb-2" priority />
            <p className="text-sm font-medium">Aplikasi Travel</p>
          </div>

          {/* Aplikasi Produktif */}
          <div className="flex flex-col items-center">
            <Image src="/images/iconapp/produktiv.svg" alt="Aplikasi Produktif" width={130} height={130} className="mb-2" priority />
            <p className="text-sm font-medium">Aplikasi Produktif</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default InfoApp;
