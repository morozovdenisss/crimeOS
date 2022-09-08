import React from "react";
import advocateOverview from "./advocateOverview.png";

// Advocate Overview page.

const Overview = (props) => {
  // Extract the current month (0 based) and return the months string
  // based on key-month map.
  const date = new Date();
  const month_num = date.getMonth();
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  const month = months[month_num];

  const handleItemClick = (e) => {
    props.setActiveItem("new");
  };

  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        fontSize: "160%",
        textAlign: "center",
        backgroundImage: `url(${advocateOverview})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderStyle: "outset",
      }}
    >
      <text style={{ position: "relative", top: "70%" }}>
        {" "}
        It is currently {month}, have you submitted your data for this month
        yet?
      </text>
      <button
        onClick={handleItemClick}
        style={{
          position: "absolute",
          top: "65%",
          left: "34%",
          backgroundColor: "rgb(7,71,166)",
          color: "white",
          borderRadius: "6px",
          padding: "1.5vh",
        }}
      >
        Submit Now
      </button>
    </div>
  );
};

export default Overview;
