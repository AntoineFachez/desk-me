import React, { useEffect, useState } from "react";
import { ItemTypes } from "./utils/items";
import { useDrag } from "react-dnd";

const Sun = ({ rSun }) => {
  const [cxSun, setCxSun] = useState(0);
  const [cySun, setCySun] = useState(0);
  const [distance, setDistance] = useState(400);
  // console.log(cxSun, cySun);
  var today = new Date();

  const hour = today.getHours();

  // const newCxSun = () => setCxSun(seconds * 2);

  // function changeDirection() {
  //   if (hour < 12) {
  //     setCxSun(240);
  //   } else {
  //     setCxSun(10);
  //   }
  // }
  function resetSun(cxSun) {
    if (cxSun > 300) {
      setCxSun(50);
    }
  }
  console.log(cxSun);
  useEffect((cxSun) => {
    const interval = setInterval(() => {
      var today = new Date();
      const hours = today.getHours();

      setCxSun((prevSec) => prevSec + 0.11);
      setCySun((prevSec) => prevSec + 0.12);
    }, 30);
    resetSun();
    return () => clearInterval(interval);
  }, []);

  return <circle className="sun" r={rSun} cx={cxSun} cy={cySun}></circle>;
};
// setInterval(Sun, 1000);

// export default Sun;
export default Sun;
