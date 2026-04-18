import React from "react";

const GradientButton = ({ children, onClick }) => {
  const style = {
    background: "var(--gradient-btn)",
    color: "white",
    padding: "12px 32px",
    borderRadius: "24px",
    border: "none",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "20px",
  };
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default GradientButton;
