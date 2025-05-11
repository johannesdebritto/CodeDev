// app/page.tsx
import HeroSection from "./HomePage/HeroSection/HeroSection";
import AboutSection from "./HomePage/AboutSection";
import LayananSection from "./HomePage/LayananSection";
import PortofolioSection from "./HomePage/PortofolioSection";

export const metadata = {
  title: "CodeDev Indonesia",
  description: "Selamat datang di situs resmi Nama Bisnis Anda. Kami menawarkan layanan terbaik dalam bidang [layanan].",
  keywords: "layanan, portofolio, bisnis, jasa, solusi",
  authors: [{ name: "Nama Bisnis Anda" }],
  openGraph: {
    title: "CodeDev Indonesia",
    description: "Lihat layanan dan portofolio kami yang profesional dan terpercaya.",
    type: "website",
  },
  icons: {
    icon: "/images/logo/logo.ico",
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
