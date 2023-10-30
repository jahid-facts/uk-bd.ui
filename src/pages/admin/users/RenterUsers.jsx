import React, { useEffect, useState } from "react";
import DataTable from "../../../components/dataTable/DataTable";
import AdminLayout from "../../../layouts/adminLayout";
import { Box, Button, Chip, Grid, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import CustomHashLoader from "../../../components/customLoader/CustomHashLoader";
import Capitalize from "../../../components/capitalize/Capitalize";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/features/UsersSlice";
import { putApi } from "../../../config/configAxios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { MoreHoriz } from "@mui/icons-material";
import { DropdownMenu } from "../../../components/dropdown";
import { useNavigate } from "react-router-dom";

const RenterUsers = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleEditClick = async (rowId, event) => {
    // Prevent the default checkbox behavior when clicking "Edit"
    event.preventDefault();
    Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to disabled this property?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, disabled it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const data = { status: "disabled" };
          await putApi(`/properties/${rowId}`, data);
          toast.success("Successfully status updated");
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
  };

  const handleDeleteClick = (rowId, event) => {
    // Prevent the default checkbox behavior when clicking "Delete"
    event.preventDefault();

    // Implement your delete logic here (e.g., open a confirmation dialog)
    console.log(`Delete clicked for row with ID ${rowId}`);
  };
  const handleViewClick = (rowId, event) => {
    // Prevent the default checkbox behavior when clicking "Delete"
    event.preventDefault();

    // Implement your delete logic here (e.g., open a confirmation dialog)
    console.log(`Delete clicked for row with ID ${rowId}`);
  };

  useEffect(() => {
    dispatch(getAllUsers())
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching users:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    const filteredUsers = users
      .filter((user) => user.type === "renter")
      .map((user, index) => ({
        userId: user._id,
        id: index + 1,
        image: user?.avatar.url || "",
        name: user?.name || "",
        email: user?.email || "",
        status: user?.status || "active",
        userType: "renter",
      }));

    setData(filteredUsers);
  }, [users]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      renderCell: (params) => {
        if (params.row.status === "active") {
          return <Chip label={Capitalize(params.row.status)} color="success" />;
        } else if (params.row.status === "disabled") {
          return <Chip label={Capitalize(params.row.status)} color="danger" />;
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
          <IconButton onClick={(event) => handleMenuOpen(event)}>
            <MoreHoriz />
          </IconButton>
          <DropdownMenu
            anchorEl={anchorEl}
            handleMenuClose={handleMenuClose}
            handleAction={handleAction}
            actionItems={actionItems}
            id={params.row.itemId}
          />
        </Box>
      ),
    },
    // Add more columns as needed
  ];

   /// handle action
   const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const updatedStatus = async (propertyId, data) => {
    try {
      await putApi(`/properties/${propertyId}`, data);
      toast.success("Successfully status updated");
      setLoading(false);
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error(error.data.message);
    }
  };

  const handleAction = async (actionType, id) => {
    switch (actionType) {
      case "active":
        Swal.fire({
          title: "Confirm Active",
          text: "Are you sure you want to active this item?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, active it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const data = { status: "active" };
              updatedStatus(id, data);
            } catch (error) {
              console.error("Error deleting property:", error);
              Swal.fire(
                "Error",
                "An error occurred while active the item.",
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
    { type: "active" },
  ];

  return (
    <AdminLayout title={"Renter users"}>
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

export default RenterUsers;
