// app/ProjectSection/page.tsx
import React from "react";
import ProjectCard from "./components/projectcard";

const ProjectPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="p-8 text-center w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-white mb-8">Buat Proyek Anda di sini</h1>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <ProjectCard type="web" />
          <ProjectCard type="app" />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
