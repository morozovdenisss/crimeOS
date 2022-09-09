import React from "react";
import LogoutButton from "./LogoutButton";

// The advocate and a2j dashboard both depend on this component as it the template.
// The main logic here is in the form of the logout button and the extracy logo on the
// top left.

const DBoardTemplate = (props) => {
  return (
    <div>
      <div className="ui borderless massive menu">
        <div className="header item">
          <img
            className="ui image"
            src={"https://i.ibb.co/g3zFbkQ/Frame-1000000819-1.png"}
            alt="team logo"
            style={{ width: "100px" }}
          />
        </div>
        <div className="right item">
          <LogoutButton />
        </div>
      </div>

      {props.content}
    </div>
  );
};

export default DBoardTemplate;
