import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Preferences from './pages/Preferences';
import Alerts from './pages/Alerts';
import './styles/App.css';

const App = () => {
  const [preferences, setPreferences] = useState({
    alertType: 'daily',
    temperatureUnit: 'Celsius',
  });
  const [alerts, setAlerts] = useState([]);

  const savePreferences = (prefs) => {
    setPreferences(prefs);
    // Logic to set up alerts based on preferences
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preferences" element={<Preferences savePreferences={savePreferences} />} />
            <Route path="/alerts" element={<Alerts alerts={alerts} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
