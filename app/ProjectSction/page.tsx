// app/ProjectSection/page.tsx
import React from "react";
import ProjectCard from "./components/projectcard";

const ProjectPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Buat Proyek Anda di sini</h1>
        <div className="flex justify-around">
          {/* Card Web */}
          <ProjectCard type="web" />
          {/* Card Aplikasi */}
          <ProjectCard type="app" />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
