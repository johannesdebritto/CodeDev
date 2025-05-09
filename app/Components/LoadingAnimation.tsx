"use client";

import { useEffect, useState } from "react";
import Lottie, { Options } from "react-lottie";

const LoadingAnimation: React.FC = () => {
  const [animationData, setAnimationData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const res = await fetch("/animation/loading.json");
      const data: Record<string, unknown> = await res.json();
      setAnimationData(data);
    };

    loadAnimation();
  }, []);

  if (!animationData) return null;

  const defaultOptions: Options = {
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
