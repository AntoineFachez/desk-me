import React from "react";

export default function Info() {
  const tutorialLink =
    "https://medium.com/sonny-sangha/how-to-make-a-weather-app-with-react-js-47f2a9eaf054";
  const codeLink = "no";
  return (
    <div className="section-header">
      <h1 className="sub-app-header">OpenWeather App</h1>
      <p className="devMessage">
        hello from BuildWeatherApp @ /learningReact/BuildWeatherApp
      </p>
      <h1>Build WeatherApp Tutorial</h1>
      <h4>
        <a href={tutorialLink} className="href">
          Tutorial
        </a>
      </h4>
      <li>
        <a href={codeLink}>No separate link for code {codeLink} </a>
      </li>
      <div className="container-left">
        involves:
        <li>useEffect</li>
        <li>Different API Calls</li>
        <li>Refresh Window Button</li>
        <li>Dynamic Call by MyLocation or Search</li>
        <li>
          <a href="https://openweathermap.org/current">Openweather API</a>
        </li>
        <a href="https://developer.mozilla.org/de/docs/Web/API/Geolocation_API">
          MDN, geolocation-Objekt
        </a>
        <li>
          <a href="https://medium.com/sonny-sangha/how-to-make-a-weather-app-with-react-js-47f2a9eaf054">
            Tutorial by Priyanshu Saraf
          </a>
        </li>
        <li>
          <a href="      https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/">
            Tutorial by Nishant Kumar
          </a>
        </li>
        <li>
          <a href="https://www.digitalocean.com/community/tutorials/css-cropping-images-object-fit">
            Image Object-fit, how to crop img
          </a>
        </li>
      </div>
      <div className="container-right">
        <p>Next needs:</p>
        <li>MyLocation Button pulls on second click</li>
        <li>Implement Unsplash Picture</li>
        <li>
          <a href="https://dev.to/chandelieraxel/why-you-should-cancel-your-api-calls-in-react-410l">
            Why you should cancel your API calls in React ?{" "}
          </a>
        </li>
        <p>
          notes: this css makes the div grow arund the picture: .fill display:
          flex; justify-content: center; align-items: center; overflow: hidden
          .fill img flex-shrink: 0; min-width: 100%; min-height: 100%
        </p>
      </div>
    </div>
  );
}
