import type { Metadata } from "next";
import "@/app/globals.css"; // Gunakan alias untuk impor global CSS
import Navbar from "@/app/Components/Navbar"; // Gunakan alias untuk impor Navbar
import Footer from "@/app/Components/Footer"; // Gunakan alias untuk impor Footer
import FloatingButtons from "@/app/Components/FloatingButtons"; // Gunakan alias untuk FloatingButtons

export const metadata: Metadata = {
  title: "CodeDev",
  description: "Freelance Website",
  icons: {
    icon: "/images/logo/logo.ico", // Path ke favicon
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
