import React from "react";
import WeatherApp from "../components/weatherApp/WeatherApp";
import TravelApp from "../components/TravelsApp/TravelApp";
import Landscape from "../components/drawings/SVGSandbox/Landscape";

import "./section.css";
import Sandbox from "../components/drawings/d3Sandbox/Sandbox";

export default function section() {
  return (
    <div className="container">
      <section className="one">
        <h1>Travel Widget</h1>
        <WeatherApp />
        <TravelApp />
      </section>
      <section className="two">
        <h1>Second Section</h1>
        <Landscape />
      </section>
      <section className="three">
        <h1>Third Section</h1>
        <Sandbox />
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
