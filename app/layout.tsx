import { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import FloatingButtons from "@/app/Components/FloatingButtons";
import LoadingWrapper from "@/app/Components/LoadingWrapper"; // Import LoadingWrapper

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
        <link rel="preload" href="/images/logo/logo.svg" as="image" />
        <link rel="preload" href="/images/logo_wa.svg" as="image" />
      </head>

      <body className="antialiased">
        {/* Bungkus konten dengan LoadingWrapper */}
        <LoadingWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
        </LoadingWrapper>
      </body>
    </html>
  );
}
