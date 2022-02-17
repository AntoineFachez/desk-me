import React from "react";
import ReactDOM from "react-dom";

function LargeCloud(rxLarge, ryLarge) {
  return (
    <ellipse className="cloud-large" rx={rxLarge} ry={ryLarge} fill="white" />
  );
}

export default LargeCloud;

// ReactDOM.render(<Sun />, document.body);
