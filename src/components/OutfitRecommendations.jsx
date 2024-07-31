import React from 'react';
import '../styles/OutfitRecommendations.css';

const OutfitRecommendations = ({ weatherData }) => {
  const getOutfit = (temp) => {
    if (temp < 10) {
      return 'Wear a heavy jacket and warm clothes';
    } else if (temp < 20) {
      return 'Wear a light jacket and long sleeves';
    } else {
      return 'Wear a t-shirt and shorts';
    }
  };

  return (
    <div className="outfit-recommendations">
      <h2>Outfit Recommendations</h2>
      <p>{getOutfit(weatherData.temp)}</p>
    </div>
  );
};

export default OutfitRecommendations;
