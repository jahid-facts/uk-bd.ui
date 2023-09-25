import { Icon } from "@iconify/react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Decide = ({ setStepValue, values }) => {
  const [activeBox, setActiveBox] = useState(
    parseInt(values.decideReservations) || null
  );

  useEffect(() => {
    setStepValue("decide", activeBox);
  }, [activeBox, setStepValue]);

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
              <h1>Decide how you’ll confirm reservations</h1>
            </Grid>
            <Grid item xs={12}>
              <Card
                sx={{
                  border: "1px solid #999",
                  ...boxStyles,
                  ...(activeBox === 1 ? activeBoxStyles : {}),
                  boxShadow: "none",
                }}
                onClick={() => handleBoxClick(1)}
              >
                <CardActionArea sx={{ padding: "0px", margin: "0px" }}>
                  <CardContent>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box width={"80%"}>
                        <Typography
                          variant="h6"
                          fontSize={"18px"}
                          fontWeight={"600"}
                        >
                          Use Instant Book
                        </Typography>
                        <Typography variant="h6" fontSize={"16px"}>
                          Geustes can book automaticlly.
                        </Typography>
                      </Box>
                      <Icon
                        icon="bi:lightning-charge"
                        style={{ fontSize: "40px" }}
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
                onClick={() => handleBoxClick(2)}
              >
                <CardActionArea sx={{ padding: "0px", margin: "0px" }}>
                  <CardContent>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Box width={"80%"}>
                        <Typography
                          variant="h6"
                          fontSize={"18px"}
                          fontWeight={"600"}
                        >
                          Approve or decline requests
                        </Typography>
                        <Typography variant="h6" fontSize={"16px"}>
                          Geustes must ask if they can book.
                        </Typography>
                      </Box>
                      <Icon icon="mi:message" style={{ fontSize: "40px" }} />
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

export default Decide;
