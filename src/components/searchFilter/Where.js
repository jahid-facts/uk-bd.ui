import {
  Box,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import assets from "../../assets";
import { Search } from "@mui/icons-material";

const Where = () => {
  return (
    <Stack sx={{ padding: "20px", maxWidth: "100%" }}>
      <Box sx={{ display: { md: "none" } }}>
        <TextField
          // label="Search destinations"
          placeholder="Search destinations"
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Typography
        sx={{
          color: "primary.main",
          paddingTop: "20px",
          paddingLeft: { md: "20px" },
        }}
        variant="h6"
        fontSize={"14px"}
        fontWeight={"600"}
      >
        Search by region
      </Typography>
      <Grid container spacing={""}>
        <Grid item xs={6} sm={6}>
          <Box sx={{ p: "5px" }}>
            <img src={assets.images.bdMap} className="countryMap" alt="" />
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box sx={{ p: "5px" }}>
            <img src={assets.images.ukMap} className="countryMap" alt="" />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Where;
