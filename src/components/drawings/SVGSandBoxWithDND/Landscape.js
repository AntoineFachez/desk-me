import React, { useEffect, useState } from "react";

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sun from "./Sun";
import LargeCloud from "./LargeCloud";
import SmallCloud from "./SmallCloud";
import MiddleCloud from "./MiddleCloud";

import "./sandbox.css";
import Sky from "./Sky";

const SVGSandbox = () => {
  var today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // const hour = today.getHours();
  const hour = 12;
  // const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const rSun = "40";
  const cxSun = "20";
  const cySun = "240";
  const rxLarge = "60";
  const ryLarge = "10";
  const rxMiddle = "70";
  const ryMiddle = "66";
  const rxSmall = "15";
  const rySmall = "10";
  // console.log(hour * 20);
  const skyStyle = {
    backgroundImage: "linear-gradient(rgb(117, 65, 236), rgb(194, 246, 243))",
  };

  return (
    <div>
      {/* <Sky className="sky" /> */}
      <svg className="viewbox" style={skyStyle}>
        <g className="">
          <Sky className="" />
          <Sun cxSun={cxSun} cySun={cySun} rSun={rSun} />
          <MiddleCloud rxMiddle={rxMiddle} ryMiddle={ryMiddle} />
          <polyline className="polyline2" points="0,300 95 160 200,300" />
          <LargeCloud rxLarge={rxLarge} ryLarge={ryLarge} />
          <polyline className="polyline1" points="-40,300 25 200 90,300" />
          <polyline className="polyline3" points="40,300 150 190 230,300" />
          <SmallCloud rxSmall={rxSmall} rySmall={rySmall} />
          <polyline className="polyline4" points="60,300 220 240 320,300" />
        </g>
      </svg>
      <li>Hello from SVGSandbox</li>
    </div>
  );
};
export default SVGSandbox;
