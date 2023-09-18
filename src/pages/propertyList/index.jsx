import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
  Box,
  Popover,
  Chip,
  TextField,
  InputAdornment,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import images from "../home/Images";
import { theme } from "../../theme";
import {
  AddCircleRounded,
  Close,
  FilterAltRounded,
  MoreVert,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard";

const PropertyList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filter, setFilter] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const options = [
    { label: "Active", value: "active" },
    { label: "De-Active", value: "De-Active" },
    { label: "Room", value: "room" },
  ];
  const handleFilterOpen = (event) => {
    setFilter(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilter(null);
  };
 
  return (
    <DashboardLayout title={"Property list"}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                sx={{ width: "99%" }}
                variant="outlined"
                size="small"
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                  style: { border: "1px solid #ccc", borderRadius: "5px" },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box display="flex" justifyContent={"flex-end"}>
                <Button
                  onClick={handleFilterOpen}
                  sx={{
                    mr: 2,
                    textTransform: "capitalize",
                    borderRadius: "30px",
                  }}
                  variant="outlined"
                  color="primary"
                >
                  <FilterAltRounded sx={{ color: "f3f3f3", pr: 1 }} />
                  Filters
                </Button>
                <Link to={"/add-propertise"}>
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "30px",
                    }}
                    variant="outlined"
                    color="primary"
                  >
                    <AddCircleRounded sx={{ color: "f3f3f3", pr: 1 }} />
                    Property listing
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{mb:2}} />
        </Grid>
        {images.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Box position={"relative"}>
              <Box position={"absolute"} top={"15px"} right={"15px"} zIndex={2}>
                <Chip
                  label={card.status}
                  color={
                    card.status.toLowerCase() === "active"
                      ? "primary"
                      : "secondary"
                  }
                  size="small"
                />
              </Box>

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
            </Box>
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

      <Popover
        open={Boolean(filter)}
        anchorEl={filter}
        onClose={handleFilterClose}
        sx={{
          top: "45px",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{ 
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box display={"flex"} flexDirection={"column"} p={3}>
          <FormGroup>
            {options.map((option, index) => (
              <>
                <FormControlLabel
                  key={index}
                  control={<Checkbox />}
                  label={option.label}
                  sx={{ textTransform: "capitalize" }}
                  // onClick={handleFilterClose}
                />
                <Divider />
              </>
            ))}
          </FormGroup>
          {/* Add more menu options as needed */}
          <Button onClick={handleFilterClose} sx={{ mt: 1 }}>
            <Close sx={{ color: "#ff0000", fontSize: "14px" }} />
          </Button>
        </Box>
      </Popover>
    </DashboardLayout>
  );
};

export default PropertyList;
