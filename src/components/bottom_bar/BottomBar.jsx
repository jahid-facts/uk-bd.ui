import { Favorite, MessageSharp, Person, Notifications } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";

export const BottomBar = () => {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Paper 
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: { xs: "block", md: "none" }, 
        }}
        elevation={3}
      >
        {" "}
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Messages" icon={<MessageSharp />} />
          <BottomNavigationAction label="Wishlist" icon={<Favorite />} />
          <BottomNavigationAction label="Notifications" icon={<Notifications />} />  
          <BottomNavigationAction label="Account" icon={<Person />} />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default BottomBar;
