import HeroSection from "./HomePage/HeroSection/HeroSection";
import AboutSection from "./HomePage/AboutSection";
import LayananSection from "./HomePage/LayananSection";
import PortofolioSection from "./HomePage/PortofolioSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Layanan Section */}
      <LayananSection />

      {/* Portofolio Section */}
      <PortofolioSection />
    </>
  );
}
