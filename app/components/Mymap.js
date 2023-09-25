
import {Map, NavigationControl, Marker, GeolocateControl} from 'react-map-gl'
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
const MyMap = () => {
  return (
    <>
      <Map
        mapLib={import("mapbox-gl")}
        style={{ height: "25rem" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        initialViewState={{
          latitude: 55.621951,
          longitude: 12.079253,
          zoom: 16,
        }}>
        <NavigationControl/>
        <Marker latitude={55.621951} longitude={12.079253} color="lightblue"/>
        <GeolocateControl 
trackUserLocation={true} 
PostionOptions={{enableHighAccuracy:true}}
showAccuracyCircle={true}
auto
/>
      </Map>
    </>
  );
};

export default MyMap;
