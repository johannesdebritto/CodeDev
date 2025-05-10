// components/ProjectForm.tsx
"use client";
import React from "react";

interface ProjectFormProps {
  handleFormSubmit: (event: React.FormEvent) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit} className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-2xl space-y-4 text-black">
      <h2 className="text-2xl font-bold text-center mb-4">Formulir Proyek</h2>

      <div>
        <label className="block mb-1 font-medium">Nama Lengkap</label>
        <input type="text" placeholder="Masukkan nama lengkap Anda" className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Email / No. HP</label>
        <input type="text" placeholder="Contoh: email@domain.com / 08xxxxxxxx" className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Nama Proyek / Judul Singkat</label>
        <input type="text" placeholder="Contoh: Website Portofolio" className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Deskripsi Kebutuhan</label>
        <textarea placeholder="Jelaskan kebutuhan atau fitur yang diinginkan" rows={4} className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Deadline / Target Waktu</label>
        <input type="text" placeholder="Contoh: 30 Juni 2025" className="w-full p-3 border border-gray-300 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-purple-500" />
      </div>

      <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:scale-[1.02] transition-transform">
        Lanjutkan
      </button>
    </form>
  );
};

export default ProjectForm;
