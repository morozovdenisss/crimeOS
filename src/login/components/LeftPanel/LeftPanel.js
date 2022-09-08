import React from "react";
import hello from "./hello.png";
import LoginForm from "./LoginForm";

// The left panel's logic is largely housed within the LoginForm.js component,
// this is where we hosue most of the styling.

const textStyle = {
  position: "relative",
  fontSize: "2vh",
  color: "#748281",
  top: "20vh",
  left: "4.5vw",
};

const helloStyle = {
  position: "relative",
  width: "20vw",
  top: "23vh",
  left: "4vw",
};

const LeftPanel = () => {
  return (
    <div>
      <div className="Login-text" style={textStyle}>
        Data Management Platform for Legal Services
      </div>
      <img className="Hello" src={hello} alt="" style={helloStyle} />
      <LoginForm />
    </div>
  );
};

export default LeftPanel;
