import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import Who from "./Who";
import Where from "./Where";
import WhenDate from "./WhenDate";

const FaqTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Handle the selected range in your parent component
  const [selectedRange, setSelectedRange] = useState({
    startDate: null,
    endDate: null,
    key: "selection",
  });

  const handleDateSelect = (newRange) => {
    setSelectedRange(newRange);
  };

  /// who
  const [adultsCount, setAdultsCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  const [petsCount, setPetsCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        sx={{
          boxShadow: "0px 0px 18px 0px #6363633b",
          borderRadius: "15px",
          p: "15px",
        }}
      >
        <Tab
          label="Where"
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
        />
        <Tab
          label="When"
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
        />
        <Tab
          label="Who"
          sx={{ textTransform: "capitalize", fontWeight: "bold" }}
        />
      </Tabs>

      {activeTab === 0 && (
        <div
          style={{
            boxShadow: "0px 0px 18px 0px #6363633b",
            borderRadius: "15px",
            padding: "15px",
            marginTop: "25px",
          }}
        >
          <Typography variant="h6" pl={"20px"} fontWeight={"bold"}>
            Where to?
          </Typography>
          <Box textAlign={"left"}>
            <Where />
          </Box>
        </div>
      )}
      {activeTab === 1 && (
        <div
          style={{
            boxShadow: "0px 0px 18px 0px #6363633b",
            borderRadius: "15px",
            padding: "15px",
            marginTop: "25px",
          }}
        >
          <Typography variant="h6" pl={"20px"} fontWeight={"bold"} mb={"20px"}>
            Who's comming
          </Typography>
          <WhenDate onSelect={handleDateSelect} />
        </div>
      )}
      {activeTab === 2 && (
        <div
          style={{
            boxShadow: "0px 0px 18px 0px #6363633b",
            borderRadius: "15px",
            padding: "15px",
            marginTop: "25px",
          }}
        >
          <Typography variant="h6" pl={"20px"} fontWeight={"bold"}>
            Who's comming
          </Typography>
          <Who
            adultsCount={adultsCount}
            setAdultsCount={setAdultsCount}
            childrenCount={childrenCount}
            setChildrenCount={setChildrenCount}
            infantsCount={infantsCount}
            setInfantsCount={setInfantsCount}
            petsCount={petsCount}
            setPetsCount={setPetsCount}
          />
        </div>
      )}
    </div>
  );
};

export default FaqTabs;
