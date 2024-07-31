import React, { useState } from 'react';
import '../styles/UserPreferences.css';

const UserPreferences = ({ savePreferences }) => {
  const [preferences, setPreferences] = useState({
    alertType: 'daily',
    temperatureUnit: 'Celsius',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    savePreferences(preferences);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Preferences</h2>
      <label>
        Alert Type:
        <select name="alertType" value={preferences.alertType} onChange={handleChange}>
          <option value="daily">Daily Summary</option>
          <option value="severe">Severe Weather</option>
        </select>
      </label>
      <label>
        Temperature Unit:
        <select name="temperatureUnit" value={preferences.temperatureUnit} onChange={handleChange}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </label>
      <button type="submit">Save Preferences</button>
    </form>
  );
};

export default UserPreferences;
