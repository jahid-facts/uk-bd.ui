import React, { useEffect, useState } from "react";
import DataTable from "../../../components/dataTable/DataTable";
import AdminLayout from "../../../layouts/adminLayout";
import { Box, Chip, Grid, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CustomHashLoader from "../../../components/customLoader/CustomHashLoader";
import { useNavigate } from "react-router-dom";
import Capitalize from "../../../components/capitalize/Capitalize";
import { getAllProperties } from "../../../redux/features/AllPropertyForAdminSlice";
import { MoreHoriz } from "@mui/icons-material";
import { DropdownMenu } from "../../../components/dropdown";
import Swal from "sweetalert2";
import { putApi } from "../../../config/configAxios";
import { toast } from "react-toastify";

const Properties = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state?.allPropertyForAdmin);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // if (properties.length > 0) {
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 1000);
    // }
    setLoading(true);
    dispatch(getAllProperties())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [dispatch, properties.length]);

  useEffect(() => {
    // Update the 'data' array when 'properties' state changes
    const newData = properties.map((property, index) => ({
      itemId: property._id,
      id: index + 1,
      image: property.images[0]?.url || "",
      placeDescribes: property.placeDescribesId?.title || "",
      status: property.status || "",
      price: property.price + "$" || "",
      located:
        (property.located?.address?.state || "") +
        ", " +
        (property.located?.address?.country || ""),
    }));
    setData(newData);
  }, [properties]);

  const [itemId, setItemId] = useState();
  const handleMenuOpen = (event, itemId) => {
    setAnchorEl(event.currentTarget);
    setItemId(itemId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const updatedStatus = async (propertyId, data) => {
    try {
      setLoading(true);
      await putApi(`/properties/${propertyId}`, data).then((res) => {
        if (res.status === 200) {
          dispatch(getAllProperties()).then(() => {
            setLoading(false);
            toast.success("Successfully status updated");
          });
        }
      });
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error(error.data.message);
    }
  };

  const handleAction = (id, actionType) => {
    switch (actionType) {
      case "de-active":
        Swal.fire({
          title: "Confirm De-active",
          text: "Are you sure you want to de-active this item?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, de-active it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const data = { status: "de-active" };
              updatedStatus(id, data);
            } catch (error) {
              console.error("Error deleting property:", error);
              Swal.fire(
                "Error",
                "An error occurred while de-active the item.",
                "error"
              );
            }
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire("Cancelled", "The item was not disabled.", "info");
          }
        });
        break;
      case "view":
        navigate(`/reservation-details/${id}`);
        break;
      case "disabled":
        Swal.fire({
          title: "Confirm Disable",
          text: "Are you sure you want to disable this item?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, disable it!",
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
            Swal.fire("Cancelled", "The item was not disabled.", "info");
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
    { type: "view" },
    { type: "disabled" },
    { type: "de-active" },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "image",
      headerName: "Image",
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <img
          style={{
            paddingTop: "15px",
            paddingBottom: "15px",
            borderRadius: "20px",
            width: "100px",
            boxSizing: "border-box",
          }}
          src={params.row.image}
          alt="Property"
        />
      ),
    },
    { field: "located", headerName: "Location", width: 220 },
    { field: "placeDescribes", headerName: "Place Describes", width: 150 },
    { field: "price", headerName: "Price", width: 100 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      sortable: false,
      renderCell: (params) => {
        const status = params.row.status.toLowerCase(); // Convert status to lowercase

        if (status === "active") {
          return (
            <Chip
              size="small"
              label={Capitalize(status)} // Change to lowercase 'c'
              color="success"
            />
          );
        } else if (status === "de-active") {
          return (
            <Chip
              size="small"
              label={Capitalize(status)} // Change to lowercase 'c'
              color="error"
            />
          );
        } else if (status === "disabled") {
          return (
            <Chip
              size="small"
              label={Capitalize(status)} // Change to lowercase 'c'
              color="info"
            />
          );
        } else if (status === "in progress") {
          // Change to lowercase 'in progress'
          return (
            <Chip
              size="small"
              label={Capitalize(status)} // Change to lowercase 'c'
              color="warning"
            />
          );
        } else {
          // Handle other cases or return a default value if needed
          return null;
        }
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 60,
      sortable: false,
      renderCell: (params) => (
        <Box display="flex">
          <IconButton
            onClick={(event) => handleMenuOpen(event, params.row.itemId)}
          >
            <MoreHoriz />
          </IconButton>
          <DropdownMenu
            anchorEl={anchorEl}
            handleMenuClose={handleMenuClose}
            handleAction={(actionType) => handleAction(itemId, actionType)}
            actionItems={actionItems}
          />
        </Box>
      ),
    },
  ];

  return (
    <AdminLayout title="All properties">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {loading ? (
            <CustomHashLoader />
          ) : (
            <DataTable data={data} columns={columns} />
          )}
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

export default Properties;
