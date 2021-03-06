import React from "react";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./travel-app.css";

// var Amadeus = require("amadeus");
// var amadeus = new Amadeus({
//   clientId: process.env.REACT_APP_AMADEUS_CLIENT_ID,
//   clientSecret: process.env.REACT_APP_AMADEUS_CLIENT_SECRET,
// });
export default function TravelApp() {
  return (
    <Draggable>
      <div className="trave-app">
        <div>
          <FontAwesomeIcon className="plane" icon={faPlane} />
        </div>
      </div>
    </Draggable>
  );
}
