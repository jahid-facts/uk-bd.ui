import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const StartPropertise = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
      >
        <Box p={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100%"
              >
                <Box p={2}>
                  <Typography variant="text" fontWeight={"bold"}>
                    Step 1
                  </Typography>
                  <Typography variant="h4" fontWeight={"bold"}>
                    Tell us about your place
                  </Typography>
                  <Typography variant="body1">
                    In this step, we'll ask you which type of property you have
                    and if guests will book the entire place or just a room.
                    Then let us know the location and how many guests can stay.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src="https://t4.ftcdn.net/jpg/01/88/09/67/360_F_188096730_3hHZnyYI7zH7ATN4QJdNoZgMJDRAdbGW.jpg"
                alt="Airbnb Logo"
                style={{
                  width: "70%", 
                  cursor: "pointer",
                  border: "1px solid #f3f3f3",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default StartPropertise;
