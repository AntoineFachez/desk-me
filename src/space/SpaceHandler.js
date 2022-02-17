import React, { useEffect, useState } from "react";
import GoogleMaps from "./GoogleMaps";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function SpaceHandler() {
  const [latUser, setLatUser] = useState([]);
  const [longUser, setLongUser] = useState([]);
  const [position, setPosition] = useState([]);
  const [locationUser, setLocationUser] = useState("Hamburg");
  const [error, setError] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatUser(position.coords.latitude);
      setLongUser(position.coords.longitude);
      setPosition(position);
      //   const shortLat = Number(position.coords.latitude.slice(0, 6));
    });
  }, [latUser, longUser, error]);
  // console.log(position);
  // console.log(latUser);
  // console.log(longUser);

  return (
    <div>
      <li>
        your are here: {latUser}, {longUser}°
      </li>

      <GoogleMaps
        // latUser={latUser}
        // longUser={longUser}
        position={position}
        style={{ height: "10rem" }}
      />
      {/* <h1>SpaceHandler</h1> */}
    </div>
  );
  //   <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
  //     {/* <YourComponent /> */}
  //   </Wrapper>;
}

export default SpaceHandler;
