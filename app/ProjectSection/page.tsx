"use client";

import React, { useState } from "react";
import ProjectCard from "./components/projectcard";
import ProjectForm from "./components/formdata";
import WebPackages from "./components/webpackets";
import AplikasiPackages from "./components/apliaksipackage";

const ProjectPage: React.FC = () => {
  const [step, setStep] = useState<"form" | "choose" | "web" | "app">("form");

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStep("choose");
  };

  const handleSelectType = (type: "web" | "app") => {
    setStep(type);
  };

  const handleBack = () => {
    if (step === "web" || step === "app") {
      setStep("choose");
    } else {
      setStep("form");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl text-center pt-16">
        {" "}
        {/* Tambah padding top di sini */}
        <h1 className="text-3xl font-bold text-white mb-8">Buat Proyek Anda di sini</h1>
        {/* Step 1: Form */}
        {step === "form" && (
          <div className="flex justify-center">
            <ProjectForm handleFormSubmit={handleFormSubmit} />
          </div>
        )}
        {/* Step 2: Pilih web / app */}
        {step === "choose" && (
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <ProjectCard type="web" onSelect={() => handleSelectType("web")} />
              <ProjectCard type="app" onSelect={() => handleSelectType("app")} />
            </div>
            <button onClick={handleBack} className="mt-8 bg-white text-purple-600 px-5 py-2 rounded-full hover:bg-purple-100 transition">
              Kembali
            </button>
          </div>
        )}
        {/* Step 3: Tampilkan layanan sesuai pilihan */}
        {step === "web" && (
          <div>
            <WebPackages />
            <div className="flex justify-center mt-8">
              <button onClick={handleBack} className="bg-white text-purple-600 px-5 py-2 rounded-full hover:bg-purple-100 transition">
                Kembali
              </button>
            </div>
          </div>
        )}
        {step === "app" && (
          <div>
            <AplikasiPackages />
            <div className="flex justify-center mt-8">
              <button onClick={handleBack} className="bg-white text-purple-600 px-5 py-2 rounded-full hover:bg-purple-100 transition">
                Kembali
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
