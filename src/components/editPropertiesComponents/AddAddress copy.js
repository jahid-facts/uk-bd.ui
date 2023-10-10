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
import React, { useEffect, useRef, useState } from "react";

const AddAddress = ({ setStepValue, values }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [address, setAddress] = useState(values.addAddress || {
    country: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
    city: "",
    state: "", 
    postalCode: "",
    street: "", 
  });

  useEffect(() => {
    if (values.addAddress) {
      setAddress(values.addAddress);
      setSelectedCountry(values.addAddress.country);
    }
  }, []); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({ 
      ...prevAddress,
      [name]: value,
    }));
  };

  useEffect(() => {
    setStepValue("addAddress", address);
  }, [address,]);

  const handleCountryChange = (event) => {
    const { value } = event.target;
    setSelectedCountry(value);
    handleFormData(value);
  };

  const handleFormData = (selectedCountryValue) => {
    const updatedStreet =
      address.addressLine1 +
      ", " +
      address.addressLine2 +
      ", " +
      address.addressLine3;

    setAddress((prevAddress) => ({
      ...prevAddress,
      country: selectedCountryValue,
      street: updatedStreet,
    }));
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
          <Grid container spacing={2} paddingRight={2}>
            <Grid item xs={12} md={12} mb={2}>
              <h1>Confirm your address</h1>
              <Typography variant="text" mt={2}>
                Your address is only shared with guests after they’ve made a
                reservation.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box pt={3}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel htmlFor="country">Country / Region</InputLabel>
                  <Select
                    id="country"
                    name="country"
                    label="Country / Region"
                    value={address.country} 
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
                  value={address.addressLine1}
                  onChange={handleInputChange}
                />
              </Box>
              <Box pt={2}>
                <TextField
                  type="text"
                  label="Address line 2"
                  fullWidth
                  name="addressLine2"
                  value={address.addressLine2}
                  onChange={handleInputChange}
                />
              </Box>
              <Box pt={2}>
                <TextField
                  type="text"
                  label="Address line 3"
                  fullWidth
                  name="addressLine3"
                  value={address.addressLine3}
                  onChange={handleInputChange}
                />
              </Box>
              <Box pt={2}>
                <TextField
                  type="text"
                  label="City / village (if applicable)"
                  fullWidth
                  name="city"
                  value={address.city}
                  onChange={handleInputChange}
                />
              </Box>
              <Box pt={2}>
                <TextField
                  type="text"
                  label="State / province / territory (if applicable)"
                  fullWidth
                  name="state"
                  value={address.state}
                  onChange={handleInputChange}
                />
              </Box>
              <Box pt={2}>
                <TextField
                  type="text"
                  label="Postal code (if applicable)"
                  fullWidth
                  name="postalCode"
                  value={address.postalCode}
                  onChange={handleInputChange}
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
