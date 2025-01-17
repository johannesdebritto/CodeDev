"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const FormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: '',
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams(formData).toString();
    const whatsappUrl = `https://wa.me/1234567890?text=${query}`; // Ganti dengan nomor WhatsApp Anda
    window.open(whatsappUrl, '_blank');
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-10">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl">
        {/* Left Side (Image) */}
        <div className="w-full lg:w-1/2 bg-gray-200 p-0">
        <Image
        src="/images/icondekstop/pesan.svg"
        alt="Image"
        layout="fill" // Untuk memastikan gambar memenuhi container
        objectFit="cover" // Mirip dengan "object-cover" pada Tailwind
      />
        </div>

        {/* Right Side (Form) */}
        <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12 flex items-center justify-center">
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-black mb-6 text-center">Pemesanan Jasa Software</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Nama */}
                <div>
                  <label htmlFor="name" className="block text-black text-sm font-semibold mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan Nama"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-black text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  />
                </div>

                {/* Paket */}
                <div>
                  <label htmlFor="package" className="block text-black text-sm font-semibold mb-2"> Paket Layanan</label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  >
                    <option value="">Pilih Paket</option>
                    <option value="Paket A">Paket A</option>
                    <option value="Paket B">Paket B</option>
                    <option value="Paket C">Paket C</option>
                  </select>
                </div>

                {/* Paket Harga */}
                <div>
                  <label htmlFor="package" className="block text-black text-sm font-semibold mb-2">Kategori Paket</label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  >
                    <option value="">Pilih Paket Harga</option>
                    <option value="Paket A">Paket A</option>
                    <option value="Paket B">Paket B</option>
                    <option value="Paket C">Paket C</option>
                  </select>
                </div>

                {/* Telepon */}
                <div>
                  <label htmlFor="phone" className="block text-black text-sm font-semibold mb-2">Harga Paket</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Masukkan Nomor Telepon"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    required
                  />
                </div>
              </div>

              {/* Pesan */}
              <div>
                <label htmlFor="message" className="block text-black text-sm font-semibold mb-2">Pesan atau Permintaan Tambahan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                />
              </div>

              {/* Kirim */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Kirim ke WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
