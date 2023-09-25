import { Close } from "@mui/icons-material";
import { Box, Button, Popover } from "@mui/material";
import React from "react";

export const DropdownMenu = ({
  handleMenuClose,
  anchorEl,
  handleDeleteProperty,
  propertyId,
  handleActivProperty,
  handleDeActivProperty,
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
        <Button
          sx={{ textTransform: "capitalize" }}
          onClick={() => {
            handleMenuClose();
            handleActivProperty(propertyId);
          }}
        >
          Active
        </Button>
        <Button
          sx={{ textTransform: "capitalize" }}
          onClick={() => {
            handleMenuClose();
            handleDeActivProperty(propertyId);
          }}
        >
          De-active
        </Button>
        <Button
          sx={{ textTransform: "capitalize" }}
          onClick={() => {
            handleMenuClose();
            handleDeleteProperty(propertyId);
          }}
        >
          Delete
        </Button>
        <Button
          key="2"
          sx={{ textTransform: "capitalize" }}
          onClick={handleMenuClose}
        >
          <Close sx={{ color: "#ff0000", fontSize: "14px" }} />
        </Button>
      </Box>
    </Popover>
  );
};
