import { useState, useEffect, useCallback } from "react";
import { fetchHeroContent, fetchFeaturesContent } from "../services/api";

export const useContent = () => {
  const [heroData, setHeroData] = useState(null);
  const [featuresData, setFeaturesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [hero, features] = await Promise.all([
        fetchHeroContent(),
        fetchFeaturesContent(),
      ]);
      setHeroData(hero);
      setFeaturesData(features);
    } catch (err) {
      setError("Failed to load content. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { heroData, featuresData, loading, error, retry: loadData };
};
