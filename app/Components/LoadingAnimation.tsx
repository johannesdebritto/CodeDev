"use client"; // Tambahkan ini di bagian atas

import { useEffect, useState } from "react";
import Lottie from "react-lottie";

const LoadingAnimation: React.FC = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const res = await fetch("/animation/loading.json");
      const data = await res.json();
      setAnimationData(data);
    };

    loadAnimation();
  }, []);

  if (!animationData) return null;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={200} width={200} />;
};

export default LoadingAnimation;
