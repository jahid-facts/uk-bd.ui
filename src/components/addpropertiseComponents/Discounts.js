import React, { useEffect, useState } from "react";
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
  Typography,
} from "@mui/material";

const Discounts = ({ setStepValue, values }) => {
  const [activeBoxes, setActiveBoxes] = useState([]);
  const [listingValue, setListingValue] = useState(
    values.discounts ? values.discounts.listingValue : ""
  );
  const [weeklyValue, setWeeklyValue] = useState(
    values.discounts ? values.discounts.weeklyValue : ""
  );
  const [monthlyValue, setMonthlyValue] = useState(
    values.discounts ? values.discounts.monthlyValue : ""
  );

  useEffect(() => {
    const updatedActiveBoxes = [];

    // Check if values exist and set the corresponding activeBoxes
    if (values.discounts) {
      if (values.discounts.listingValue) {
        updatedActiveBoxes.push("listing");
      }
      if (values.discounts.weeklyValue) {
        updatedActiveBoxes.push("weekly");
      }
      if (values.discounts.monthlyValue) {
        updatedActiveBoxes.push("monthly");
      }
    }

    setActiveBoxes(updatedActiveBoxes);
  }, [values.discounts]);

  const handleBoxClick = (boxId) => {
    let updatedActiveBoxes;
    if (activeBoxes.includes(boxId)) {
      updatedActiveBoxes = activeBoxes.filter((id) => id !== boxId);
    } else {
      updatedActiveBoxes = [...activeBoxes, boxId];
    }

    setActiveBoxes(updatedActiveBoxes);

    // Update setStepValue based on the updated active boxes
    setStepValue("discounts", {
      listingValue: updatedActiveBoxes.includes("listing") ? listingValue : null,
      weeklyValue: updatedActiveBoxes.includes("weekly") ? weeklyValue : null,
      monthlyValue: updatedActiveBoxes.includes("monthly") ? monthlyValue : null,
    });
  };

  const isBoxActive = (boxId) => activeBoxes.includes(boxId);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
              <h1>Add discounts</h1>
              <Typography variant="text" mt={2}>
                Help your place stand out to get booked faster and earn your
                first reviews.
              </Typography>
            </Grid>
            {/* Listing Discount */}
            <Grid item xs={12}>
              <Card
                sx={{
                  border: "1px solid #999",
                  ...boxStyles,
                  ...(isBoxActive("listing") ? activeBoxStyles : {}),
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
                            height: "45px",
                          }}
                        >
                          <Input
                            value={listingValue}
                            type="number"
                            onChange={(e) => setListingValue(e.target.value)}
                            inputProps={{
                              min: 0,
                              max: 70,
                              maxLength: 2,
                              style: {
                                width: "45px",
                                fontWeight: "bold",
                                fontSize: "20px",
                                paddingLeft: "10px",
                                WebkitAppearance: "none",
                                MozAppearance: "textfield",
                              },
                            }}
                            endAdornment={
                              <InputAdornment
                                sx={{
                                  mr: "10px",
                                }}
                                position="end"
                              >
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                  }}
                                >
                                  $
                                </span>
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
                        checked={isBoxActive("listing")}
                        onClick={() => handleBoxClick("listing")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Weekly Discount */}
            <Grid item xs={12}>
              <Card
                sx={{
                  border: "1px solid #999",
                  ...boxStyles,
                  ...(isBoxActive("weekly") ? activeBoxStyles : {}),
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
                            height: "45px",
                          }}
                        >
                          <Input
                            type="number"
                            value={weeklyValue}
                            onChange={(e) => setWeeklyValue(e.target.value)}
                            inputProps={{
                              min: 0,
                              max: 70,
                              maxLength: 2,
                              style: {
                                width: "45px",
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
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                  }}
                                >
                                  $
                                </span>
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
                        checked={isBoxActive("weekly")}
                        onClick={() => handleBoxClick("weekly")}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Monthly Discount */}
            <Grid item xs={12}>
              <Card
                sx={{
                  border: "1px solid #999",
                  ...boxStyles,
                  ...(isBoxActive("monthly") ? activeBoxStyles : {}),
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
                            height: "45px",
                          }}
                        >
                          <Input
                            type="number"
                            value={monthlyValue}
                            onChange={(e) => setMonthlyValue(e.target.value)}
                            inputProps={{
                              min: 0,
                              max: 70,
                              style: {
                                width: "45px",
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
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                  }}
                                >
                                  $
                                </span>
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
                        checked={isBoxActive("monthly")}
                        onClick={() => handleBoxClick("monthly")}
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
