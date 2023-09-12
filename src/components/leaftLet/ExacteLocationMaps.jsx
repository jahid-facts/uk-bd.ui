import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import osm from "./OsmProvider";

function ExacteLocationMaps() {
  const initialMarkerPosition = [51.505, -0.09];
  const [mapCenter, setMapCenter] = useState(initialMarkerPosition);
  const [actionLog, setActionLog] = useState([]);

  // Function to log the map's center whenever it changes
  useEffect(() => {
    setActionLog((prevLog) => [
      ...prevLog,
      `Map center: Lat ${mapCenter[0]}, Lng ${mapCenter[1]}`,
    ]);
  }, [mapCenter]);

  return ( 
    <div className="App">
      <MapContainer 
        center={initialMarkerPosition}
        zoom={13}
        style={{ height: "400px", width: "100%", position:'relative' }}
      >
       <TileLayer
          attribution={osm.maptiler.attribution}
          url={osm.maptiler.url}
        />

        {/* Marker */}
        <Marker position={initialMarkerPosition} interactive={false}>
          <Popup>
            Marker Position: <br />
            Latitude: {initialMarkerPosition[0]} <br />
            Longitude: {initialMarkerPosition[1]}
          </Popup>
        </Marker>

        {/* Map Event Listener */}
        <MapEventListener setMapCenter={setMapCenter} />
      </MapContainer>
      
      {/* Display the continuously updated map center */}
      <div>
        <h2>Map Center:</h2>
        <p>Latitude: {mapCenter[0]}</p>
        <p>Longitude: {mapCenter[1]}</p>
      </div>

      {/* Action Log */}
      <div>
        <h2>Action Log</h2>
        <ul>
          {actionLog.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MapEventListener({ setMapCenter }) {
  const map = useMapEvents({
    move: () => {
      const center = map.getCenter();
      setMapCenter([center.lat, center.lng]);
    },
  });

  return null;
}

export default ExacteLocationMaps;
