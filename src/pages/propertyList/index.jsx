import React, { useEffect, useState } from "react";
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
import { theme } from "../../theme";
import {
  AddCircleRounded,
  Close,
  FilterAltRounded,
  MoreVert,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/userDashboard";
import { getApiById, putApi } from "../../config/configAxios";
import { useAuthInfo } from "../../helpers/AuthCheck";
import CustomHashLoader from "../../components/customLoader/CustomHashLoader";
import { DropdownMenu } from "../../components/dropdown";
import Swal from "sweetalert2";
import { NoRecord } from "../../components/noRecord";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getUserProperties } from "../../redux/features/UserPropertiesSlice";

const PropertyList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filter, setFilter] = useState(null);
  const [userProperties, setUserProperties] = useState([]);
  const [originalProperties, setOriginalProperties] = useState([]);
  const userInfo = useAuthInfo();
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dispatch = useDispatch();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const updatedStatus = async (propertyId, data) => {
    setLoading(true);
    try {
      await putApi(`/properties/${propertyId}`, data).then((res)=>{
        propertiesData();
        toast.success("Successfully status updated");
      });
      // setLoading(false);
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error(error.data.message);
    }
  };

  const handleAction = async (actionType, id) => {
    switch (actionType) {
      case "active":
        // Handle Active action
        try {
          const response = await getApiById(`/edit/property/${id}`, id);
          if (response.data.property.images.length > 4) {
            const data = { status: "active" };
            updatedStatus(id, data);
           
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "There should be more than 4 images",
            });
            setLoading(false);
          }
        } catch (error) {
          console.error("Internal server error:", error.message);
        }
        break;
      case "de-active":
        const data = { status: "de-active" };
        updatedStatus(id, data);
        break;
      case "delete":
        // Handle Delete action
        Swal.fire({
          title: "Confirm Delete",
          text: "Are you sure you want to delete this item?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const data = { status: "disabled" };
              updatedStatus(id, data);
            } catch (error) {
              console.error("Error deleting property:", error);
              Swal.fire(
                "Error",
                "An error occurred while deleting the item.",
                "error"
              );
            }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire("Cancelled", "The item was not deleted.", "info");
          }
        });
        break;
      // Add more cases for other actions as needed
      default:
        break;
    }

    handleMenuClose();
  };

  // Define an array of action items
  const actionItems = [
    { type: "active" },
    { type: "de-active" },
    { type: "delete" },
  ];

  // filter option
  const options = [
    { label: "Active", value: "active" },
    { label: "De-Active", value: "de-active" },
    { label: "In progress", value: "in progress" },
  ];

  const handleFilterOpen = (event) => {
    setFilter(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilter(null);
  };

  const handleFilterToggle = (filterValue) => {
    setLoading(true);
    const isFilterSelected = selectedFilters.includes(filterValue);

    if (isFilterSelected) {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== filterValue)
      );
    } else {
      setSelectedFilters((prevFilters) => [...prevFilters, filterValue]);
    }
  };

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setUserProperties(originalProperties);
    } else {
      const filteredProperties = originalProperties.filter((property) => {
        return selectedFilters.includes(property.status.toLowerCase());
      });

      setUserProperties(filteredProperties);
    }
    setLoading(false);
  }, [selectedFilters, originalProperties]);

  // get properties data
  const propertiesData = () => {
    setLoading(true);
    dispatch(getUserProperties(userInfo._id))
      .then((res) => {
        setUserProperties(res.payload);
        setOriginalProperties(res.payload);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    propertiesData();
  }, [dispatch, userInfo._id]);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

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
                <Link to={"/add-properties"}>
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
          <Divider sx={{ mb: 2 }} />
        </Grid>
        {loading ? (
          <CustomHashLoader />
        ) : (
          <>
            {Array.isArray(userProperties) && userProperties.length > 0 ? (
              userProperties.map((data) => (
                <Grid key={data._id} item xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      boxShadow: theme.palette.boxShadow,
                      borderRadius: "15px",
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Box
                      position={"absolute"}
                      top={"15px"}
                      right={"15px"}
                      zIndex={2}
                    >
                      <Chip
                        label={capitalizeFirstLetter(data.status)}
                        color={
                          data.status.toLowerCase() === "active"
                            ? "primary"
                            : "secondary"
                        }
                        size="small"
                      />
                    </Box>

                    <CardActionArea>
                      {data.images?.length > 0 && (
                        <CardMedia
                          component="img"
                          height="140"
                          image={data.images[0].url}
                          alt="Property Image"
                        />
                      )}
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          fontSize={"18px"}
                          fontWeight={600}
                        >
                          {data.title.length > 30
                            ? data.title.substring(0, 30)
                            : data.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {data.description.length > 60
                            ? data.description.substring(0, 60)
                            : data.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      px={2}
                      pb={2}
                    >
                      <Link to={`/edit/property/${data._id}`}>
                        <Button
                          size="small"
                          sx={{
                            textTransform: "capitalize",
                            color: "#2980b9",
                          }}
                        >
                          View and Edit
                        </Button>
                      </Link>

                      <IconButton onClick={(event) => handleMenuOpen(event)}>
                        <MoreVert />
                      </IconButton>
                      <DropdownMenu
                        anchorEl={anchorEl}
                        handleMenuClose={handleMenuClose}
                        handleAction={handleAction}
                        actionItems={actionItems}
                        id={data._id}
                      />
                    </Box>
                  </Card>
                </Grid>
              ))
            ) : (
              <NoRecord />
            )}
          </>
        )}
      </Grid>

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
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={selectedFilters.includes(option.value)}
                    onChange={() => handleFilterToggle(option.value)}
                  />
                }
                label={option.label}
                sx={{ textTransform: "capitalize" }}
              />
            ))}
          </FormGroup>
          <Button
            size="small"
            variant="contained"
            color={"secondary"}
            onClick={handleFilterClose}
            sx={{ mt: 1, textTransform: "capitalize" }}
          >
            <Close sx={{ fontSize: "16px" }} /> Close
          </Button>
        </Box>
      </Popover>
    </DashboardLayout>
  );
};

export default PropertyList;
