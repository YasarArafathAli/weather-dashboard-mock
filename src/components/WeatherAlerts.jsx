import React from 'react';
import '../styles/WeatherAlerts.css';

const WeatherAlerts = ({ alerts }) => {
  return (
    <div className="weather-alerts">
      <h2>Weather Alerts</h2>
      {alerts.map((alert, index) => (
        <div key={index}>
          <p>{alert.message}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherAlerts;
