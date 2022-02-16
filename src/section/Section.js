import React from "react";
import WeatherApp from "../components/weatherApp/WeatherApp";
import TravelApp from "../components/TravelsApp/TravelApp";
import TravelByTrain from "../components/TravelsApp/travelByTrain";
import Landscape from "../components/drawings/SVGSandbox/Landscape";

import "./section.css";
import Sandbox from "../components/drawings/d3Sandbox/Sandbox";
import { DndProvider } from "react-dnd";
// import Draggable from "react-draggable";

export default function section() {
  return (
    <div className="container">
      <section className="one">
        <h1>Travel Widget</h1>

        <WeatherApp
          className="widget"
          style={{ position: "relative", zIndex: "1" }}
        />

        {/* <Draggable> */}
        <TravelApp />
        {/* </Draggable> */}

        <TravelByTrain />
      </section>
      <section className="two">
        <h1>the sky moves</h1>
        <Landscape />
      </section>
      <section className="three">
        <h1>Third Section</h1>
        {/***Not working because of DOM**** */}
        {/*          <WorldMap />        */}
        {/********************************* */}
      </section>
      <section className="four">
        <h1>Last Section</h1>
        <Sandbox />
      </section>
    </div>
  );
}
