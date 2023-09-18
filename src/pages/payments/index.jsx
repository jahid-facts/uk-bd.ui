import * as React from "react";
import { Apple, ArrowBackIos, Facebook, Google, Star } from "@mui/icons-material";
import { Button, Container, Divider, Grid, Link, Stack, TextField, Typography } from "@mui/material";
import DiamondIcon from '@mui/icons-material/Diamond'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AppLayout } from "../../layouts/appLayout";

const PaymentForm = (prop) => {
  const { basePrice, totalNights, extra } = prop;

  return (
    <AppLayout>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              fontSize={"32px"}
              color={"primary.main"}
              fontWeight={"500"}
            >
              <ArrowBackIos sx={{ fontSize: 16 }} />
              Confirm and pay
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={5}>
              {/* left side content start */}
              <Grid item columns={{ xs: 12, md: 7 }} order={{ xs: 2, md: 1 }}>
                {/* trip part start*/}
                <Grid item xs={12}>
                  <Box
                    my={4}
                    p={4}
                    border={1}
                    borderColor={"grey.300"}
                    borderRadius={"8px"}
                  >
                    <Grid container spacing={2}>
                      <Grid xs={7}>
                        <Typography
                          variant="h3"
                          fontSize={"17px"}
                          color={"primary.main"}
                          fontWeight={"600"}
                        >
                          This is a rare find.
                        </Typography>
                        <Typography
                          variant="text"
                          fontSize={"14px"}
                          color={"primary.main"}
                        >
                          Carmela's place is usually booked.
                        </Typography>
                      </Grid>
                      <Grid xs={4} container justifyContent="flex-end">
                        <DiamondIcon fontSize={"large"} sx={{ color: "#ff0047" }} />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box>
                    <Box my={2}>
                      <Typography variant="h6">Your trip</Typography>
                    </Box>
                    <Box my={2}>
                      <Box>
                        <Typography variant="h6" fontSize={"17px"}>Dates</Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography variant="subtitle1" >
                          Aug 19 – 24
                        </Typography>
                        <Typography variant="h6" fontSize={"17px"}>
                          Edit
                        </Typography>
                      </Box>
                    </Box>
                    <Box my={2}>
                      <Box>
                        <Typography variant="h6" fontSize={"17px"}>Guests</Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography variant="subtitle1" >
                          1 guest
                        </Typography>
                        <Typography variant="h6" fontSize={"17px"}>
                          Edit
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                {/* trip part end*/}
                <Divider />
                {/* Log in part start */}
                <Grid item xs={12}>
                  <Box my={2}>
                    <Typography variant="h6">Log in or sign up to book</Typography>
                  </Box>
                  <FormControl fullWidth>
                    <InputLabel>Country/Region</InputLabel>
                    <Select
                      id="demo-simple-select"
                    >
                      <MenuItem value={10}>Bangladesh</MenuItem>
                      <MenuItem value={20}>Saudi Arab</MenuItem>
                      <MenuItem value={30}>Dubai</MenuItem>
                    </Select>
                    <TextField
                      id="outlined-textarea"
                      label="Phone Number"
                      placeholder="+880"
                      multiline
                    />
                    <Typography variant="caption" display="block" gutterBottom my={2} s>
                      We’ll call or text you to confirm your number. Standard message and data rates apply. <Link href="#" underline="always" color="inherit">{'Privacy Policy'}</Link>
                    </Typography>
                    <Link to={'#'}>
                      <Button
                        variant="contained"
                        fullWidth
                        color="secondary"
                        size="large"
                        my={2}
                      >
                        Continue
                      </Button>
                    </Link>
                  </FormControl>
                  <Divider my={2}>or</Divider>
                  <Grid item xs={12}>
                    <Stack spacing={2} direction="row" my={2}>
                      <Button variant="outlined" size="large">
                        <Facebook />
                      </Button>
                      <Button variant="outlined" size="large">
                        <Google />
                      </Button>
                      <Button variant="outlined" size="large">
                        <Apple />
                      </Button>
                    </Stack>
                    <Link to={'#'}>
                      <Button
                        variant="outlined"
                        fullWidth
                        size="large"
                        my={2}
                      >
                        Continue with email
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
                {/* Log in part end */}
              </Grid>
              {/* left side content end */}

              {/* right sidebar start*/}
              <Grid item columns={{ xs: 12, md: 4 }} order={{ xs: 1, md: 2 }}>
                <Box
                  p={"20px"}
                  boxShadow={"0px 0px 8px 0px #6363633b"}
                  borderRadius={"16px"}
                >
                  <Box
                    my={2}
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Grid container spacing={2}>
                      <Grid item>
                        <Box
                          component="img"
                          sx={{
                            height: 130,
                            width: 150,
                            borderRadius: "8px",
                          }}
                          alt="breackfast"
                          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                        />
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={5}>
                          <Grid item>
                            <Typography variant="body2" fontSize={"12px"} sx={{ color: "#808283" }}>
                              Room in condo
                            </Typography>
                            <Typography variant="subtitle1" component="div" fontSize={"14px"} >
                              Noble room into the historical Torino
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="body2" fontSize={"12px"}>
                              <Star fontSize={"10px"} /><strong>4.80 </strong> (50 reviews)
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider />
                  <Box my={2}>
                    <Typography variant="h6">Price details</Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    my={2}
                  >
                    <Typography variant="h4" fontSize={"15px"}>
                      $40 x 3 nights
                    </Typography>
                    <Typography variant="h4" fontSize={"15px"}>
                      $220.69
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    my={2}
                  >
                    <Typography variant="h4" fontSize={"15px"}>
                      Cleaning fee

                    </Typography>
                    <Typography variant="h4" fontSize={"15px"}>
                      $21.85
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    my={2}
                  >
                    <Typography variant="h4" fontSize={"15px"}>
                      Airbnb service fee
                    </Typography>
                    <Typography variant="h4" fontSize={"15px"}>
                      $34.24
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    my={2}
                  >
                    <Typography variant="h4" fontSize={"15px"}>
                      Taxes
                    </Typography>
                    <Typography variant="h4" fontSize={"15px"}>
                      $12.56
                    </Typography>
                  </Box>
                  <Divider />
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    my={2}
                  >
                    <Typography variant="h4" fontSize={"16px"} fontWeight={"700"}>
                      Total (USD)
                    </Typography>
                    <Typography variant="h4" fontSize={"15px"} fontWeight={"700"}>
                      $289.34
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              {/* right sidebar end*/}
            </Grid>
          </Grid>
        </Grid>
      </Container >
    </AppLayout>
  );
};

export default PaymentForm;