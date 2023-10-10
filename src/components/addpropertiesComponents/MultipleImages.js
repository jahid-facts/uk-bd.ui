import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageUpload from "../imageUpload";
import ManyImages from "../imageUpload/ManyImages";

const MultipleImages = ({ setStepValue, values, setMultipleImages, oldStepValues }) => {
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
            <Grid item xs={12} md={12} mb={2}>
              <h1>SnapUpload - Instant Image Sharing</h1>
              <Typography variant="text" mt={2}>
                Share images quickly using drag-and-drop or browsing, with
                automatic duplicate filtering.
              </Typography>
            </Grid>
            <Grid item xs={12} p={"0px"}>
              {/* // content here */}
              <ManyImages setStepValue={setStepValue} values={values} 
            setMultipleImages={setMultipleImages} oldStepValues={oldStepValues} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default MultipleImages;
