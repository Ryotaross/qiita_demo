import React from 'react';
import { useState,useRef, useCallback } from 'react';
import ReactMapGL from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoicnlvdGFybzIwIiwiYSI6ImNrdml2cmhtZ2Jld2kyd3Q5ZHFudzhrcGQifQ.2zjaqGum-QE9BzQYuE4zCg'


function MapBox() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default MapBox;