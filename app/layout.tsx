// app/layout.tsx
import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import FloatingButtons from "@/app/Components/FloatingButtons";

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
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
