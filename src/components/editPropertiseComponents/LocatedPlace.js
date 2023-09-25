import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBar from "../leaftLet/SearchBar";
import Maps from "../leaftLet/Maps";

const LocatedPlace = ({ setStepValue, values }) => {
  const [selectPosition, setSelectPosition] = useState(null);

  useEffect(() => {
    if (values.located !== null) {
      const localLocation = {
        lat: values.located.lat,
        lon: values.located.lon,
      };
      setSelectPosition(localLocation);
    }
  }, []);
  const handleListItemClick = (data) => {
    const location = {
      lat: data.lat,
      lon: data.lon,
    };
    setSelectPosition(location);
    setStepValue("locatedPlace", data);
  };

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
              <h1>Where's your place located?</h1>
              <Typography variant="text" mt={2}>
                Your address is only shared with guests after they’ve made a
                reservation.
              </Typography>
            </Grid>
            <Grid item xs={12} p={"0px"}>
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  position: "relative",
                  marginTop: "70px",
                }}
              >
                <Maps selectPosition={selectPosition} />

                <Box
                  sx={{
                    position: "absolute",
                    top: "-58px",
                    left: "0px",
                    right: "0px",
                    textAlign: "center",
                    zIndex: 1000,
                  }}
                >
                  <SearchBar handleListItemClick={handleListItemClick} />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default LocatedPlace;
