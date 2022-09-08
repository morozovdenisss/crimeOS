import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Dashboard logout button Line 14 : localStorage.setItem("role", null) is where
// we are able to extract and implement role-based rules.

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => {
        logout();
        localStorage.setItem("role", null);
      }}
      id="qsLoginBtn"
      variant="primary"
      className="ui button"
      style={{ backgroundColor: "rgb(245, 246, 247)" }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
