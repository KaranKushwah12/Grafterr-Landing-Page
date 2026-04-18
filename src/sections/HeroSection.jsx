import React from "react";
import GradientText from "../components/ui/GradientText";
import GradientButton from "../components/ui/GradientButton";
import Skeleton from "../components/ui/Skeleton";

const HeroSection = ({ data, loading }) => {
  const sectionStyle = {
    padding: "var(--spacing-section)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "60vh",
    justifyContent: "center",
  };

  if (loading) {
    return (
      <section className="container" style={sectionStyle}>
        <Skeleton width="60%" height="60px" style={{ marginBottom: "20px" }} />
        <Skeleton width="40%" height="60px" style={{ marginBottom: "30px" }} />
        <Skeleton width="50%" height="20px" style={{ marginBottom: "10px" }} />
        <Skeleton width="45%" height="20px" style={{ marginBottom: "40px" }} />
        <Skeleton width="150px" height="48px" borderRadius="24px" />
      </section>
    );
  }

  return (
    <section className="container" style={sectionStyle}>
      {/* Decorative shapes can be rendered here absolutely positioned based on data.decorativeShapes */}

      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "800",
          lineHeight: "1.1",
          marginBottom: "20px",
          whiteSpace: "pre-line",
        }}
      >
        {data.headlinePrefix}
        <GradientText text={data.headlineGradient} />
      </h1>

      <p
        style={{
          color: "var(--color-text-muted)",
          fontSize: "1.125rem",
          maxWidth: "600px",
          margin: "0 auto 30px",
        }}
      >
        {data.subheadline}
      </p>

      <GradientButton>{data.CTA}</GradientButton>
    </section>
  );
};

export default HeroSection;
