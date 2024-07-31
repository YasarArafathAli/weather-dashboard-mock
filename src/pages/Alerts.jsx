import React from 'react';
import WeatherAlerts from '../components/WeatherAlerts';

const Alerts = ({ alerts }) => {
  return (
    <div className="alerts">
      <WeatherAlerts alerts={alerts} />
    </div>
  );
};

export default Alerts;
