// app/ProjectSection/page.tsx
"use client";

import React, { useState } from "react";
import ProjectCard from "./components/projectcard";
import ProjectForm from "./components/formdata";
const ProjectPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState<"web" | "app" | null>(null);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormSubmitted(true); // Menyembunyikan form dan menampilkan kartu
  };

  const handleCardSelect = (type: "web" | "app") => {
    setSelectedType(type); // Menyimpan jenis layanan yang dipilih
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="p-8 text-center w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-8">Buat Proyek Anda di sini</h1>

        {!formSubmitted ? (
          <ProjectForm handleFormSubmit={handleFormSubmit} />
        ) : (
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <ProjectCard type="web" />
            <ProjectCard type="app" />
          </div>
        )}

        {formSubmitted && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => {
                setFormSubmitted(false);
                setSelectedType(null);
              }}
              className="bg-white text-purple-600 px-5 py-2 rounded-full hover:bg-purple-100 transition"
            >
              Kembali ke Formulir
            </button>
          </div>
        )}

        {selectedType && (
          <div className="mt-8">
            <ProjectCard type={selectedType} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
