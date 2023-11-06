import { Box, Button, Popover } from "@mui/material";
import React from "react";
import Capitalize from "../capitalize/Capitalize";

export const DropdownMenu = ({
  anchorEl,
  handleMenuClose,
  handleAction,
  actionItems,
}) => {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleMenuClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} p={1}>
        {actionItems.map((item, index) => (
          <Button
            key={index}
            sx={{ textTransform: "capitalize" }}
            onClick={() => {
              handleMenuClose();
              handleAction(item.type); 
            }}
          >
            {Capitalize(item.type)}
          </Button>
        ))}
        <Button
          key="2"
          variant="contained"
          color="secondary"
          size="small"
          sx={{ textTransform: "capitalize", mt: 1.5 }}
          onClick={handleMenuClose}
        >
          close
        </Button>
      </Box>
    </Popover>
  );
};
