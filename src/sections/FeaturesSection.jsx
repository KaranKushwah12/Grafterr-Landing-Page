import React from "react";
import Carousel from "../components/ui/Carousel";
import Skeleton from "../components/ui/Skeleton";

const FeaturesSection = ({ data, loading }) => {
  const sectionStyle = {
    padding: "var(--spacing-section)",
    backgroundColor: "var(--color-bg-main)",
  };

  if (loading) {
    return (
      <section className="container" style={sectionStyle}>
        <Skeleton width="40%" height="40px" style={{ margin: "0 auto 20px" }} />
        <Skeleton width="60%" height="20px" style={{ margin: "0 auto 40px" }} />
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          <Skeleton width="30%" height="400px" />
          <Skeleton width="30%" height="400px" />
          <Skeleton width="30%" height="400px" />
        </div>
      </section>
    );
  }

  const { features, carouselConfig } = data;

  return (
    <section className="container" style={sectionStyle}>
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "700",
          marginBottom: "16px",
          whiteSpace: "pre-line",
        }}
      >
        {features.title}
        <span style={{ color: "var(--color-grafterr-gray)" }}>
          {features.titleAccent}
        </span>
        {features.titleSuffix}
      </h2>

      <p
        style={{
          color: "var(--color-text-muted)",
          fontSize: "1rem",
          maxWidth: "700px",
          margin: "0 auto 48px",
        }}
      >
        {features.subtitle}
      </p>

      <div
        style={{
          width: "40px",
          height: "2px",
          background: "#E5E7EB",
          margin: "0 auto 40px",
        }}
      ></div>

      <Carousel items={features.products} config={carouselConfig} />
    </section>
  );
};

export default FeaturesSection;
