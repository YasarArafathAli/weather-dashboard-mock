import React from 'react';
import '../styles/WeatherDisplay.css';

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="weather-display">
    <img src={weatherData.condition.icon}/>
      <h2>{weatherData.condition.text}</h2>
      <p>Temperature: {weatherData.temp_c}°C</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.wind_kph} km/h</p>
    </div>
  );
};

export default WeatherDisplay;
