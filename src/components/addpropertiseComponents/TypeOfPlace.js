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

const TypeOfPlace = () => {
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
    padding: "10px"
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
            marginBottom: '120px'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} mb={3}>
              <h1>What type of place will guests have?</h1>
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
                <CardActionArea sx={{padding:'0px', margin: '0px'}}>
                  <CardContent>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box width={'80%'}>
                    <Typography
                      variant="h6"
                      fontSize={"18px"}
                      fontWeight={"600"}
                    >
                      An entrie plase
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={"16px"}
                    >
                      Geustes have the whole plase to themeselves
                    </Typography>
                    </Box>
                    <Icon
                      icon="ant-design:home-outlined"
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
                <CardActionArea sx={{padding:'0px', margin: '0px'}}>
                  <CardContent>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box width={'80%'}>
                    <Typography
                      variant="h6"
                      fontSize={"18px"}
                      fontWeight={"600"}
                    >
                      A room
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={"16px"}
                    >
                      Geustes have their own room in a home, and access to sheared spaces
                    </Typography>
                    </Box>
                    <Icon
                      icon="emojione-monotone:house"
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
                  ...(activeBox === 3 ? activeBoxStyles : {}),
                  boxShadow: "none",
                }}
                onClick={() => handleBoxClick(3)} 
              >
                <CardActionArea sx={{padding:'0px', margin: '0px'}}>
                  <CardContent>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Box width={'80%'}> 
                    <Typography
                      variant="h6"
                      fontSize={"18px"}
                      fontWeight={"600"}
                    >
                      A sheared room
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={"16px"}
                    >
                      Geustes sleep in a room or common area that may be sheared with your or others
                    </Typography>
                    </Box>
                    <Icon
                      icon="mdi:users-outline"
                      style={{ fontSize: "40px" }}
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

export default TypeOfPlace;
