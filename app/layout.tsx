import { Suspense } from "react";
import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import FloatingButtons from "@/app/Components/FloatingButtons";
import Loading from "@/app/loading"; // Import loading component

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
  return (
    <html lang="en">
      <head>
        {/* Preload Images */}
        <link rel="preload" href="/images/logo/logo.svg" as="image" />
        <link rel="preload" href="/images/logo_wa.svg" as="image" />
      </head>

      <body className="antialiased">
        {/* Navbar */}
        <Navbar />

        {/* Suspense untuk memuat loading sementara */}
        <Suspense fallback={<Loading />}>
          {/* Konten Halaman */}
          <main>{children}</main>
        </Suspense>

        {/* Footer */}
        <Footer />

        {/* Floating Buttons */}
        <FloatingButtons />
      </body>
    </html>
  );
}
