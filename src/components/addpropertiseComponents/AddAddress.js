import { Icon } from "@iconify/react";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";

const AddAddress = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
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
            marginBottom: "120px",
          }}
        >
          <Grid container spacing={2} paddingRight={2}>
            <Grid item xs={12} md={12} mb={2}>
              <h1>Confirm your address</h1>
              <Typography variant="text" mt={2}>
                Your address is only shared with guests after they’ve made a
                reservation.
              </Typography>
            </Grid>
            <Grid item xs={12} p={"0px"}>
              <Box pt={3}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel htmlFor="country">Country / Region</InputLabel>
                  <Select
                    id="country"
                    name="country"
                    label="Country / Region"
                    value={selectedCountry} // Bind the value to state
                    onChange={handleCountryChange} // Handle value change
                  >
                    <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                    <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box pt={3}>
                <TextField
                  type="text"
                  label="Address line 1"
                  fullWidth
                  name="addressLine1"
                />
              </Box>
              <Box pt={2}>
                <TextField
                  type="text"
                  label="Address line 2"
                  fullWidth
                  name="addressLine2"
                />
              </Box>
              <Box pt={2}>
                <TextField
                  type="text"
                  label="Address line 3"
                  fullWidth
                  name="addressLine3"
                />
              </Box>
              <Box pt={2}>
                <TextField
                  type="text"
                  label="City / village (if applicable)"
                  fullWidth
                  name="city"
                />
              </Box>
              <Box pt={2}>
                <TextField
                  type="text"
                  label="State / province / territory (if applicable)"
                  fullWidth
                  name="state"
                />
              </Box>
              <Box pt={2}>
                <TextField
                  type="text"
                  label="Postal code (if applicable)"
                  fullWidth
                  name="postalCode"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AddAddress;
