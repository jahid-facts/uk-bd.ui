import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Logout,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import assets from "../../assets";


export const Avater = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Box
        sx={{
          display: {
            xs: isHomePage ? "none" : "block",
            md: "block",
          },
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
          }}
          onClick={(event) => setAnchorEl(event.currentTarget)}
          display={"flex"}
          alignItems={"center"}
          border={"1px solid #f1f1f1"}
          px={"17px"}
          py={"5px"}
          borderRadius={"50px"}
        >
          <MenuIcon color={"otherColor"} />
          <Avatar
            alt="Remy Sharp"
            src={assets.images.avatar}
            sx={{ width: 35, height: 35, marginLeft: "10px" }}
          />
        </Box>
      </Box>
      <Menu
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link
          to={"/profile"}
          style={{ textDecoration: "none", color: "MenuText" }}
        >
          <MenuItem
            onClick={() => setAnchorEl(null)}
            sx={{ textDecoration: "none" }}
          >
            <Avatar /> Profile
          </MenuItem>
        </Link>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
