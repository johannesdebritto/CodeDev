"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const projects = [
  { id: 1, title: 'Porto1', category: 'Website', description: 'Website porto1', image: '/images/icondekstop/bgungu.png' },
  { id: 2, title: 'Porto2', category: 'Website', description: 'Website porto2', image: '/images/icondekstop/bgungu.png' },
  { id: 3, title: 'Porto3', category: 'Android', description: 'Website porto3', image: '/images/icondekstop/bgungu.png' },
  { id: 4, title: 'Porto4', category: 'UX/UI', description: 'UX/UI Design porto4', image: '/images/icondekstop/bgungu.png' },
];

const categories = ['Semua Project', 'Website', 'Android', 'UX/UI'];

const PortofolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua Project');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'Semua Project'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategorySelect = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category);
    setDropdownOpen(false); // Close dropdown after selecting
  };

  return (
    <section
      id="portfolio"
      className="bg-white max-w-7xl mx-auto px-4 py-12 pt-24"
      style={{ scrollMarginTop: '6rem' }}
    >
      {/* Header */}
      <div className="mb-1">
  <h2 className="text-2xl font-bold text-gray-800 text-center w-full">
    PROYEK YANG CODE<span className="text-blue-600">DEV</span> PERNAH KERJAKAN
  </h2>
</div>

{/* Tombol Filter - Dipisahkan */}
<div className="flex justify-end mb-6">
  <button
    onClick={toggleDropdown}
    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none"
  >
     <Image
        src="/images/icon/filter.svg"
        alt="Filter Icon"
        width={24}  // 6 Tailwind units (w-6)
        height={24} // 6 Tailwind units (h-6)
        className="w-6 h-6"
      />
  </button>
  {dropdownOpen && (
    <ul
      className="absolute right-4 mt-2 w-48 rounded-lg shadow-lg border border-gray-300 z-10 bg-white"
    >
      {categories.map((category) => (
        <li
          key={category}
          className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
            selectedCategory === category ? 'bg-gray-200 font-semibold' : ''
          }`}
          onClick={() => handleCategorySelect(category)}
          style={{
            color: '#000',
          }}
        >
          {category}
        </li>
      ))}
    </ul>
  )}
</div>


      {/* Grid Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg shadow-md flex flex-col items-start w-full max-w-xs mx-auto"
          >
            {/* Gambar Proyek */}
            <Image
              src={project.image}
              alt={project.title}
              width={400} // Width sesuai ukuran gambar
              height={128} // Height sesuai ukuran h-32 (8 Tailwind units)
              className="w-full h-32 object-cover rounded-t-lg"
            />

            {/* Project Details */}
            <div className="px-4 py-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full mb-4">
                {project.category}
              </span>
              <p className="text-gray-600 text-sm mb-3 mt-2">
                {project.description}
              </p>
              {/* Button */}
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 px-3 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span className="relative text-white">Lihat Studi Case</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Button untuk melihat lebih banyak proyek */}
      <div className="mt-8 text-center">
        <button className="transition-transform transform hover:scale-105">
          <a
            href="#_"
            className="relative px-5 py-3 overflow-hidden group text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-transform transform hover:scale-105 ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Lihat Project Lainnya</span>
          </a>
        </button>
      </div>
    </section>
  );
};

export default PortofolioPage;