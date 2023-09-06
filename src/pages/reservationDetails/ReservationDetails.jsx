import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import {
  FavoriteOutlined,
  Share,
  Wifi,
  DriveEta,
  LocationCity,
  Tv,
  DriveEtaOutlined,
  Camera,
} from "@mui/icons-material";
import assets from "../../assets";
// import WhenDate from "../../components/searchFilter/WhenDate";
import Reserve from "../../components/Reserve";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ReservationDetails() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            fontSize={"24px"}
            color={"primary.main"}
            fontWeight={"600"}
          >
            Casa Ricca Huahin
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              variant="text"
              fontSize={"16px"}
              mt={"10px"}
              color={"primary.main"}
            >
              Tambon Cha-am, Chang Wat Phetchaburi, Thailand
            </Typography>

            <Box>
              <Button
                startIcon={<Share />}
                variant="text"
                sx={{ textTransform: "capitalize" }}
              >
                Share
              </Button>
              <Button
                startIcon={<FavoriteOutlined />}
                variant="text"
                sx={{ textTransform: "capitalize" }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <ImageList
            sx={{ width: "100%", borderRadius: "20px" }}
            variant="quilted"
            cols={4}
            rowHeight={141}
          >
            {itemData.map((item, index) => (
              <ImageListItem
                key={index}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                mb={"20px"}
              >
                <Box>
                  <Typography
                    mb={"10px"}
                    variant="h3"
                    fontSize={"22px"}
                    color={"primary.main"}
                    fontWeight={"600"}
                  >
                    Entire home hosted by Massupha
                  </Typography>
                  <Typography
                    variant="text"
                    fontSize={"15px"}
                    color={"primary.main"}
                  >
                    16+ guests . 5 bedrooms . 9 beds . 6 baths
                  </Typography>
                </Box>
                <Avatar
                  alt="Remy Sharp"
                  src={assets.images.avatar}
                  sx={{ width: 60, height: 60 }}
                />
              </Box>
              <Divider />
              <Box display={"flex"} my={4} flexDirection={"row"}>
                <Box mr={3}>
                  <Wifi color={"primary.main"} />
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    fontSize={"17px"}
                    color={"primary.main"}
                    fontWeight={"600"}
                  >
                    Fast wifi
                  </Typography>
                  <Typography
                    variant="text"
                    fontSize={"14px"}
                    color={"primary.main"}
                  >
                    At 73 Mbps, you can take video calls and stream videos for
                    your whole group.
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} my={4} flexDirection={"row"}>
                <Box mr={3}>
                  <DriveEta color={"primary.main"} />
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    fontSize={"17px"}
                    color={"primary.main"}
                    fontWeight={"600"}
                  >
                    Dive right in
                  </Typography>
                  <Typography
                    variant="text"
                    fontSize={"14px"}
                    color={"primary.main"}
                  >
                    This is one of the few places in the area with a pool.
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} my={4} flexDirection={"row"}>
                <Box mr={3}>
                  <LocationCity color={"primary.main"} />
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    fontSize={"17px"}
                    color={"primary.main"}
                    fontWeight={"600"}
                  >
                    Great location
                  </Typography>
                  <Typography
                    variant="text"
                    fontSize={"14px"}
                    color={"primary.main"}
                  >
                    90% of recent guests gave the location a 5-star rating.
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box sx={{ my: "40px" }}>
                <Typography
                  variant="text"
                  fontSize={"14px"}
                  color={"primary.main"}
                >
                  We keep it simple here. 1 km walk from Pai walking street.
                  Peaceful setting tucked away from all the noise. Rise with
                  rooster crowing in the morning with cat and dog playing in the
                  garden, walk in the paddy field and feed the cow with banana
                  during the day, and enjoy quite afternoon sun set.
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ my: "40px" }}>
                <Typography
                  variant="h6"
                  fontSize={"16px"}
                  fontWeight={"600"}
                  color={"primary.main"}
                  mb={3}
                >
                  What this place offers
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box display={"flex"} flexDirection={"row"}>
                      <Box mr={3}>
                        <Wifi color={"primary.main"} />
                      </Box>
                      <Box>
                        <Typography
                          variant="text"
                          fontSize={"14px"}
                          color={"primary.main"}
                        >
                          Wifi
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display={"flex"} flexDirection={"row"}>
                      <Box mr={3}>
                        <Tv color={"primary.main"} />
                      </Box>
                      <Box>
                        <Typography
                          variant="text"
                          fontSize={"14px"}
                          color={"primary.main"}
                        >
                          TV
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display={"flex"} flexDirection={"row"}>
                      <Box mr={3}>
                        <DriveEtaOutlined color={"primary.main"} />
                      </Box>
                      <Box>
                        <Typography
                          variant="text"
                          fontSize={"14px"}
                          color={"primary.main"}
                        >
                          Free parking on premises
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box display={"flex"} flexDirection={"row"}>
                      <Box mr={3}>
                        <Camera color={"primary.main"} />
                      </Box>
                      <Box>
                        <Typography
                          variant="text"
                          fontSize={"14px"}
                          color={"primary.main"}
                        >
                          Security cameras on property
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Button sx={{ mt: "20px" }} variant="outlined">
                      Show all 28 amenities
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              <Divider />
              {/* <Box sx={{ my: "40px" }}>
                <Typography
                  variant="h6"
                  fontSize={"18px"}
                  fontWeight={"600"}
                  color={"primary.main"}
                  mb={1}
                >
                  8 night
                </Typography>
                <Typography
                  variant="text"
                  fontSize={"14px"}
                  color={"primary.main"}
                  mb={3}
                >
                  Aug 10, 2023 - Aug 18, 2023
                </Typography>
                <Box  mt={3}> 
                  <WhenDate />
                </Box>
              </Box> */}
            </Grid>
            <Grid item xs={4}>
              <Reserve />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1683475962510-cd4e8de64fac",
    title: "Coffee",
  },
];
