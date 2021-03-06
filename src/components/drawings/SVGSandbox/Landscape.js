import React, { useEffect, useState } from "react";
import "./sandbox.css";
import Draggable from "react-draggable";
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
import Rect from "./react-drag";

const SVGSandbox = () => {
  const rSun = 50;
  const rxLarge = "60";
  const ryLarge = "10";
  const rxMiddle = "30";
  const ryMiddle = "16";
  const rxSmall = "15";
  const rySmall = "10";

  // const handleDrag = (e) => console.log(e);
  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  };
  const handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
    console.log(x, y);
  };
  return (
    <div className="">
      <svg className="viewbox">
        <g fill="canvas">
          {/* <Draggable onDrag={this.handleDrag} {...dragHandlers}>
              <div className="box">
                <div>I track my deltas</div>
                <div>
                  x: {deltaPosition.x.toFixed(0)}, y:{" "}
                  {deltaPosition.y.toFixed(0)}
                </div>
              </div>
            </Draggable> */}
          <Draggable>
            <Sun r={rSun} onChange={pull_data} />
          </Draggable>
          <MiddleCloud rxMiddle={rxMiddle} ryMiddle={ryMiddle} />
          <polyline className="polyline2" points="0,300 95 160 200,300" />
          <LargeCloud rxLarge={rxLarge} ryLarge={ryLarge} />
          <polyline className="polyline1" points="-40,300 25 200 90,300" />
          <polyline className="polyline3" points="40,300 150 190 230,300" />
          <SmallCloud rxSmall={rxSmall} rySmall={rySmall} onDrag={pull_data} />
          <polyline className="polyline4" points="60,300 220 240 320,300" />
        </g>
      </svg>
      <li>Hello from SVGSandbox</li>
    </div>
  );
};
export default SVGSandbox;
