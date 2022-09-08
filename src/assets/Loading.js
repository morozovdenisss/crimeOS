import React from "react";
import loading from "./loading.svg";

// Login for loading circle before authenication is complete.

const Loading = () => (
  <div
    className="spinner"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;
