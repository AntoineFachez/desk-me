import React from "react";
import "./styles.css";
import moment from "moment";
import { Button } from "semantic-ui-react";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { forecastData } from "../WeatherApp";
import Forecast from "./forecast";

export default function weather({
  weatherData,
  forecastData,
  photos,
  setMyLocation,
  ifClickedSearch,
  setLocations,
  locations,
  getForecast,
}) {
  const Menu = styled.div`
    color: whitesmoke;
  `;

  const refresh = () => {
    window.location.reload();
  };

  const clicked = () => {
    console.log("clicked");
  };
  let weatherIcon = null;

  if (weatherData.weather[0].main === "Thunderstorm") {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (weatherData.weather[0].main === "Drizzle") {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (weatherData.weather[0].main === "Rain") {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (weatherData.weather[0].main === "Snow") {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (weatherData.weather[0].main === "Clear") {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (weatherData.weather[0].main === "Clouds") {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else if (weatherData.weather[0].main === "Smog") {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  return (
    <div className="main">
      {/* <p>hello</p> */}
      <div className="overlay-container">
        <div className="">
          <Menu
            className="menu"
            style={
              {
                // fontSize: 45,
              }
            }
          >
            <div className="btn-close">
              <Button
                inverted
                color="blue"
                circular
                icon="refresh"
                onClick={refresh}
              />
            </div>
            <div className="weather">
              <div className="weather-icon">{weatherIcon}</div>
              <div className="loc-temp">
                {Math.trunc(weatherData.main.temp)} &deg;
              </div>
              <div className="weather-text">
                {/* {weatherData.weather[0].main} */}
              </div>
            </div>{" "}
            <div className="search">
              <FontAwesomeIcon
                icon={faSearch}
                className="search"
                onClick={ifClickedSearch}
              />
            </div>{" "}
            <FontAwesomeIcon
              icon={faLocationDot}
              className="location-dot"
              onClick={setMyLocation}
            />{" "}
          </Menu>
          <div className="sub-menu">
            <input
              className="location_input"
              type="text"
              value={locations}
              onChange={(e) => setLocations(e.target.value)}
              placeholder="enter location..."
            />
          </div>
        </div>
        <div className="text-layer">
          <button className="btn-forecast" onClick={getForecast}>
            forcast
          </button>
          <p className="day">
            {moment().format("dddd")}, <span>{moment().format("LL")}</span>
          </p>
          <p className="header-text">{weatherData.name}</p>
          <div className="flex">
            <div className="block-left">
              <p className="humidity">humidity:</p>
              <p className="sunrise-sunset">rise:</p>
              <p className="sunrise-sunset">set: </p>
            </div>
            <div className="flex">
              <div className="block-right">
                <p className="humidity">{weatherData.main.humidity} %</p>
                {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                  "en-IN"
                )}
                <p className="sunrise-sunset">
                  {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                    "en-IN"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Forecast forecastData={forecastData} />
      </div>
      {/* <div style={{ backgroundImage: `url(${photos})` }}></div> */}
      {/* <div
        style={{
          backgroundImage: `url(${photos})`,

          objectFit: "contain",
          objectPosition: "-80% -30%",
        }}
      ></div> */}
      <img
        className="img"
        src={photos}
        alt="img"
        style={{
          backgroundImage: `url(${photos})`,

          objectFit: "contain",
          objectPosition: "-80% -30%",
        }}
        // style={{ height: "0vh", objectFit: "scale-down" }}
      />
    </div>
  );
}
