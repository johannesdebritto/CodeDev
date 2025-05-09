"use client"; // LoadingWrapper sebagai client component

import { useEffect, useState } from "react";
import LoadingAnimation from "@/app/Components/LoadingAnimation"; // Pastikan path benar

const LoadingWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulasi loading selama 2 detik

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <LoadingAnimation />
      </div>
    );
  }

  return <>{children}</>; // Ketika loading selesai, render children
};

export default LoadingWrapper;
