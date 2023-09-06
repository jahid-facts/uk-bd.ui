import React from "react";
import Layout from "../userDashboardLayout";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
  Box,
  Popover,
} from "@mui/material";
import images from "../home/Images";
import { theme } from "../../theme";
import { Close, MoreVert } from "@mui/icons-material";
import { Link } from "react-router-dom";

const PropertyList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Layout title={"Property list"}>
      <Grid container spacing={2}>
        {images.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: theme.palette.boxShadow,
                borderRadius: "15px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.image1}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontSize={"18px"}
                    fontWeight={600}
                  >
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItem={"center"}
                px={2}
                pb={2}
              >
                <Link to={"/add-propertise"}>
                  <Button
                    size="small"
                    sx={{ textTransform: "capitalize", color: "#2980b9" }}
                  >
                    View and Edit
                  </Button>
                </Link>
                <IconButton onClick={handleMenuOpen}>
                  <MoreVert />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        {/* Buttons in a column */}
        <Box display={"flex"} flexDirection={"column"} p={1}>
          <Button
            sx={{ textTransform: "capitalize" }}
            onClick={handleMenuClose}
          >
            Active
          </Button>
          <Button
            sx={{ textTransform: "capitalize" }}
            onClick={handleMenuClose}
          >
            Push
          </Button>
          <Button
            sx={{ textTransform: "capitalize" }}
            onClick={handleMenuClose}
          >
            Delete
          </Button>
          {/* Add more menu options as needed */}
          <Button
            sx={{ textTransform: "capitalize" }}
            onClick={handleMenuClose}
          >
            <Close sx={{ color: "#ff0000", fontSize: "14px" }} />
          </Button>
        </Box>
      </Popover>
    </Layout>
  );
};

export default PropertyList;
