import React from "react";
import background from "./background.png";
import { Grid } from "semantic-ui-react";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

// The login page is a combination of a left and righthand side panels. The left panel contains all the logic for
// logging in (authenication), whereas the rightside panel is largely only for aesthetics. background.png is
// the background image for the entire login page.

const backgroundStyle = {
  display: "inline",
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const LoginPage = () => {
  return (
    <div style={backgroundStyle}>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column style={{ width: "35vw" }}>
            <LeftPanel />
          </Grid.Column>
          <Grid.Column>
            <RightPanel />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default LoginPage;
