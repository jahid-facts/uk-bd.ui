import React from "react";
import { Box, Container, CssBaseline, Tab, Tabs } from "@mui/material"; // Added Container and CssBaseline
import {
  AccountBalance,
  DepartureBoard,
  Park,
  Nature,
  Traffic,
  AccountTree,
  House,
} from "@mui/icons-material";

export default function Category() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box
          mb={2}
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={2}
        >
          <Box gridColumn="span 12">
            <Tabs
              sx={{ paddingTop: "0px" }}
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Sea"
                icon={<AccountBalance sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="National parks"
                icon={<DepartureBoard sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Countryside"
                icon={<Park sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Bed & breakfasts"
                icon={<Nature sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Amazing views"
                icon={<Traffic sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="OMG!"
                icon={<AccountBalance sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Item Seven"
                icon={<Nature sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Rooms"
                icon={<Nature sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Tropical"
                icon={<AccountTree sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Amazing views"
                icon={<House sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Tree"
                icon={<House sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Rooms"
                icon={<House sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Tropical"
                icon={<House sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Tropical"
                icon={<House sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Tropical"
                icon={<House sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Tropical"
                icon={<House sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Tropical"
                icon={<House sx={{ fontSize: "19px" }} />}
              />
              <Tab
                sx={{ textTransform: "capitalize", fontSize: "12px" }}
                label="Tropical"
                icon={<House sx={{ fontSize: "19px" }} />}
              />
            </Tabs>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
