import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import BottomBar from "../../components/bottom_bar/BottomBar";

const DashboardLayout = ({ children, title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: "flex" }} position={"relative"}>
      {isMdScreen ||
        (drawerOpen && (
          <Box
            onClick={toggleDrawer}
            bgcolor={"#00000050"}
            position={"absolute"}
            left={"0"}
            right={"0"}
            top={"0"}
            zIndex={"5"}
            bottom={"0"}
          ></Box>
        ))}
      <SideBar setOpen={setDrawerOpen} open={drawerOpen} />
      <Box
        p={3}
        sx={{
          background: "#f4f9ff",
          minHeight: "100vh",
          width: "100%",
          marginLeft: isMdScreen ? "270px" : "0",
          transition: "margin-left 0.3s ease-in-out",
        }}
      >
        <TopBar setOpen={setDrawerOpen} open={drawerOpen} title={title} />
        {children}
      </Box>
      <BottomBar />
    </Box>
  );
};

export default DashboardLayout;
