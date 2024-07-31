import React, { useState, useEffect } from 'react';
import WeatherDisplay from '../components/Display';
import WeatherMusic from '../components/Music';
import OutfitRecommendations from '../components/OutfitRecommendations';
import axios from 'axios';


const Home = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
   

    fetchWeatherData();
    console.log(weatherData)
  }, []);

  const fetchWeatherData = async () => {
    const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=21acf134281749deb0d81843243107&q=hyderabad');
    setWeatherData(response.data.current);
  };

  if (!weatherData) return <p>Loading...</p>;

  return (
    <div className="home">
      <WeatherDisplay weatherData={weatherData} />
      <WeatherMusic weatherData={weatherData} />
      <OutfitRecommendations weatherData={weatherData} />
    </div>
  );
};

export default Home;
