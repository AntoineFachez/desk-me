import React from "react";
import moment from "moment";

function TimeHandler() {
  const kw = moment().add(7, "days").add(1, "months").week();
  const month = new Date().getMonth();
  const jetzt = new Date().toISOString().split("T")[0];

  return (
    <div>
      {/* <h1>TimeHandler</h1>  */}
      <li>today is: {month}</li>
      {/* <li>{now}</li> */}
      <li>w/ in 1 month and 7 days: {kw}</li>
    </div>
  );
}

export default TimeHandler;
