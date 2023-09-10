import {
  Favorite,
  MessageSharp,
  Person,
  Notifications,
  Home,
} from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const BottomBar = () => {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const [locationCheck, setLocatinCheck] = useState(false);

  useEffect(() => {
    if (location.pathname === "/reservation-details") {
      setLocatinCheck(true);
    } else {
      setLocatinCheck(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: "block", md: "none" },
          zIndex: 99,
        }}
        elevation={3}
      >
        {" "}
        {locationCheck ? (
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            m={1}
          >
            <Typography sx={{ m: 1 }}>$80 night</Typography>
            <Link to={"/payments"}>
              <Button
                variant="contained"
                sx={{ textTransform: "capitalize", m: 1 }}
                color="secondary"
              >
                Reserve
              </Button>
            </Link>
          </Box>
        ) : (
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Home" icon={<Home />} />
            <BottomNavigationAction label="Messages" icon={<MessageSharp />} />
            <BottomNavigationAction label="Wishlist" icon={<Favorite />} />
            <BottomNavigationAction
              label="Notifications"
              icon={<Notifications />}
            />
            <BottomNavigationAction label="Account" icon={<Person />} />
          </BottomNavigation>
        )}
      </Paper>
    </>
  );
};

export default BottomBar;
