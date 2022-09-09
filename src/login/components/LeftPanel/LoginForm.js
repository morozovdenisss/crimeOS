import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "../../../dashboards/LogoutButton";

// Wrapper component for the LoginButton.js component
const AuthNav = () => {
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;

  const [role, setRole] = useState({});

  // this useEffect hook is where we are able to extract the role from app_metadata when a user
  // has been verified by auth0. We then receive the user role and redirect users accordingly
  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        })
          .then((accessToken) => {
            const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

            fetch(userDetailsByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }).then((metadataResponse) => {
              metadataResponse.json().then((result) => {
                setRole(result.app_metadata.role);
                localStorage.setItem("role", result.app_metadata.role);
                const roleString = String(role);
                if (roleString === "advocate") {
                  window.location.href = `${window.location.origin}/free`;
                }
                if (roleString === "a2j") {
                  window.location.href = `${window.location.origin}/admin`;
                }
              });
            });
          })
          .catch((e) => {
            console.log(e);
          });
      } catch (e) {
        console.log(e);
      }
    };
    if (user) {
      getUserMetadata();
    }
  }, [domain, getAccessTokenSilently, user, role]);

  return <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>;
};

const LoginForm = () => {
  return (
    <div>
      <form className="ui form" style={{ top: "28vh", left: "5vw" }}>
        <AuthNav />
      </form>
    </div>
  );
};

export default LoginForm;
