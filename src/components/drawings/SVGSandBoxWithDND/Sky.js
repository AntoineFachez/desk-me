import React, { useEffect, useState } from "react";
import { ItemTypes } from "./utils/items";
import { useDrag } from "react-dnd";
import "./sandbox.css";

const skyStyle = {
  fill: "rgb(255,255,255)",
};

const Sun = ({ rSun }) => {
  const [cxSun, setCxSun] = useState(0);
  const [cySun, setCySun] = useState(0);
  //   console.log(cxSun, cySun);
  var today = new Date();
  const seconds = today.getSeconds();
  const mls = today.getMilliseconds();
  const hour = today.getHours();

  // const newCxSun = () => setCxSun(seconds * 2);

  function changeDirection() {
    if (hour < 12) {
      setCxSun(240);
    } else {
      setCxSun(10);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      var today = new Date();
      const seconds = today.getSeconds() / 2;
      setCxSun((cxSun) => seconds * 0.5);
      setCySun((cySun) => seconds * 1.1);
      //   console.log(seconds);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <svg className="sky" style={skyStyle} width="20rem" height="10rem" />;
};
// setInterval(Sun, 1000);

// export default Sun;
export default Sun;
