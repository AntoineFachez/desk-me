import React from "react";
import WeatherApp from "../components/weatherApp/WeatherApp";
import "./section.css";

export default function section() {
  return (
    <div className="container">
      <section className="one">
        <h1>First Section</h1>
        <WeatherApp />
      </section>
      <section className="two">
        <h1>Second Section</h1>
      </section>
      <section className="three">
        <h1>Third Section</h1>
      </section>
      <section className="four">
        <h1>Last Section</h1>
      </section>
    </div>
  );
}
