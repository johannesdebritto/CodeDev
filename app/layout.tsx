import { useEffect, useState } from "react";
import type { Metadata } from "next";
import "@/app/globals.css"; // Gunakan alias untuk impor global CSS
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import FloatingButtons from "@/app/Components/FloatingButtons";
import LoadingAnimation from "@/app/Components/LoadingAnimation"; // Panggil komponen LoadingAnimation

export const metadata: Metadata = {
  title: "CodeDev",
  description: "Freelance Website",
  icons: {
    icon: "/images/logo/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi proses loading (misal fetch data)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading false setelah 2 detik (ganti dengan fetch data asli)
    }, 1500); // Ganti dengan waktu yang sesuai atau event fetch data asli

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Preload Images */}
        <link rel="preload" href="/images/logo/logo.svg" as="image" />
        <link rel="preload" href="/images/logo_wa.svg" as="image" />
      </head>

      <body className="antialiased">
        {/* Tampilkan animasi loading jika sedang dalam proses loading */}
        {loading && (
          <div className="loading-container">
            <LoadingAnimation />
          </div>
        )}

        {/* Navbar */}
        <Navbar />

        {/* Konten Halaman */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* Floating Buttons */}
        <FloatingButtons />
      </body>
    </html>
  );
}
