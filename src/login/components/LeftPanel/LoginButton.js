import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

// all the styling and the logic for the login button
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      id="qsLoginBtn"
      variant="primary"
      className="circular ui button"
      type="submit"
      style={{
        backgroundColor: "#00282A",
        color: "white",
        fontSize: "2.5vh",
        width: "14vw",
        height: "6vh",
        marginTop: "6vh",
        marginLeft: "4vh",
      }}
    >
      Login
    </button>
  );
};

export default LoginButton;
