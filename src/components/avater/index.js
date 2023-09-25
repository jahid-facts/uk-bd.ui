import React, { useState } from "react";
import { Avatar, Box, Divider, Menu, MenuItem } from "@mui/material";
import { ArrowDropDownCircle, Logout } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import assets from "../../assets";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/features/AuthSlice";
import { useIsAuthenticated } from "../../helpers/AuthCheck";

const AvatarMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isAuthenticated = useIsAuthenticated();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Logout
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
          onClick={handleMenuOpen}
          display={"flex"}
          alignItems={"center"}
          border={"1px solid #f1f1f1"}
          px={"17px"}
          py={"5px"}
          borderRadius={"50px"}
        >
          <ArrowDropDownCircle />
          <Avatar
            alt="Remy Sharp"
            src={assets.images.avatar}
            sx={{ width: 30, height: 30, marginLeft: "10px" }}
          />
        </Box>
      </Box>
      <Menu
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
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
        {isAuthenticated
          ? // Menu items for authenticated user
            [
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "inherit" }}
                key="profile-link"
              >
                <MenuItem sx={{ minWidth: "250px" }} onClick={handleMenuClose}>
                  <Avatar /> Profile
                </MenuItem>
              </Link>,
              <MenuItem
                sx={{ minWidth: "250px" }}
                onClick={handleMenuClose}
                key="my-account"
              >
                <Avatar /> My account
              </MenuItem>,
              <Divider key="divider" />,
              <MenuItem
                sx={{ minWidth: "250px" }}
                onClick={handleMenuClose}
                key="add-account"
              >
                Add another account
              </MenuItem>,
              <MenuItem
                sx={{ minWidth: "250px" }}
                onClick={handleMenuClose}
                key="settings"
              >
                Settings
              </MenuItem>,
              <MenuItem
                onClick={handleLogout}
                sx={{ minWidth: "250px" }}
                key="logout"
              >
                Logout
              </MenuItem>,
            ]
          : // Menu items for non-authenticated user
            [
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
                key="login-link"
              >
                <MenuItem sx={{ minWidth: "250px" }} onClick={handleMenuClose}>
                  Login
                </MenuItem>
              </Link>,
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
                key="register-link"
              >
                <MenuItem sx={{ minWidth: "250px" }} onClick={handleMenuClose}>
                  Register
                </MenuItem>
              </Link>,
            ]}
      </Menu>
    </>
  );
};

export default AvatarMenu;
