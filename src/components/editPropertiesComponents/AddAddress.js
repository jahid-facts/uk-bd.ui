import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  country: Yup.string().required("Country is required"),
  addressLine1: Yup.string().required("Address line 1 is required"),
  postalCode: Yup.string().required("Postal code is required"),
  // Add validation rules for other fields here
});

const AddAddress = ({ setStepValue, values, handleNext }) => {
  const initialValues = {
    country: values.located.address.country,
    addressLine1: values.address ? values.address.addressLine1 : "",
    addressLine2: values.address ? values.address.addressLine2 : "",
    addressLine3: values.address ? values.address.addressLine3 : "",
    city: values.address ? values.address.city : "",
    state: values.address ? values.address.state : "",
    postalCode: values.address ? values.address.postalCode : "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values) => {
      setStepValue("addAddress", values);
      handleNext();
    },
  });

  useEffect(() => {
    setStepValue("addAddress", formik.values);
  }, [formik.values, setStepValue]);

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
              <form onSubmit={formik.handleSubmit}>
                <Box pt={3}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel htmlFor="country">Country / Region</InputLabel>
                    <Select
                      id="country"
                      name="country"
                      label="Country / Region"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <MenuItem value={values.located.address.country}>
                        {values.located.address.country}
                      </MenuItem>
                      {/* <MenuItem value="United Kingdom">United Kingdom</MenuItem> */}
                    </Select>
                  </FormControl>
                </Box>
                <Box pt={3}>
                  <TextField
                    type="text"
                    label="Address line 1"
                    fullWidth
                    name="addressLine1"
                    value={formik.values.addressLine1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.addressLine1 &&
                      Boolean(formik.errors.addressLine1)
                    }
                  />
                  {formik.touched.addressLine1 &&
                    formik.errors.addressLine1 && (
                      <Typography variant="caption" color="error">
                        {formik.errors.addressLine1}
                      </Typography>
                    )}
                </Box>
                <Box pt={2}>
                  <TextField
                    type="text"
                    label="Address line 2"
                    fullWidth
                    name="addressLine2"
                    value={formik.values.addressLine2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Box>
                <Box pt={2}>
                  <TextField
                    type="text"
                    label="Address line 3"
                    fullWidth
                    name="addressLine3"
                    value={formik.values.addressLine3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Box>
                <Box pt={2}>
                  <TextField
                    type="text"
                    label="City / village (if applicable)"
                    fullWidth
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <Typography variant="caption" color="error">
                      {formik.errors.city}
                    </Typography>
                  )}
                </Box>
                <Box pt={2}>
                  <TextField
                    type="text"
                    label="State / province / territory (if applicable)"
                    fullWidth
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </Box>
                <Box pt={2}>
                  <TextField
                    type="text"
                    label="Postal code (if applicable)"
                    fullWidth
                    name="postalCode"
                    value={formik.values.postalCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.postalCode &&
                      Boolean(formik.errors.postalCode)
                    }
                  />
                  {formik.touched.postalCode && formik.errors.postalCode && (
                    <Typography variant="caption" color="error">
                      {formik.errors.postalCode}
                    </Typography>
                  )}
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AddAddress;
