import React, { useState } from 'react';
import './App.css'; // Import the generated CSS file

function App() {
  const [locationDetails, setLocationDetails] = useState("Click on the 'Get Location' Button");

  const getLocation = () => {
    // Add your location retrieval logic here
    setLocationDetails('Location details will be displayed here.');
  };

  return (
    <div className="container">
      <img src="https://i.postimg.cc/8PPRxPwc/location.png" alt="Location Icon" />
      <div id="location-details">{locationDetails}</div>
      <button id="get-location" onClick={getLocation}>
        Get Location
      </button>
    </div>
  );
}

export default App;
