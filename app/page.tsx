// app/page.tsx
import HeroSection from "./HomePage/HeroSection/HeroSection";
import AboutSection from "./HomePage/AboutSection";
import LayananSection from "./HomePage/LayananSection";
import PortofolioSection from "./HomePage/PortofolioSection";

export const metadata = {
  title: "Beranda | Nama Bisnis Anda",
  description: "Selamat datang di situs resmi Nama Bisnis Anda. Kami menawarkan layanan terbaik dalam bidang [layanan].",
  keywords: "layanan, portofolio, bisnis, jasa, solusi",
  authors: [{ name: "Nama Bisnis Anda" }],
  openGraph: {
    title: "Beranda | Nama Bisnis Anda",
    description: "Lihat layanan dan portofolio kami yang profesional dan terpercaya.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <LayananSection />
      <PortofolioSection />
    </main>
  );
}
