import {
  EmailOutlined,
  Menu,
  NotificationsOutlined,
} from "@mui/icons-material";
import {
  Badge,
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  Grid,
} from "@mui/material";
import React from "react";
import { Avater } from "../../components/avater";
import { Link } from "react-router-dom";
import { theme } from "../../theme";

const TopBar = ({ setOpen, open, title }) => {
  const isMdScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        borderRadius={3}
        mb={3}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid container spacing={2} alignItems="center">
          {/* First Box */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="body1" fontSize={"14px"} fontWeight={"500"}>
                Pages / {title}
              </Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                {title}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              borderRadius={"30px"}
              boxShadow={theme.palette.boxShadow}
              p={1}
              pl={{ md: 2 }}
              bgcolor={"#ffffff"}
              sx={{
                float: "right", 
                width: { xs: "-webkit-fill-available", md: "fit-content" }
              }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{ width: { xs: "100%", md: "auto" } }}
              >
                
                <Box
                  color="inherit"
                  aria-label="Open sidebar"
                  edge="start"
                  onClick={toggleDrawer}
                  sx={{ cursor: 'pointer',display: { xs: "block", md: "none" }, ml: 2, mt: 1 }}
                >
                  <Menu />
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                 
                  {/* <Link to={"/notifications"}> */}
                  <Badge
                    max={9}
                    badgeContent={10}
                    color="secondary"
                    sx={{
                      marginRight: "30px",
                      display: {
                        xs: "none",
                        md: "block",
                      },
                    }}
                  >
                    <NotificationsOutlined color="action" />
                  </Badge>
                  {/* </Link> */}
                  <Link to={"/profile"}>
                    <Badge
                      max={9}
                      badgeContent={10}
                      color="secondary"
                      sx={{
                        marginRight: "30px",
                        display: {
                          xs: "none",
                          md: "block",
                        },
                      }}
                    >
                      <EmailOutlined color="action" />
                    </Badge>
                  </Link>
                  <Avater />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TopBar;
