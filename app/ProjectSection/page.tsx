"use client";

import React, { useState } from "react";
import ProjectCard from "./components/projectcard";
import ProjectForm from "./components/formdata";
import WebPackages from "./components/webpackets";
import AplikasiPackages from "./components/apliaksipackage";

const ProjectPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const handleBack = () => {
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-12 flex flex-col items-center">
      <div className="text-center w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-8">Buat Proyek Anda di sini</h1>

        {!formSubmitted ? (
          <ProjectForm handleFormSubmit={handleFormSubmit} />
        ) : (
          <>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <ProjectCard type="web" />
              <ProjectCard type="app" />
            </div>

            <div className="flex justify-center mt-8">
              <button onClick={handleBack} className="bg-white text-purple-600 px-5 py-2 rounded-full hover:bg-purple-100 transition">
                Kembali
              </button>
            </div>

            <div className="mt-16 w-full">
              <WebPackages />
              <AplikasiPackages />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
