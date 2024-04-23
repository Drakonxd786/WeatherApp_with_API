import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ weatherData }) => {
  // Set map center based on weather data (if available)
  const [mapCenter, setMapCenter] = useState(weatherData?.[0]?.coordinates || [0, 0]);
  const [zoomLevel, setZoomLevel] = useState(13); // Initial zoom level

  // Function to handle map click (optional)
  const handleMapClick = (e) => {
    console.log(e.latlng); // Example: Log clicked coordinates
  };

  return (
    <MapContainer center={mapCenter} zoom={zoomLevel} onClick={handleMapClick}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {weatherData && weatherData.map((data) => (
        <Marker key={data.city} position={data.coordinates}>
          <Popup>
            {data.city}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
