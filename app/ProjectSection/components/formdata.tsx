// components/ProjectForm.tsx
"use client";
import React from "react";

interface ProjectFormProps {
  handleFormSubmit: (event: React.FormEvent) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit} className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-2xl space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Formulir Proyek</h2>
      <input type="text" placeholder="Nama Lengkap" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      <input type="text" placeholder="Email / No. HP" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      <input type="text" placeholder="Nama Proyek / Judul Singkat" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      <textarea placeholder="Deskripsi Kebutuhan" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      <input type="text" placeholder="Deadline / Target Waktu" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg hover:scale-[1.02] transition-transform">
        Lanjutkan
      </button>
    </form>
  );
};

export default ProjectForm;
