import { useState, useEffect, useCallback } from "react";

export const useCarousel = (totalItems, config) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Handle responsive items per view
  useEffect(() => {
    if (!config) return;
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(config.mobile || 1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(config.tablet || 2);
      } else {
        setItemsPerView(config.desktop || 3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [config]);

  const maxIndex = Math.max(0, totalItems - itemsPerView);

  // Moves exactly ONE card to the right
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  // Moves exactly ONE card to the left
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // --- Touch Swipe Logic ---
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEndHandler = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return {
    currentIndex,
    itemsPerView,
    nextSlide,
    prevSlide,
    isAtStart: currentIndex === 0,
    isAtEnd: currentIndex >= maxIndex,
    handlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd: onTouchEndHandler,
    },
  };
};
