import Map, { Marker, Popup } from "react-map-gl/maplibre";
import { useState } from "react";
import Panel from "./components/Panel/Panel";
import Card from "./components/Card/Card";

const markers = [
  { longitude: -3.7905054, latitude: 40.2867324, type: "Dog" },
  { longitude: -3.6905054, latitude: 40.4867324, type: "Car" },
];

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupCoordinates, setPopupCoordinates] = useState([0, 0]);
  const MAPSTYLE = `https://api.maptiler.com/maps/streets/style.json?key=${
    import.meta.env.VITE_MAPTILER_KEY
  }`;

  return (
    <>
      <Map
        initialViewState={{
          latitude: 40.2867324,
          longitude: -3.7905054,
          zoom: 12,
          bearing: 0,
          pitch: 60,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle={MAPSTYLE}
      >
        {markers.map((marker) => (
          <Marker
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupCoordinates([marker.longitude, marker.latitude]);
              setShowPopup(true);
            }}
          />
        ))}
        <Panel />
        {showPopup && (
          <Popup
            longitude={popupCoordinates[0]}
            latitude={popupCoordinates[1]}
            anchor="bottom"
            offset={60}
            onClose={() => setShowPopup(false)}
          >
            <Card />
          </Popup>
        )}
      </Map>
    </>
  );
}

export default App;
