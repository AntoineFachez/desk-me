import React from "react";
import "./sandbox.css";
import Draggable from "react-draggable";
const SVGSandbox = () => {
  return (
    <div className="canvas">
      Hello from SVGSandbox
      <svg className="viewbox" viewBox="0 0 300 300">
        <g fill="">
          <Draggable>
            <circle className="sun" cx="240" cy="110" r="20"></circle>
          </Draggable>
          <Draggable>
            <ellipse
              className="cloud-middle"
              cx="80"
              cy="65"
              rx="30"
              ry="15"
              fill="white"
            />
          </Draggable>
          <polyline className="polyline2" points="0,300 95 160 200,300" />
          <Draggable>
            <ellipse
              className="cloud-large"
              cx="-10"
              cy="210"
              rx="60"
              ry="15"
              fill="white"
            />
          </Draggable>
          <polyline className="polyline1" points="-40,300 25 200 90,300" />
          <polyline className="polyline3" points="40,300 150 190 230,300" />
          <Draggable>
            <ellipse
              className="cloud-small"
              cx="180"
              cy="140"
              rx="20"
              ry="16"
              fill="white"
            />
          </Draggable>
          <polyline className="polyline4" points="60,300 220 240 320,300" />
        </g>
        {/* <polyline className="polyline2" points="0,100 50,25 50,75 100,0" /> */}
        {/* <polyline
          points="100,100 150,25 150,75 200,0"
          fill="none"
          stroke="black"
        /> */}
      </svg>
    </div>
  );
};
export default SVGSandbox;
