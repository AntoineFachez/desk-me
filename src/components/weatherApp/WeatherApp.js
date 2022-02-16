import "./App.css";
import React, { useEffect, useState } from "react";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Weather from "./components/weather";
import Info from "./Info";
import Forecast from "./components/forecast";
import Shop from "../../pages/Shop";
import { DndProvider } from "react-dnd";
// import Draggable from "react-draggable";

export default function App() {
  const [latUser, setLatUser] = useState([]);
  const [longUser, setLongUser] = useState([]);
  const [locationUser, setLocationUser] = useState();
  const [locations, setLocations] = useState("london");
  const [travelInfo, setTravelInfo] = useState([]);

  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const cnt = 5;
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  const OPENWEATHER_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const OPENWEATHER_URL = process.env.REACT_APP_OPENWEATHER_URL;
  const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
  const UNSPLASH_URL = process.env.REACT_APP_UNSPLASH_URL;
  const AMADEUS_KEY = process.env.REACT_APP_AMADEUS_KEY;
  const AMADEUS_URL = process.env.REACT_APP_AMADEUS_URL;

  // console.log(
  //   `${UNSPLASH_URL}/search/photos?query=${locations}&client_id=${UNSPLASH_KEY}`
  // );
  // console.log(UNSPLASH_URL);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatUser(position.coords.latitude);
      setLongUser(position.coords.longitude);
    });
  }, [latUser, longUser, error]);

  useEffect(() => {
    ifClickedSearch();
    setMyLocation();
  }, []);

  const randomPic = Math.floor(Math.random() * 10);

  function setMyLocation() {
    setLocations(locationUser);

    fetch(
      `${OPENWEATHER_URL}/weather?q=${locations}&APPID=${OPENWEATHER_KEY}&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setWeatherData(object);
        // console.log(setWeatherData);
      })
      .catch((error) => console.log(error));

    fetch(
      `${UNSPLASH_URL}/search/photos?query=${locations}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("You made a mistake");
        }
      })
      .then((data) => {
        // console.log(data);
        setPhotos(data?.results[randomPic]?.urls?.raw);
      })
      .catch((error) => console.log(error));
  }

  function ifClickedSearch() {
    fetch(
      `${OPENWEATHER_URL}/weather?q=${locations}&APPID=${OPENWEATHER_KEY}&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setWeatherData(object);
      })
      .catch((error) => console.log(error));

    fetch(
      `${UNSPLASH_URL}/search/photos?query=${locations}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("You made a mistake");
        }
      })
      .then((data) => {
        // console.log(data);
        setPhotos(data?.results[0]?.urls?.raw);
      })
      .catch((error) => console.log(error));
  }

  function getForecast() {
    fetch(
      `${OPENWEATHER_URL}/forecast/daily?lat=${latUser}&lon=${longUser}&cnt=${cnt}&appid=${OPENWEATHER_KEY}&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setForecastData(object.list);
      })
      .catch((error) => console.log(error));

    function travelInfo() {
      fetch(
        `${AMADEUS_URL}/forecast/daily?lat=${latUser}&lon=${longUser}&cnt=${cnt}&appid=${AMADEUS_KEY}&units=metric`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            if (res.status === 404) {
              return alert("Oops, there seems to be an error!(wrong location)");
            }
            alert("Oops, there seems to be an error!");
            throw new Error("You have an error");
          }
        })
        .then((object) => {
          setForecastData(object.list);
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    // <Draggable>

    <div className="weatherComponent">
      <li>{error}</li>
      {typeof weatherData.main != "undefined" ? (
        <Weather
          weatherData={weatherData}
          photos={photos}
          setMyLocation={setMyLocation}
          ifClickedSearch={ifClickedSearch}
          setLocations={setLocations}
          locations={locations}
          getForecast={getForecast}
          forecastData={forecastData}
        />
      ) : (
        <div>there was an error: {error}</div>
      )}
    </div>
  );
}

/* <li className="dev">geoLoc Object</li>{" "}
      <p className="sub-title">
        You are @ {latUser}, {longUser}{" "}
      </p> */
