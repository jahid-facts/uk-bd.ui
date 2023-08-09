import React from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  Button,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import FaqTabs from "./FaqTabs";

const MobileModal = ({ open, onClose }) => {
  const closeDrawer = () => {
    onClose();
  };

  return (
    <Drawer anchor="bottom" open={open} onClose={closeDrawer}>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <List style={{ flexGrow: 1 }}>
          <FaqTabs />
        </List>

        <Divider />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            sx={{ color: "primary.main", p: "20px" }}
            variant="h6"
            fontSize={"14px"}
            fontWeight={"600"}
          >
            Clear All
          </Typography>
          <Button onClick={closeDrawer}>Close</Button>
          <Box
            onClick={closeDrawer}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "fit-content",
              px: "20px",
              py: "8px",
              m: "15px",
              cursor: "pointer",
              borderRadius: "10px",
              bgcolor: "primary.main",
              color: "primary.contrastText",
            }}
          >
            <Search sx={{ marginLeft: "5px" }} />
            <Typography variant="text"> Search </Typography>
          </Box>
        </Box>
      </div>
    </Drawer>
  );
};

export default MobileModal;
