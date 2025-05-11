// app/page.tsx
import HeroSection from "./HomePage/HeroSection/HeroSection";
import AboutSection from "./HomePage/AboutSection";
import LayananSection from "./HomePage/LayananSection";
import PortofolioSection from "./HomePage/PortofolioSection";

export const metadata = {
  title: "Codedev Indonesia | Jasa Pembuatan Website Murah Colomadu",
  description: "Codedev Indonesia melayani jasa pembuatan website murah, cepat, dan terpercaya untuk bisnis di Colomadu dan sekitarnya.",
  keywords: "jasa pembuatan website Colomadu, website murah Colomadu, jasa web Colomadu, buat website bisnis, jasa website terpercaya",
  authors: [{ name: "Codedev Indonesia" }],
  openGraph: {
    title: "Codedev Indonesia | Jasa Website Colomadu Terpercaya",
    description: "Lihat layanan dan portofolio profesional kami dalam pembuatan website untuk bisnis di Colomadu.",
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
