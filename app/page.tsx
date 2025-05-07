import Head from "next/head";
import HeroSection from "./HomePage/HeroSection/HeroSection";
import AboutSection from "./HomePage/AboutSection";
import LayananSection from "./HomePage/LayananSection";
import PortofolioSection from "./HomePage/PortofolioSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda | Nama Bisnis Anda</title>
        <meta name="description" content="Selamat datang di situs resmi Nama Bisnis Anda. Kami menawarkan layanan terbaik dalam bidang [layanan]." />
        <meta name="keywords" content="layanan, portofolio, bisnis, jasa, solusi" />
        <meta name="author" content="Nama Bisnis Anda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Beranda | Nama Bisnis Anda" />
        <meta property="og:description" content="Lihat layanan dan portofolio kami yang profesional dan terpercaya." />
        <meta property="og:type" content="website" />
        {/* Tambahkan favicon jika perlu */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Layanan Section */}
        <LayananSection />

        {/* Portofolio Section */}
        <PortofolioSection />
      </main>
    </>
  );
}

// Jika ingin memakai SSR:
export async function getServerSideProps() {
  // Bisa ambil data di sini kalau perlu
  return {
    props: {}, // data bisa dilempar ke komponen lewat props
  };
}
