import React from "react";
import ReactDOM from "react-dom";

function MiddleCloud(rxMiddle, ryMiddle) {
  return (
    <ellipse
      // className="cloud-middle"
      className="svgbg"
      rx={rxMiddle}
      ry={ryMiddle}
      fill="white"
    />
  );
}

export default MiddleCloud;

// ReactDOM.render(<Sun />, document.body);
