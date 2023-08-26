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

const Offer = () => {
    const [activeBoxes, setActiveBoxes] = useState([]);

    const handleBoxClick = (boxId) => {
      if (activeBoxes.includes(boxId)) {
        setActiveBoxes(activeBoxes.filter((id) => id !== boxId));
      } else {
        setActiveBoxes([...activeBoxes, boxId]);
      }
    };
  
    const isBoxSelected = (boxId) => activeBoxes.includes(boxId);

  

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
              <h1>Tell guests what your place has to offer</h1>
              <Typography variant="text" mt={2}>
              You can add more amenities after you publish your listing.
              </Typography>
            </Grid>
            <Grid item xs={6} md={4} p={'0px'}>
                <Card
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(isBoxSelected(1) ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(1)}
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="ion:wifi-outline"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Wifi</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(isBoxSelected(2) ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(2)}
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="solar:tv-outline"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>TV</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card 
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(isBoxSelected(3) ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(3)} 
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="material-symbols:soup-kitchen-outline"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Kitchen</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card 
                 sx={{
                  border: '1px solid #999',
                  ...boxStyles,
                  ...(isBoxSelected(4) ? activeBoxStyles : {}),
                  boxShadow:'none',
                }}
                  onClick={() => handleBoxClick(4)} 
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="fluent:washer-48-regular"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Washer</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12}>
            <Box py={3}>
            <Typography variant="text"> 
            Do you have any standout amenities?
              </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card 
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(isBoxSelected(5) ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(5)} 
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="ic:baseline-pool"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Pool</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card 
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(isBoxSelected(6) ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(6)}  
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="ps:piano"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Piano</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Box py={3}>
            <Typography variant="text"> 
            Do you have any of these safety items?
              </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card 
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(isBoxSelected(7) ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(7)} 
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="material-symbols:alarm-outline"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Smoke alarm</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={6} md={4}>
                <Card 
                  sx={{
                    border: '1px solid #999',
                    ...boxStyles,
                    ...(isBoxSelected(8) ? activeBoxStyles : {}),
                    boxShadow:'none',
                  }}
                  onClick={() => handleBoxClick(8)} 
                >
                  <CardActionArea>
                    <CardContent>
                      <Icon
                        icon="ph:fire-extinguisher-fill"
                        style={{ fontSize: "24px" }}
                      />
                      <Typography variant="h6" fontSize={'16px'} fontWeight={'700'}>Fire extinguisher</Typography>
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

export default Offer;
