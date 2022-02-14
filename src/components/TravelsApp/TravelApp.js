import React from "react";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./travel-app.css";

export default function TravelApp() {
  return (
    <Draggable>
      <div>
        {" "}
        <FontAwesomeIcon className="plane" icon={faPlane} />
      </div>
    </Draggable>
  );
}
