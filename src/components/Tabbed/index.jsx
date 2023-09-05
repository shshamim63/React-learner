import { Tabs, Tab, Paper } from "@mui/material";
import { useState } from "react";

import TabContent from "../TabContent";

const Tabbed = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleOnTabChange = (event, value) => {
    setActiveTab(value);
  };

  return (
    <Paper elevation={4} sx={{ mt: 3 }}>
      <Tabs
        value={activeTab}
        onChange={handleOnTabChange}
        aria-label="react-work-tab"
      >
        {tabs.length &&
          tabs.map((tab, index) => (
            <Tab
              label={tab.tabName}
              key={index}
              id={`tab-${index}`}
              aria-controls={`control-${index}`}
            ></Tab>
          ))}
      </Tabs>
      <TabContent content={tabs[activeTab].context} key={activeTab} />
    </Paper>
  );
};

export default Tabbed;
