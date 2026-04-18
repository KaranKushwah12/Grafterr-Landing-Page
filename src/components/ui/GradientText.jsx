import React from "react";

const GradientText = ({ text }) => {
  const style = {
    background: "var(--gradient-text)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };
  return <span style={style}>{text}</span>;
};

export default GradientText;
