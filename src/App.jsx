import Map, { Marker, Popup } from "react-map-gl/maplibre";
import { useState } from "react";

const Card = () => {
  return (
    <>
      <div class="block b-0 p-0 rounded-lg bg-white dark:bg-neutral-700">
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            class="rounded-t-lg"
            src="https://tecdn.b-cdn.net/img/new/slides/041.webp"
            alt=""
          />
        </div>
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Card title
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="text-base text-neutral-600 dark:text-neutral-200">
            <small class="text-neutral-500 dark:text-neutral-400">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

function App() {
  const [showPopup, setShowPopup] = useState(true);

  const MAPSTYLE = `https://api.maptiler.com/maps/streets/style.json?key=${
    import.meta.env.VITE_MAPTILER_KEY
  }`;

  return (
    <Map
      initialViewState={{
        latitude: 40.2867324,
        longitude: -3.7905054,
        zoom: 15,
        bearing: 80,
        pitch: 80,
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle={MAPSTYLE}
    >
      <Marker
        longitude={-3.7905054}
        latitude={40.2867324}
        anchor="bottom"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setShowPopup(true);
        }}
      />
      {showPopup && (
        <Popup
          longitude={-3.7905054}
          latitude={40.2867324}
          anchor="bottom"
          offset={60}
          padding={0}
          onClose={() => setShowPopup(false)}
        >
          <Card />
        </Popup>
      )}
    </Map>
  );
}

export default App;
