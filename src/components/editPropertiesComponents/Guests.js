import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AboutPlace from "./AboutPlace";

const Guests = ({ setStepValue, values }) => {

  const [guestsCount, setGuestsCount] = useState(values?.guests?.guests || 1);
  const [bedroomsCount, setBedroomsCount] = useState(values?.guests?.bedrooms || 0);
  const [bedsCount, setBedsCount] = useState(values?.guests?.beds || 0);
  const [bathroomsCount, setBathroomsCount] = useState(values?.guests?.bathrooms || 0);

  useEffect(() => {
    const data = {
      guests: guestsCount,
      bedrooms: bedroomsCount,
      beds: bedsCount,
      bathrooms: bathroomsCount,
    };
    setStepValue("guests", data);
  }, [guestsCount, bedroomsCount, bedsCount, bathroomsCount]);

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
              <h1>Share some basics about your place</h1>
              <Typography variant="text" mt={2}>
                You'll add more details later, like bed types.
              </Typography>
            </Grid>
            <Grid item xs={12} p={"0px"}>
              <AboutPlace
                guestsCount={guestsCount}
                setGuestsCount={setGuestsCount}
                bedroomsCount={bedroomsCount}
                setBedroomsCount={setBedroomsCount}
                bedsCount={bedsCount}
                setBedsCount={setBedsCount}
                bathroomsCount={bathroomsCount}
                setBathroomsCount={setBathroomsCount}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Guests;
