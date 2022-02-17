import React from "react";
import "./styles.css";
import { List } from "@material-ui/core";
import moment from "moment";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Forecast({ forecastData }) {
  const WeatherIcon = styled.div`
    color: whitesmoke;
  `;

  // const { forecast } = props;

  // console.log("Forecast", forecastData[0]);

  const results = forecastData.map((object, index) => {
    let weatherIcon = null;

    if (object.description === "Thunderstorm") {
      weatherIcon = <FontAwesomeIcon icon={faBolt} />;
    } else if (object.description === "Drizzle") {
      weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (object.description === "Rain") {
      weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (object.description === "Snow") {
      weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (object.description === "Clear") {
      weatherIcon = <FontAwesomeIcon icon={faSun} />;
    } else if (object.description === "Clouds") {
      weatherIcon = <FontAwesomeIcon icon={faCloud} />;
    } else {
      weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }

    return (
      <div key={index} className="forecast">
        <div className="flex-forecast">
          <p>{moment(object.dt).format("ddd")}</p>

          <WeatherIcon style={{ fontSize: 25, marginTop: 4 }}>
            {weatherIcon}
          </WeatherIcon>

          <p className="temp">{object.temp.day} &deg;C</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <List aria-label="forecast data">{results}</List>
    </div>
  );
}
