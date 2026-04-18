import React from "react";
import { useCarousel } from "../../hooks/useCarousel";
import ProductCard from "./ProductCard";

const Carousel = ({ items, config }) => {
  const {
    currentIndex,
    itemsPerView,
    nextSlide,
    prevSlide,
    isAtStart,
    isAtEnd,
    handlers,
  } = useCarousel(items.length, config);

  const slideWidth = 100 / itemsPerView;

  const trackStyle = {
    display: "flex",
    transform: `translateX(-${currentIndex * slideWidth}%)`,
    transition: `transform var(--transition-speed) ease-in-out`,
    width: `${(items.length / itemsPerView) * 100}%`,
  };

  const arrowStyle = {
    background: "white",
    border: "1px solid #E5E7EB",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  };

  return (
    <div style={{ position: "relative", width: "100%", padding: "20px 0" }}>
      <div style={{ overflow: "hidden", width: "100%" }} {...handlers}>
        <div style={trackStyle}>
          {items.map((item) => (
            <div
              key={item.id}
              style={{ width: `${100 / items.length}%`, padding: "0 10px" }}
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>

      {config?.showArrows && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "30px",
          }}
        >
          <button
            style={{ ...arrowStyle, opacity: isAtStart ? 0.5 : 1 }}
            onClick={prevSlide}
            disabled={isAtStart}
          >
            ←
          </button>
          <button
            style={{ ...arrowStyle, opacity: isAtEnd ? 0.5 : 1 }}
            onClick={nextSlide}
            disabled={isAtEnd}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
