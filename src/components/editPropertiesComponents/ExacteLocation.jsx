import React from "react";
import ExacteLocationMaps from "../leaftLet/ExacteLocationMaps";
import { Box, Container, Grid } from "@mui/material";

const ExacteLocation = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "650px",
            },
            margin: "auto",
            marginBottom: "130px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} mb={3}>
              <h1>Select your exact location</h1>
            </Grid>
            <Grid item xs={12}>
                <ExacteLocationMaps />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ExacteLocation;
