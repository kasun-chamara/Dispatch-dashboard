import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ height = 575 }) => (
  <div style={{ width: '100%', height }}>
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A sample marker.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default Map;