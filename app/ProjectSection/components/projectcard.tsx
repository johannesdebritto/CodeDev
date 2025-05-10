"use client";
import React from "react";
import { FaGlobe, FaMobileAlt } from "react-icons/fa";

interface ProjectCardProps {
  type: "web" | "app";
  onSelect: () => void; // Tambahkan handler
}

const ProjectCard: React.FC<ProjectCardProps> = ({ type, onSelect }) => {
  const title = type === "web" ? "Layanan Website" : "Layanan Aplikasi";
  const desc = type === "web" ? "Bangun website yang profesional & responsif." : "Ciptakan aplikasi mobile modern & cepat.";
  const Icon = type === "web" ? FaGlobe : FaMobileAlt;

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 w-72 text-center hover:scale-105 transition-transform duration-300 border border-gray-200">
      <div className="flex justify-center mb-4 text-purple-600 text-4xl">
        <Icon />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{desc}</p>
      <button
        onClick={onSelect} // Ganti scroll ke handler
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
      >
        Pilih
      </button>
    </div>
  );
};

export default ProjectCard;
