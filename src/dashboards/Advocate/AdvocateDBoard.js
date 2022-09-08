import React, { useState } from "react";
import DBoardTemplate from "../DBoardTemplate";
import { Grid, Menu, Segment, Icon } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

import Submission from "./content/Submission";
import Overview from "./content/Overview";

// Advocate Dashboard relys on state. There are currently only 2 states, the
// Overview tab and the New Submissions tab. Both tabs are imported from the
// Advocate_content folder. Main issue to be aware for this component
// is the importance of state.

const AdvocateDBoard = () => {
  const { user } = useAuth0();

  const [activeItem, setActiveItem] = useState("overview");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  const userEmail = user.email;

  // import content logic in here
  const renderSwitch = (state) => {
    switch (state) {
      case "overview":
        return (
          <Overview activeItem={activeItem} setActiveItem={setActiveItem} />
        );
      case "new":
        return <Submission />;
      default:
        return "Error Occured, contact system admin";
    }
  };

  const content = (
    <Grid style={{ height: "100vh" }}>
      <Grid.Column width={4} style={{ backgroundColor: "rgb(250, 251, 252)" }}>
        <Menu fluid vertical tabular color="blue">
          <div className="center item">
            <h3>Advocate</h3>
            {userEmail}
          </div>
          <Menu.Item
            name="overview"
            active={activeItem === "overview"}
            onClick={handleItemClick}
          >
            Overview <Icon name="clone" />
          </Menu.Item>
          <Menu.Item
            name="new"
            active={activeItem === "new"}
            onClick={handleItemClick}
          >
            New Submissions <Icon name="plus" />
          </Menu.Item>
        </Menu>
      </Grid.Column>

      <Grid.Column stretched width={12}>
        <Segment>{renderSwitch(activeItem)}</Segment>
      </Grid.Column>
    </Grid>
  );

  return (
    <div>
      <DBoardTemplate content={content} />
    </div>
  );
};

export default AdvocateDBoard;
