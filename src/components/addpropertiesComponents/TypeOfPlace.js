import { Icon } from "@iconify/react";
import { getApi } from "../../config/configAxios";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomHashLoader from "../customLoader/CustomHashLoader";
 
const TypeOfPlace = ({ setStepValue, values }) => {
  const [activeBox, setActiveBox] = useState(values.typeOfPlace || null);
  const [typeOfPlace, setTypeOfPlace] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getApi("/typeOfPlace")
      .then((response) => setTypeOfPlace(response.data.typeOfPlace))
      .catch((error) => console.log("error", error.message))
      .finally(() => setLoading(false));
  }, []);
  const handleBoxClick = (boxId) => {
    setActiveBox(boxId === activeBox ? null : boxId);
  };

  useEffect(() => {
    setStepValue("typeOfPlace", activeBox);
  }, [activeBox, setStepValue]);

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
      <Container xs={{}}>
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
        {loading ? (
          <CustomHashLoader /> 
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} mb={3}>
              <h1>What type of place will guests have?</h1>
            </Grid>
            {typeOfPlace.map((data) => (
              <Grid item xs={12} key={data._id}>
                <Card
                  sx={{
                    border: "1px solid #999",
                    ...boxStyles,
                    ...(activeBox === data._id ||
                    values.typeOfPlace === data._id
                      ? activeBoxStyles
                      : {}),
                    boxShadow: "none",
                  }}
                  onClick={() => handleBoxClick(data._id)}
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
                            {data.title}
                          </Typography>
                          <Typography variant="h6" fontSize={"16px"}>
                            {data.subtitle}
                          </Typography>
                        </Box>
                        <Icon icon={data.icon} style={{ fontSize: "40px" }} />
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        </Box>
      </Container>
    </>
  );
};

export default TypeOfPlace;
