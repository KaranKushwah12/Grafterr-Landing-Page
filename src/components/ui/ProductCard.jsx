import React from "react";

const ProductCard = ({ product }) => {
  const cardStyle = {
    background: "var(--color-bg-card)",
    borderRadius: "var(--card-border-radius)",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    height: "400px",
    textAlign: "left",
    margin: "0 10px",
  };

  const imgContainerStyle = {
    flexGrow: 1,
    marginTop: "20px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
        {product.name}
      </h3>
      <div style={imgContainerStyle}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x200?text=" + product.name;
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
