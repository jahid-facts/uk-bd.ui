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
  Rating,
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
  Star,
  VerifiedUser,
} from "@mui/icons-material";
import assets from "../../assets";
// import WhenDate from "../../components/searchFilter/WhenDate";
import Reserve from "../../components/Reserve";
import { Link } from "react-router-dom";
import Maps from "../../components/leaftLet/Maps";
import OpenImageList from "./ImageList";
import { AppLayout } from "../../layouts/appLayout";
// import Maps from "../../components/leaftLet/Maps";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ReservationDetails() {
  const [selectPosition, setSelectPosition] = React.useState(null);
  const [openImageList, setOpenImageList] = React.useState(false);

  const handleImageLIst = () => {
    setOpenImageList(!openImageList);
  };

  React.useEffect(() => {
    const location = {
      lat: 13.7535,
      lon: 100.4921,
    };
    setSelectPosition(location);
  }, []);

  return (
    <AppLayout>
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
              sx={{
                width: "100%",
                borderRadius: "20px",
                "&:hover": { cursor: "pointer" },
              }}
              variant="quilted"
              cols={4}
              rowHeight={110}
              onClick={handleImageLIst}
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
                  <Link to={"#avater"}>
                    <Avatar
                      alt="Remy Sharp"
                      src={assets.images.avatar}
                      sx={{ width: 60, height: 60 }}
                    />
                  </Link>
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
                    rooster crowing in the morning with cat and dog playing in
                    the garden, walk in the paddy field and feed the cow with
                    banana during the day, and enjoy quite afternoon sun set.
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
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
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
                <Grid container spacing={3}>
                  <Grid item xs={12} mt={4}>
                    <div id="avater"></div>
                    <Box display={"flex"} alignItems={"center"}>
                      <Avatar
                        alt="Remy Sharp"
                        src={assets.images.avatar}
                        sx={{ width: 60, height: 60, mr: 3 }}
                      />
                      <Box>
                        <Typography fontWeight={"bold"} fontSize={"20px"}>
                          Hosted by Nature
                        </Typography>
                        <Typography variant="text" fontSize={"14px"}>
                          Joined in December 2022
                        </Typography>
                      </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"center"}>
                      <Star />
                      <Typography variant="text" m={2}>
                        Review
                      </Typography>
                      <VerifiedUser />
                      <Typography variant="text" m={2}>
                        Identity Verified
                      </Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography variant="text" mt={1}>
                        Response time : within an hour
                      </Typography>
                      <br></br>
                      <Typography variant="text" mt={1}>
                        Last active : tow hour ago
                      </Typography>
                    </Box>
                    <Button
                      sx={{ my: 3, textTransform: "capitalize" }}
                      variant={"contained"}
                      size={"large"}
                    >
                      Contact Host
                    </Button>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 4 }} />
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      fontSize={"18px"}
                      fontWeight={"600"}
                    >
                      Where you’ll be
                    </Typography>
                    <Typography variant="text" mt={1} fontSize={"14px"}>
                      Dhanmondi, Dhaka, Bangladesh
                    </Typography>
                    <Box mt={2} mb={3} height={"300px"}>
                      <Maps selectPosition={selectPosition} />
                    </Box>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 4 }} />
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      fontSize={"18px"}
                      fontWeight={"600"}
                    >
                      Reviews
                    </Typography>
                    <Typography
                      variant="text"
                      fontSize={"15px"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      824 reviews for this property
                      <Rating
                        name="half-rating-read"
                        value={3.5}
                        precision={0.5}
                        readOnly
                        sx={{ mx: 1 }}
                      />
                      4.5
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      mt={2}
                      mb={1}
                      fontSize={"16px"}
                      fontWeight={"600"}
                    >
                      Rating Breakdown
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} style={{ paddingTop: "8px" }}>
                    <Typography
                      variant="text"
                      fontSize={"14px"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      Communication
                      <Rating name="read-only" value={4} readOnly />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} style={{ paddingTop: "8px" }}>
                    <Typography
                      variant="text"
                      fontSize={"14px"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      Recommend
                      <Rating name="read-only" value={5} readOnly />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} style={{ paddingTop: "8px" }}>
                    <Typography
                      variant="text"
                      fontSize={"14px"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      Services
                      <Rating name="read-only" value={2} readOnly />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} style={{ paddingTop: "8px" }}>
                    <Typography
                      variant="text"
                      fontSize={"14px"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      Cleanliness
                      <Rating name="read-only" value={3} readOnly />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} style={{ paddingTop: "8px" }}>
                    <Typography
                      variant="text"
                      fontSize={"14px"}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      Location
                      <Rating name="read-only" value={5} readOnly />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} my={1}>
                    <Box display={"flex"} alignItems={"start"}>
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ width: 40, height: 40, mr: 3 }}
                      />
                      <Box>
                        <Typography fontWeight={"bold"}>Taylor</Typography>
                        <Box>
                          <Typography
                            variant="text"
                            fontSize={"14px"}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <Rating
                              name="Taylor"
                              sx={{ fontSize: "18px" }}
                              value={5}
                              precision={0.5}
                              readOnly
                            />{" "}
                            5
                            <Divider
                              sx={{ mx: 1 }}
                              orientation="vertical"
                              variant="fullWidth"
                              flexItem
                            />{" "}
                            14th December 2022
                          </Typography>
                          <Box mt={1}>
                            <Typography variant="text" fontSize={"14px"}>
                              Absolutely highly recommend! It’s the total
                              experience from the beginning all the way through.
                              The hosts are the professional, engaging and the
                              kindest I’ve ever encountered
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} my={1}>
                    <Box display={"flex"} alignItems={"start"}>
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ width: 40, height: 40, mr: 3 }}
                      />
                      <Box>
                        <Typography fontWeight={"bold"}>Miller</Typography>
                        <Box>
                          <Typography
                            variant="text"
                            fontSize={"14px"}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <Rating
                              name="half-rating-read"
                              sx={{ fontSize: "18px" }}
                              value={3.5}
                              precision={0.5}
                              readOnly
                            />{" "}
                            3.5
                            <Divider
                              sx={{ mx: 1 }}
                              orientation="vertical"
                              variant="fullWidth"
                              flexItem
                            />{" "}
                            14th December 2022
                          </Typography>
                          <Box mt={1}>
                            <Typography variant="text" fontSize={"14px"}>
                              Absolutely highly recommend! It’s the total
                              experience from the beginning all the way through.
                              The hosts are the professional, engaging and the
                              kindest I’ve ever encountered
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} my={1}>
                    <Box display={"flex"} alignItems={"start"}>
                      <Avatar
                        alt="Remy Sharp"
                        sx={{ width: 40, height: 40, mr: 3 }}
                      />
                      <Box>
                        <Typography fontWeight={"bold"}>Devid</Typography>
                        <Box>
                          <Typography
                            variant="text"
                            fontSize={"14px"}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <Rating
                              name="half-rating-read"
                              sx={{ fontSize: "18px" }}
                              value={4}
                              precision={0.5}
                              readOnly
                            />{" "}
                            4
                            <Divider
                              sx={{ mx: 1 }}
                              orientation="vertical"
                              variant="fullWidth"
                              flexItem
                            />{" "}
                            14th December 2022
                          </Typography>
                          <Box mt={1}>
                            <Typography variant="text" fontSize={"14px"}>
                              Absolutely highly recommend! It’s the total
                              experience from the beginning all the way through.
                              The hosts are the professional, engaging and the
                              kindest I’ve ever encountered
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 4 }} />

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
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                      position: "sticky",
                      top: "110px",
                    },
                  }}
                >
                  <Reserve />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <OpenImageList
          open={openImageList}
          onClose={() => setOpenImageList(false)}
        />
      </Container>
    </AppLayout>
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
