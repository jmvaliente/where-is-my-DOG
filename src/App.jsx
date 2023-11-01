import Map, {Marker} from 'react-map-gl/maplibre';

function App() {

  const MAPSTYLE = `https://api.maptiler.com/maps/streets/style.json?key=${import.meta.env.VITE_MAPTILER_KEY}`

  return (
    <Map
      initialViewState={{
        latitude: 40.2867324,
        longitude: -3.7905054,
        zoom: 15,
        bearing: 80,
        pitch: 80
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle={MAPSTYLE}
    >
      <Marker longitude={-3.7905054} latitude={40.2867324} anchor="bottom" onClick={() => console.log('Click')} />
      </Map>
  );
}

export default App
