import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

// Implements the logic for the visualizations tab. What's important here is state,
// wherein we are able to toggle between years.

const yearOptions = [
  {
    key: 2017,
    text: 2017,
    value: 2017,
  },
  {
    key: 2018,
    text: 2018,
    value: 2018,
  },
  {
    key: 2019,
    text: 2019,
    value: 2019,
  },
  {
    key: 2020,
    text: 2020,
    value: 2020,
  },
];

const Visualization = () => {
  const year2017 =
    "https://thecdm.sharepoint.com/sites/team_mpath/_layouts/15/Doc.aspx?sourcedoc={b31b1112-ac70-40f8-a562-43165507bf5f}&action=embedview&wdAllowInteractivity=False&ActiveCell='Charts'!B28&Item='Charts'!B28%3AS117&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True";
  const year2018 =
    "https://thecdm.sharepoint.com/sites/team_mpath/_layouts/15/Doc.aspx?sourcedoc={75769cff-023f-4c8e-a51a-8b772df808e6}&action=embedview&wdAllowInteractivity=False&ActiveCell='Charts'!B28&Item='Charts'!B28%3AS117&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True";
  const year2019 =
    "https://thecdm.sharepoint.com/sites/team_mpath/_layouts/15/Doc.aspx?sourcedoc={ce69990e-4152-4e59-9d31-dc8350cfc6bb}&action=embedview&wdAllowInteractivity=False&ActiveCell='Charts'!B28&Item='Charts'!B28%3AS117&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True";
  const year2020 =
    "https://thecdm.sharepoint.com/sites/team_mpath/_layouts/15/Doc.aspx?sourcedoc={5527e969-5201-4604-9fed-5c4e7c97db2a}&action=embedview&wdAllowInteractivity=False&ActiveCell='Charts'!B28&Item='Charts'!B28%3AS117&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True";

  const [activeYear, setActiveYear] = useState(2020);

  const handleItemClick = (e, { value }) => {
    setActiveYear(value);
  };

  const switchYear = (year) => {
    switch (year) {
      case 2017:
        return year2017;
      case 2018:
        return year2018;
      case 2019:
        return year2019;
      case 2020:
        return year2020;
      default:
        return year2020;
    }
  };

  return (
    <div>
      <Dropdown
        placeholder="Select Year"
        selection
        options={yearOptions}
        onChange={handleItemClick}
        value={activeYear}
      />
      <embed
        style={{ width: "72vw", height: "100vh" }}
        src={switchYear(activeYear)}
      ></embed>
    </div>
  );
};

export default Visualization;
