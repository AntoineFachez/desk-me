import React from "react";
import { faTrain } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./travel-app.css";

// var Amadeus = require("amadeus");
// var amadeus = new Amadeus({
//   clientId: process.env.REACT_APP_AMADEUS_CLIENT_ID,
//   clientSecret: process.env.REACT_APP_AMADEUS_CLIENT_SECRET,
// });

export default function TravelByTrain() {
  return (
    <Draggable>
      <div className="travel-app">
        <div>
          <FontAwesomeIcon className="train" icon={faTrain} />
        </div>
      </div>
    </Draggable>
  );
}
