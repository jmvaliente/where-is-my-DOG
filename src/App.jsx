import Map, { Marker, Popup } from "react-map-gl/maplibre";
import { useRef, useState, useCallback } from "react";
import Panel from "./components/Panel/Panel";
import Card from "./components/Card/Card";

const markers = [
  {
    name: "Dog",
    longitude: -3.7905054,
    latitude: 40.2867324,
    type: "Dog",
    role: "Owner",
    imageUrl:
      "https://vivirconunpodenco.files.wordpress.com/2017/12/dscn4897.jpg?w=256&h=256&crop=1",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dacia Sandero",
    longitude: -3.6905054,
    latitude: 40.4867324,
    type: "Car",
    role: "Owner",
    imageUrl:
      "https://images.tagesschau.de/image/5b479805-877c-4756-918f-6dd65a4386bc/AAABiYdmUVQ/AAABibBxyuw/1x1-256/dacia-sandero-100.jpg",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];

function App() {
  const mapRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupCoordinates, setPopupCoordinates] = useState([0, 0]);
  const MAPSTYLE = `https://api.maptiler.com/maps/streets/style.json?key=${
    import.meta.env.VITE_MAPTILER_KEY
  }`;

  const onSelectMarker = useCallback(({ longitude, latitude }) => {
    mapRef.current?.flyTo({ center: [longitude, latitude], duration: 3000 });
  }, []);

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={{
          latitude: 40.2867324,
          longitude: -3.7905054,
          zoom: 16,
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
        <Panel
          mapRef={mapRef}
          markers={markers}
          onSelectMarker={onSelectMarker}
        />
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
