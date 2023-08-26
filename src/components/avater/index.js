import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { AddHome, Logout, PersonAdd, Settings } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import assets from "../../assets";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/features/AuthSilce";
import { useIsAuthenticated } from "../../helpers/Authenticated";

export const Avater = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isAuthenticated = useIsAuthenticated();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  //logout
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

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
        {isAuthenticated ? (
          // Menu items for authenticated user
          <>
            <Link
              to={"/profile"}
              style={{ textDecoration: "none", color: "MenuText" }}
            >
              <MenuItem
                sx={{ minWidth: "250px", textDecoration: "none" }}
                onClick={() => setAnchorEl(null)}
              >
                <Avatar /> Profile
              </MenuItem>
            </Link>
            <Link
              to={"/add-propertise"}
              style={{ textDecoration: "none", color: "MenuText" }}
            >
              <MenuItem
                onClick={() => setAnchorEl(null)}
                sx={{ minWidth: "250px" }}
              >
                <ListItemIcon>
                  <AddHome fontSize="small" />
                </ListItemIcon>
                Property listing
              </MenuItem>
            </Link>
            <MenuItem sx={{ minWidth: "250px" }}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem sx={{ minWidth: "250px" }}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem sx={{ minWidth: "250px" }}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout} sx={{ minWidth: "250px" }}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </>
        ) : (
          // Menu items for non-authenticated user
          <>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "MenuText" }}
            >
              <MenuItem sx={{ minWidth: "250px" }}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Login
              </MenuItem>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "MenuText" }}
            >
              <MenuItem sx={{ minWidth: "250px" }}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Register
              </MenuItem>
            </Link>
          </>
        )}
      </Menu>
    </>
  );
};
