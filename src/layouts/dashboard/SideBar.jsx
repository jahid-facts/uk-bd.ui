import { Close, Inbox, Mail } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../theme";
import assets from "../../assets";
import { Link, useLocation } from "react-router-dom";
import sidebarContent from "./SideBarContent";
import { Icon } from "@iconify/react";

const SideBar = ({ setOpen, open }) => {
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  useEffect(() => {
    if (!isMdScreen) {
      setOpen(false);
    }
  }, [isMdScreen, setOpen]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [activeItem, setActiveItem] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // Extract the path from the location object
    const currentPath = location.pathname;

    // Find the matching sidebar content item based on the path
    const matchingItem = sidebarContent.find(
      (item) => item.path === currentPath
    );

    // Update the active item
    setActiveItem(matchingItem);
  }, [location.pathname]);

  return (
    <Box sx={{ display: "flex" }} position={"relative"}>
      {isMdScreen ||
        (open && (
          <IconButton
            color="inherit"
            aria-label="Open sidebar"
            edge="start"
            onClick={toggleDrawer}
            sx={{
              display: {
                xs: "block",
                md: "none",
                position: "absolute",
                top: "35px",
                left: "310px",
              },
            }}
          >
            <Close />
          </IconButton>
        ))}
      <Drawer
        sx={{
          position: "absolute",
          width: "270px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "270px",
            boxSizing: "border-box",
            overflowY: "auto",
            borderRight: "0px",
            boxShadow: theme.palette.boxShadow,
          },
          "& .MuiDrawer-paper::-webkit-scrollbar": {
            width: "0px", // Width of the scrollbar
          },
          "& .MuiDrawer-paper::-webkit-scrollbar-track": {
            background: "#f1f1f1", // Track color
          },
          "& .MuiDrawer-paper::-webkit-scrollbar-thumb": {
            background: "#888", // Thumb color
          },
          display: isMdScreen ? "block" : open ? "block" : "none", // Show on md and larger screens, hide on xs screens unless open
        }}
        variant="persistent"
        anchor="left"
        open={isMdScreen || open} // Open on md and larger screens and when the open state is true
      >
        <Box sx={{ p: "20px" }}>
          <Box sx={{ p: "20px", textAlign: "center" }}>
            <Link to={"/"}>
              <img src={assets.images.logo} alt="" height={"75px"} />
            </Link>
          </Box>
          <Divider />
          <List>
            {sidebarContent.map((data, index) => (
              <Link to={data.path} key={index}>
                <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    backgroundColor:
                      activeItem === data ? "#f4f9ff" : "transparent",
                    borderRadius: "10px",
                    "&:hover": {
                      borderRadius: "10px",
                    },
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon
                        style={{
                          fontSize: "23px",
                          color: activeItem === data ? "#2980b9" : "#888",
                        }}
                        icon={data.icon}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={data.name}
                      primaryTypographyProps={{
                        style: {
                          color: activeItem === data ? "#2980b9" : "#888",
                          fontWeight: activeItem === data ? 600 : 400,
                          borderRight:
                            activeItem === data ? "3px solid #2980b9" : 400,
                          fontSize: "15px",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
