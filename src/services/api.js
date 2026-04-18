import content from "../data/content.json";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchHeroContent = async () => {
  await delay(1200); // Simulate 1000-1500ms delay
  // Uncomment to simulate random error
  // if (Math.random() > 0.8) throw new Error("Failed to load hero content");
  return content.hero;
};

export const fetchFeaturesContent = async () => {
  await delay(1500);
  // if (Math.random() > 0.8) throw new Error("Failed to load features content");
  return {
    features: content.featuresSection,
    carouselConfig: content.carousel,
  };
};
