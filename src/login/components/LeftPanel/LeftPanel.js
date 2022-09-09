import React from "react";
import LoginForm from "./LoginForm";
import logo from "./logo.png"

// The left panel's logic is largely housed within the LoginForm.js component,
// this is where we hosue most of the styling.

const textStyle = {
  position: "fixed",
  fontSize: "2vh",
  color: "#748281",
  top: "37vh",
  left: "8vw",
};

const LeftPanel = () => {
  return (
    <div> 
      <img
          src={logo}
          alt=""
          style={{
            position: "fixed",
            top: "0vh",
            left: "6vw",
            width: "25vw",
          }}
        ></img>
      <div className="Login-text" style={textStyle}>
        Next Generation Crime Analytics and Prediction
      </div>
      <LoginForm />
    </div>
  );
};

export default LeftPanel;
