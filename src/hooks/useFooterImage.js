"use client";
import { useState, useEffect } from "react";

export default function useFooterImage(footerImage) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    if (mediaQuery.matches) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % footerImage.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [footerImage.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    if (!mediaQuery.matches) return;

    if (!isHovering) {
      setCurrentImage(0);
      return;
    }

    if (currentImage >= footerImage.length - 1) return;

    const timeout = setTimeout(() => {
      setCurrentImage((prev) => prev + 1);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isHovering, currentImage, footerImage.length]);

  return {
    currentImage,
    setCurrentImage,
    isHovering,
    setIsHovering,
  };
}
