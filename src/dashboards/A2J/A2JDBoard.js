import React, { useState } from "react";
import DBoardTemplate from "../DBoardTemplate";
import { Grid, Menu, Segment, Icon } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

import Submission from "./content/Submission";
import AdvocateList from "./content/AdvocateList";
import Visualization from "./content/Visualization";
import Overview from "./content/Overview";

// A2J Dashboard relys on state. There are currently only 4 states, the
// Overview tab, New Submissions tab, Visualizations tab, and Advocate List Tab. All tabs are
// imported from the A2J_content folder. Main issue to be aware for this component
// is the importance of state.

const A2JDBoard = (props) => {
  const { role } = props;

  // if the extract role from user_metadata is for advocates, redirect them back
  // to appropriate dashboard. This logic prevents any advocates from
  // access the a2j dashboard
  if (role !== "a2j") {
    window.location.href = `${window.location.origin}/advocate`;
  }

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
        return <Overview />;
      case "new":
        return <Submission />;
      case "visualization":
        return <Visualization />;
      case "advocate":
        return <AdvocateList />;
      default:
        return "Error Occured, contact system admin";
    }
  };

  const content = (
    <Grid style={{ height: "100vh" }}>
      <Grid.Column width={4} style={{ backgroundColor: "rgb(250, 251, 252)" }}>
        <Menu fluid vertical tabular color="blue">
          <div className="center item">
            <h3>Access to Justice</h3>
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
          <Menu.Item
            name="visualization"
            active={activeItem === "visualization"}
            onClick={handleItemClick}
          >
            Visualizations <Icon name="line graph" />
          </Menu.Item>
          <Menu.Item
            name="advocate"
            active={activeItem === "advocate"}
            onClick={handleItemClick}
          >
            Advocate List <Icon name="users" />
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

export default A2JDBoard;
