import { Icon } from "@iconify/react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Container,
  Grid,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Discounts = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (boxId) => {
    setActiveBox(boxId === activeBox ? null : boxId);
  };

  const boxStyles = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    borderRadius: "20px",
    padding: "10px",
  };

  const activeBoxStyles = {
    backgroundColor: "#efefef",
    border: "2px solid #111 !important",
  };

  // check box
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} mb={3}>
              <h1>Add discounts</h1>
              <Typography variant="text" mt={2}>
                Help your place stand out to get booked faster and earn your
                first reviews.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Card
                sx={{
                  border: "1px solid #999",
                  ...boxStyles,
                    ...(activeBox === 1 ? activeBoxStyles : {}),
                  boxShadow: "none",
                }}
              >
                <CardActionArea sx={{ padding: "0px", margin: "0px" }}>
                  <CardContent>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box width={"90%"} display={"flex"} alignItems={"center"}>
                        <Box
                          mr={2}
                          sx={{
                            border: "1px solid #999",
                            borderRadius: "10px",
                            display: "flex", 
                            alignItems: "center", 
                            height: '45px',
                          }}
                        >
                          <Input
                            inputProps={{
                              maxLength: 2,
                              style: {
                                width: "25px",
                                fontWeight: "bold",
                                fontSize: "20px",
                                paddingLeft: "10px",
                              },
                            }}
                            endAdornment={
                              <InputAdornment
                                sx={{
                                  mr: "10px",
                                }}
                                position="end"
                              >
                               <span  style={{
                                  fontWeight: "bold",
                                  fontSize: "20px",
                                }}>$</span>
                              </InputAdornment>
                            }
                            disableUnderline
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontSize={"18px"}
                            fontWeight={"600"}
                          >
                            New listing promotion
                          </Typography>
                          <Typography variant="h6" fontSize={"16px"}>
                            Offer 20% off your first 3 bookings.
                          </Typography>
                        </Box>
                      </Box>
                      <Checkbox
                        {...label}
                        // defaultChecked
                        onClick={() => handleBoxClick(1)}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                sx={{
                  border: "1px solid #999",
                  ...boxStyles,
                    ...(activeBox === 2 ? activeBoxStyles : {}),
                  boxShadow: "none",
                }}
              >
                <CardActionArea sx={{ padding: "0px", margin: "0px" }}>
                  <CardContent>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box width={"90%"} display={"flex"} alignItems={"center"}>
                        <Box
                          mr={2}
                          sx={{
                            border: "1px solid #999",
                            borderRadius: "10px",
                            display: "flex", 
                            alignItems: "center", 
                            height: '45px',
                          }}
                        >
                          <Input
                          value='20'
                            inputProps={{
                              maxLength: 2,
                              style: {
                                width: "25px",
                                fontWeight: "bold",
                                fontSize: "20px",
                                paddingLeft: "10px",
                              },
                            }}
                            endAdornment={
                              <InputAdornment
                                sx={{
                                  mr: "10px",
                                }}
                                position="end"
                              >
                               <span  style={{
                                  fontWeight: "bold",
                                  fontSize: "20px",
                                }}>$</span>
                              </InputAdornment>
                            }
                            disableUnderline
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontSize={"18px"}
                            fontWeight={"600"}
                          >
                            Weekly discount
                          </Typography>
                          <Typography variant="h6" fontSize={"16px"}>
                            For stays of 7 nights or more
                          </Typography>
                        </Box>
                      </Box>
                      <Checkbox
                        {...label}
                        // defaultChecked
                        onClick={() => handleBoxClick(2)}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                sx={{
                  border: "1px solid #999",
                  ...boxStyles,
                    ...(activeBox === 3 ? activeBoxStyles : {}),
                  boxShadow: "none",
                }}
              >
                <CardActionArea sx={{ padding: "0px", margin: "0px" }}>
                  <CardContent>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box width={"90%"} display={"flex"} alignItems={"center"}>
                        <Box
                          mr={2}
                          sx={{
                            border: "1px solid #999",
                            borderRadius: "10px",
                            display: "flex", 
                            alignItems: "center", 
                            height: '45px',
                          }}
                        >
                          <Input
                            inputProps={{
                              maxLength: 2,
                              style: {
                                width: "25px",
                                fontWeight: "bold",
                                fontSize: "20px",
                                paddingLeft: "10px",
                              },
                            }}
                            endAdornment={
                              <InputAdornment
                                sx={{
                                  mr: "10px",
                                }}
                                position="end"
                              >
                               <span  style={{
                                  fontWeight: "bold",
                                  fontSize: "20px",
                                }}>$</span>
                              </InputAdornment>
                            }
                            disableUnderline
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            fontSize={"18px"}
                            fontWeight={"600"}
                          >
                            Monthly discount
                          </Typography>
                          <Typography variant="h6" fontSize={"16px"}>
                          For stays of 28 nights or more
                          </Typography>
                        </Box>
                      </Box>
                      <Checkbox
                        {...label}
                        // defaultChecked
                        onClick={() => handleBoxClick(3)}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Discounts;
