import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  FilterAlt,
  Search,
} from "@mui/icons-material";

import MobileModal from "./MobileModal";

const SearchMobile = () => {

  
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Stack
      id="basic-button2"
      variant="text"
      sx={{
        borderRadius: "25px",
        width: "100%",
      }}
    >
      <Box
        onClick={toggleDrawer}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 15,
          padding: "10px",
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
          cursor: "pointer",
          boxShadow: "0px 0px 18px 0px #6363633b",
        }}
      >
        
          <Box sx={{ px: "15px", 
          display: "flex",
          alignItems: "center", }}>
            
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              mr: "20px",
              borderRadius: "50px",
              color: "primary.main",
            }}
          >
            <Search sx={{ marginLeft: "5px" }} />
          </Box>
            <Box>
            <Typography
              sx={{ color: "primary.main" }}
              variant="h6"
              fontSize={"14px"}
              fontWeight={"600"}
            >
              Anywhere
            </Typography>
            <Typography
              sx={{ color: "primary.main" }}
              variant="h6"
              fontSize={"12px"}
              fontWeight={"400"}
            >
              Add guests . Check in/out
            </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              px: "5px",
              py: "5px",
              borderRadius: "50px",
              border: "1px solid #f4f4f4",
              color: "primary.main",
            }}
          >  
            <FilterAlt sx={{ marginLeft: "5px" }} />
          </Box>
      </Box>

      <MobileModal open={drawerOpen} onClose={() => setDrawerOpen(false)} />


    </Stack>
  );
};

export default SearchMobile;
