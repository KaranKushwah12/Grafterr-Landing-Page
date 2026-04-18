import React from "react";
import { useContent } from "./hooks/useContent";
import HeroSection from "./sections/HeroSection";
import FeaturesSection from "./sections/FeaturesSection";
import "./styles/global.css";

function App() {
  const { heroData, featuresData, loading, error, retry } = useContent();

  if (error) {
    return (
      <div className="error-container">
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button className="retry-btn" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <main>
      <HeroSection data={heroData} loading={loading} />
      <FeaturesSection data={featuresData} loading={loading} />
    </main>
  );
}

export default App;
