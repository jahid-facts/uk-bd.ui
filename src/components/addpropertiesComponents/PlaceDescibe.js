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
import { getApi } from "../../config/configAxios";
import CustomHashLoader from "../customLoader/CustomHashLoader";

const PlaceDescibe = ({ setStepValue, values }) => {
  const [activeBox, setActiveBox] = useState(values.placeDescibe || null);
  const [amenities, setAmenities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getApi("/amenities")
      .then((response) => setAmenities(response.data.amenities))
      .catch((error) => console.log("error", error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleBoxClick = (boxId) => {
    if (activeBox === boxId) {
      setActiveBox(null);
    } else {
      setActiveBox(boxId);
    }
  };

  useEffect(() => {
    setStepValue("placeDescibe", activeBox);
  }, [activeBox, setStepValue]);

  const boxStyles = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
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
          {loading ? (
            <CustomHashLoader />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} mb={2}>
                <h1>Which of these best describes your place?</h1>
              </Grid>
              {amenities.map(
                (data) =>
                  data.type === "describe" && (
                    <Grid item xs={6} md={4} key={data._id}>
                      <Card
                        sx={{
                          border: "1px solid #999",
                          ...boxStyles,
                          ...(activeBox === data._id ||
                          values.placeDescibe === data._id
                            ? activeBoxStyles
                            : {}),
                          boxShadow: "none",
                        }}
                        onClick={() => handleBoxClick(data._id)}
                      >
                        <CardActionArea>
                          <CardContent>
                            <Icon
                              icon={data.icon}
                              style={{ fontSize: "24px" }}
                            />
                            <Typography
                              variant="h6"
                              fontSize={"16px"}
                              fontWeight={"700"}
                            >
                              {data.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  )
              )}
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
};

export default PlaceDescibe;
