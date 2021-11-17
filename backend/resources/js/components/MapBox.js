import * as React from 'react';
import {useState} from 'react';
import {render} from 'react-dom';
import MapGL, {
  Popup,
} from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoicnlvdGFybzIwIiwiYSI6ImNrdml2cmhtZ2Jld2kyd3Q5ZHFudzhrcGQifQ.2zjaqGum-QE9BzQYuE4zCg'

export default function MapBox() {
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3,
    bearing: 0,
    pitch: 0
  });
  const [popupInfo, setPopupInfo] = useState(null);
  const[city,setCity] = useState({name:'東京ドーム',longitude:'139.751919',latitude:'    35.7056232'});


  return (
    <>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        mapboxApiAccessToken={TOKEN}
      >
      </MapGL>
    </>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}
