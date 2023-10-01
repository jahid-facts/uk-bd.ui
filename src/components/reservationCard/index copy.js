import React from "react";
import { Card, CardMedia, Typography, Box, Checkbox } from "@mui/material";
import { Star, Favorite, FavoriteTwoTone } from "@mui/icons-material";
import SlideImage from "../slide";
import { Link } from "react-router-dom";

export default function ReservationCardCopy(props) {
  const { image1, image2, image3, title, subtitle, price, review } = props;

  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        "&:hover": {
          background: "transparent",
        },
        position: "relative",
       maxWidth: 345, 
      }}
    >
      <CardMedia>
        <SlideImage image1={image1} image2={image2} image3={image3} />
      </CardMedia>
      <Box position={"absolute"} top={"10px"} right={"10px"}> 
        <Checkbox
          icon={<FavoriteTwoTone sx={{ fontSize: "29px", color: "#fff" }} />}
          checkedIcon={
            <Favorite sx={{ fontSize: "29px", color: "secondary.main" }} />
          }
        />
      </Box>

      <Link to={`/reservation-details`}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={2}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontWeight={"bold"}
            fontSize={"16px"}
            color="otherColor.main"
          >
            {title}
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Star sx={{ fontSize: "19px", color: "text.secondary" }} />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              fontSize={"15px"}
              justifyItems={"center"}
            >
              {review}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          fontSize={"15px"}
          justifyItems={"center"}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          fontSize={"15px"}
          justifyItems={"center"}
        >
          <span style={{ fontWeight: "bold" }}>${price}</span> night
        </Typography>
      </Link>
    </Card>
  );
}
