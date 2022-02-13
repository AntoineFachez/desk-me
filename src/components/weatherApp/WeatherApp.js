import "./App.css";
import React, { useEffect, useState } from "react";

import Weather from "./components/weather";
import Info from "./Info";
import Forecast from "./components/forecast";
import Shop from "../../pages/Shop";

export default function App() {
  const [latUser, setLatUser] = useState([]);
  const [longUser, setLongUser] = useState([]);
  const [locationUser, setLocationUser] = useState("Hamburg");
  const [locations, setLocations] = useState("london");

  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([]);
  const cnt = 5;
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  const OPENWEATHER_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatUser(position.coords.latitude);
      setLongUser(position.coords.longitude);
    });
  }, [latUser, longUser, error]);

  useEffect(() => {
    ifClickedSearch();
    myLocation();
  }, []);

  function myLocation() {
    setLocations(locationUser);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=${OPENWEATHER_KEY}&units=metric`
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
      `https://api.unsplash.com/search/photos?query=${locations}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("You made a mistake");
        }
      })
      .then((data) => {
        console.log(data);
        setPhotos(data?.results[0]?.urls?.raw);
      })
      .catch((error) => console.log(error));
  }

  function ifClickedSearch() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=${OPENWEATHER_KEY}&units=metric`
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
      `https://api.unsplash.com/search/photos?query=${locations}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("You made a mistake");
        }
      })
      .then((data) => {
        console.log(data);
        setPhotos(data?.results[0]?.urls?.raw);
      })
      .catch((error) => console.log(error));
  }

  function getForecast() {
    fetch(
      // `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=${OPENWEATHER_KEY}&units=metric`
      `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${latUser}&lon=${longUser}&cnt=${cnt}&appid=${OPENWEATHER_KEY}&units=metric`
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
        // console.log(object);
        // console.log(object.list.array.object.clouds);
        console.log(object.list[1].clouds);
        // console.log(object.json.object.weather);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="noizeMe-section">
      <div className="forecast">
        {forecastData.map((list) => (
          <div className="flex-forecast">
            <li>clouds {list.clouds}</li>
            {/* <li>day feels like {list.feels_like.day}</li> */}
            {/* <li>night feels like {list.feels_like.night}</li> */}
            <li>day temp {list.temp.day}</li>
            <li>night temp {list.temp.night}</li>
          </div>
        ))}
      </div>
      {/* <Info /> */}
      {/* <li className="dev">geoLoc Object</li>{" "}
      <p className="sub-title">
        You are @ {latUser}, {longUser}{" "}
      </p> */}
      <div className="weatherComponent">
        {typeof weatherData.main != "undefined" ? (
          <Weather weatherData={weatherData} photos={photos} />
        ) : (
          <div>{error}</div>
        )}

        <button className="location_searcher" onClick={myLocation}>
          My Location
        </button>
        <div className="search">
          <input
            type="text"
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
            placeholder="Enter location"
            className="location_input"
          />
          <button className="location_searcher" onClick={ifClickedSearch}>
            Search
          </button>
          <button className="location_searcher" onClick={getForecast}>
            Forecast
          </button>
          <li>{error}</li>
        </div>
      </div>
    </div>
  );
}
