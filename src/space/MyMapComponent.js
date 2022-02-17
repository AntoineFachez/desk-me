import { useEffect, useRef, useState } from "react";

import Searcher from "./Searcher";

const MyMapComponent = ({ position }) => {
  //   console.log(+position.coords.latitude);
  //   console.log(+position.coords.longitude);
  const lat = +position.coords.latitude;
  const lng = +position.coords.longitude;
  const ref = useRef(null);
  const [map, setMap] = useState();
  const [center, setCenter] = useState({
    lat: lat, //+position.coords.latitude,
    lng: lng, //+position.coords.logitude,
  });

  /**
   * Because google.maps.Map requires an Element as a constructor parameter,
   * useRef is needed to maintain a mutable object
   * that will persist for the lifetime of the component.
   */
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  // Add marker
  useEffect(() => {
    if (map) {
      map.setOptions({ center, zoom: 3 });
    }
    new window.google.maps.Marker({
      position: center,
      map,
    });
  }, [map, center]);

  return (
    <>
      {/* <Searcher setCenter={setCenter} /> */}
      <div style={{ height: "20px" }} />
      <div ref={ref} style={{ width: "100vw", height: "30vh" }} />
    </>
  );
};

export default MyMapComponent;
