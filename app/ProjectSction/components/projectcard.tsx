// components/ProjectCard.tsx
import React, { useState } from "react";

interface ProjectCardProps {
  type: "web" | "app";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ type }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-72 text-center hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{type === "web" ? "Layanan Website" : "Layanan Aplikasi"}</h3>
      <p className="text-gray-600 mb-4">{type === "web" ? "Membangun website yang responsif dan profesional" : "Membuat aplikasi mobile untuk berbagai platform"}</p>
      <button onClick={handleSelect} className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
        {isSelected ? "Dibatalkan" : "Pilih"}
      </button>

      {isSelected && (
        <div className="mt-4">
          {/* Form data diri atau langkah berikutnya */}
          <form>
            <input type="text" placeholder="Nama Lengkap" className="border p-2 rounded mb-2 w-full" />
            <input type="email" placeholder="Email" className="border p-2 rounded mb-2 w-full" />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
              Kirim
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
