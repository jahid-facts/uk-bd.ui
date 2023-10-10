import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const StartProperties = () => {
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
                  {/* <Typography p={2} variant="text" fontWeight={"bold"}>
                    Step 1
                  </Typography>  */}
                  <Typography p={2} variant="h4" fontWeight={"bold"}>
                    Tell us about your place
                  </Typography>
                  <Typography p={2} variant="body1">
                    In this step, we'll ask you which type of property you have
                    and if guests will book the entire place or just a room.
                    Then let us know the location and how many guests can stay.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} textAlign={'center'}>
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ad57a68-b35b-4bb4-8566-8ffa9d9a1924/dci102x-efb1cfe9-7ed3-406c-81f0-50924a4fe94a.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZhZDU3YTY4LWIzNWItNGJiNC04NTY2LThmZmE5ZDlhMTkyNFwvZGNpMTAyeC1lZmIxY2ZlOS03ZWQzLTQwNmMtODFmMC01MDkyNGE0ZmU5NGEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cB0FWVJKA4h9_NR9nlZIOU5DnvT9_F5wiJjhMHKW0hI"
                alt="Airbnb Logo"
                style={{
                  width: "70%", 
                  cursor: "pointer",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default StartProperties;
