import React from 'react';
import UserPreferences from '../components/UserPreference';

const Preferences = ({ savePreferences }) => {
  return (
    <div className="preferences">
      <UserPreferences savePreferences={savePreferences} />
    </div>
  );
};

export default Preferences;
