import React from 'react';
import '../styles/WeatherMusic.css';

const WeatherMusic = ({ weatherData }) => {
  const getPlaylist = (weather) => {
    if (weather === 'rainy') {
      return 'Calm Rainy Day Playlist';
    } else if (weather === 'sunny') {
      return 'Upbeat Sunny Day Playlist';
    }
    // Add more conditions as needed
  };

  return (
    <div className="weather-music">
      <h2>Music Playlist</h2>
      <p>{getPlaylist(weatherData.condition)}</p>
    </div>
  );
};

export default WeatherMusic;
