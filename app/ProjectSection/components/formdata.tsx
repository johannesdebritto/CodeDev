"use client";
import React, { useState } from "react";

interface FormData {
  nama: string;
  email: string;
  noHp: string;
  judul: string;
  deskripsi: string;
  deadline: string;
}

interface ProjectFormProps {
  onSubmitForm: (event: React.FormEvent, data: FormData) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmitForm }) => {
  const [formData, setFormData] = useState<FormData>({
    nama: "",
    email: "",
    noHp: "",
    judul: "",
    deskripsi: "",
    deadline: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    onSubmitForm(e, formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-2xl space-y-4 text-black">
      <h2 className="text-2xl font-bold text-center mb-4">Formulir Proyek</h2>

      <div>
        <label className="block mb-1 font-medium text-left">Nama Lengkap</label>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          placeholder="Masukkan nama lengkap Anda"
          className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-left">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Contoh: email@domain.com"
          className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-left">No. HP</label>
        <input
          type="tel"
          name="noHp"
          value={formData.noHp}
          onChange={handleChange}
          placeholder="Contoh: 08xxxxxxxx"
          className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-left">Nama Proyek / Judul Singkat</label>
        <input
          type="text"
          name="judul"
          value={formData.judul}
          onChange={handleChange}
          placeholder="Contoh: Website Portofolio"
          className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-left">Deskripsi Kebutuhan</label>
        <textarea
          name="deskripsi"
          value={formData.deskripsi}
          onChange={handleChange}
          placeholder="Jelaskan kebutuhan atau fitur yang diinginkan"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-left">Deadline / Target Waktu</label>
        <input
          type="text"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          placeholder="Contoh: 30 Juni 2025"
          className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:scale-[1.02] transition-transform">
        Lanjutkan
      </button>
    </form>
  );
};

export default ProjectForm;
