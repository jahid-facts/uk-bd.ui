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
import React, { useState } from "react";

const PlaceDescibe = () => {
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
            marginBottom: '120px'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}  mb={2}>
              <h1>Which of these best describes your place?</h1>
            </Grid>
            <Grid item xs={6} md={4} p={'0px'}>
                <Card
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(activeBox === 1 ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(1)}
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="ant-design:home-outlined"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>House</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(activeBox === 2 ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(2)}
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="emojione-monotone:house"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Appartment</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card 
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(activeBox === 3 ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(3)} 
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="pepicons-pop:fire"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Barn</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card 
                 sx={{
                  border: '1px solid #999',
                  ...boxStyles,
                  ...(activeBox === 4 ? activeBoxStyles : {}),
                  boxShadow:'none',
                }}
                  onClick={() => handleBoxClick(4)} 
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="map:boat-tour"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Boat</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card 
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(activeBox === 5 ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(5)} 
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="ic:baseline-cabin"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Cabin</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card 
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(activeBox === 6 ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(6)} 
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="carbon:cabin-care-alt"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Ramper/RV</Typography>
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

export default PlaceDescibe;
