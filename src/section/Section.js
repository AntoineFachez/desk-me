import React from "react";
import WeatherApp from "../components/weatherApp/WeatherApp";
import TravelApp from "../components/TravelsApp/TravelApp";
import TravelByTrain from "../components/TravelsApp/travelByTrain";
import Landscape from "../components/drawings/SVGSandBoxWithDND/Landscape";

import { Sandbox } from "../components/drawings/d3Sandbox/Sandbox";
import { DndProvider } from "react-dnd";
import "./section.css";
// import Draggable from "react-draggable";

export default function section() {
  return (
    <div className="container">
      <section className="two">
        <h1>tick</h1>
        <Landscape />
      </section>
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
      <section className="three">
        <h1>Third Section</h1>

        {/***Not working because of DOM**** */}
        {/*          <WorldMap />        */}
        {/********************************* */}
      </section>
      <section className="four">
        <h1>Last Section</h1>
      </section>
    </div>
  );
}
