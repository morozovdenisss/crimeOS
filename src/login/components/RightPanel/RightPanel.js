import React from "react";
import extracy from "./extracy_logo.png";
import lawfoundation from "./lawfoundation.png";
import { Grid } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

// Noteworthy are the imports from Font Awesome and Semantic UI React. Those dependencies were added using
// npm (Node Package Manager). Not much logic is here as it is mostly for styling

const headingTextStyle = {
  color: "white",
  marginBottom: "3vh",
  marginRight: "0vw",
};

const iconStyle = {
  width: "10vw",
  color: "white",
};

const RightPanel = () => {
  return (
    <div>
      <Grid>
        <img
          src={extracy}
          alt=""
          style={{
            position: "relative",
            top: "20vh",
            left: "6vw",
            width: "55vw",
          }}
        ></img>

        <Grid.Row
          style={{
            top: "45vh",
            left: "7vw",
          }}
        >
          <Grid columns={4}>
            <Grid.Row>
              <Grid.Column style={headingTextStyle}>
                <Grid.Row style={headingTextStyle}>
                  <h5>Address:</h5>
                </Grid.Row>
                <Grid.Row style={headingTextStyle}>605 Robson St,</Grid.Row>
                <Grid.Row style={headingTextStyle}>Vancouver, </Grid.Row>
                <Grid.Row style={headingTextStyle}>BC, V6B 5J3</Grid.Row>
              </Grid.Column>
              <Grid.Column>
                <Grid.Row style={headingTextStyle}>
                  <h5>Tel:</h5>
                </Grid.Row>
                <Grid.Row style={headingTextStyle}>+1 (604) 688 2337</Grid.Row>
              </Grid.Column>
              <Grid.Column>
                <Grid.Row style={headingTextStyle}>
                  <h5>Email:</h5>
                </Grid.Row>
                <Grid.Row style={headingTextStyle}>
                  <a
                    href="mailto:info@lawfoundationbc.org"
                    style={{ color: "white" }}
                  >
                    info@lawfoundationbc.org
                  </a>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column style={{ marginRight: "0vw" }}>
                <Grid>
                  <Grid.Column width="8">
                    <Grid.Row style={{ marginBottom: "2vh" }}>
                      <a href="https://www.lawfoundationbc.org/">
                        <FontAwesomeIcon
                          icon={faGlobeAmericas}
                          size="2x"
                          style={iconStyle}
                        />
                      </a>
                    </Grid.Row>
                    <Grid.Row style={{ marginBottom: "2vh" }}>
                      <a href="https://www.google.com/maps/place/Law+Foundation+of+BC/@49.2809619,-123.1211218,17z/data=!3m1!4b1!4m5!3m4!1s0x5486717e52450a97:0x1f9f7128d4cacfa5!8m2!3d49.2809535!4d-123.1189402">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          size="2x"
                          style={iconStyle}
                        />
                      </a>
                    </Grid.Row>
                  </Grid.Column>
                  <Grid.Column>
                    <Grid.Row style={{ marginBottom: "2vh" }}>
                      <a href="https://ca.linkedin.com/company/law-foundation-of-bc">
                        <i className="big linkedin icon" style={iconStyle}></i>
                      </a>
                    </Grid.Row>
                    <Grid.Row style={{ marginBottom: "2vh" }}>
                      <a href="https://twitter.com/lawfoundationbc?lang=en">
                        <i className="big twitter icon" style={iconStyle}></i>
                      </a>
                    </Grid.Row>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>

        <img
          src={lawfoundation}
          alt=""
          style={{
            position: "relative",
            top: "30vh",
            left: "45.5vw",
            height: "15vh",
          }}
        ></img>
      </Grid>
    </div>
  );
};

export default RightPanel;
