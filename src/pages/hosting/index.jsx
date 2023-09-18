import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import {
  ApartmentOutlined,
  AttachMoney,
  BarChart,
  MonetizationOnOutlined,
} from "@mui/icons-material";
import { theme } from "../../theme";
import DashboardLayout from "../../layouts/dashboard";

const Hosting = () => {
  return (
    <DashboardLayout title={'Hosting'}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box
            display={"flex"}
            alignItems={"center"}
            p={3}
            boxShadow={theme.palette.boxShadow}
            bgcolor={"#ffffff"}
            borderRadius={"20px"}
          >
            <Box
              p={1}
              mr={2}
              width={"40px"}
              height={"40px"}
              borderRadius={"50px"}
              bgcolor={"#e0eeff"}
              display={"flex"}
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <BarChart sx={{ fontSize: "30px", color: "#2980b9" }} />
            </Box>
            <Box>
              <Typography variant="body1" fontSize={"14px"} color={"#7f7f7f"}>
                Total
              </Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                $350.4
              </Typography>
              <Typography
                variant="body1"
                fontWeight={"600"}
                fontSize={"14px"}
                color={"#7f7f7f"}
              >
                Earnings
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display={"flex"}
            alignItems={"center"}
            p={3}
            boxShadow={theme.palette.boxShadow}
            bgcolor={"#ffffff"}
            borderRadius={"20px"}
          >
            <Box
              p={1}
              mr={2}
              width={"40px"}
              height={"40px"}
              borderRadius={"50px"}
              bgcolor={"#e0eeff"}
              display={"flex"}
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <AttachMoney sx={{ fontSize: "30px", color: "#27ae60" }} />
            </Box>
            <Box>
              <Typography variant="body1" fontSize={"14px"} color={"#7f7f7f"}>
                Total
              </Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                $642.39
              </Typography>
              <Typography
                variant="body1"
                fontWeight={"600"}
                fontSize={"14px"}
                color={"#7f7f7f"}
              >
                Spend this month
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display={"flex"}
            alignItems={"center"}
            p={3}
            boxShadow={theme.palette.boxShadow}
            bgcolor={"#ffffff"}
            borderRadius={"20px"}
          >
            <Box
              p={1}
              mr={2}
              width={"40px"}
              height={"40px"}
              borderRadius={"50px"}
              bgcolor={"#e0eeff"}
              display={"flex"}
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <MonetizationOnOutlined
                sx={{ fontSize: "30px", color: "#8e44ad" }}
              />
            </Box>
            <Box>
              <Typography
                variant="body1"
                fontSize={"14px"}
                color={"#7f7f7f"}
                fontWeight={"600"}
              >
                Sales
              </Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                $574.34
              </Typography>
              <Typography variant="body1" fontSize={"14px"} color={"#7f7f7f"}>
                <span style={{ color: "#27ae60" }}> +23%</span> since last month
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display={"flex"}
            alignItems={"center"}
            p={3}
            boxShadow={theme.palette.boxShadow}
            bgcolor={"#ffffff"}
            borderRadius={"20px"}
          >
            <Box
              p={1}
              mr={2}
              width={"40px"}
              height={"40px"}
              borderRadius={"50px"}
              bgcolor={"#e0eeff"}
              display={"flex"}
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <ApartmentOutlined sx={{ fontSize: "30px", color: "#f1c40f" }} />
            </Box>
            <Box>
              <Typography variant="body1" fontSize={"14px"} color={"#7f7f7f"}>
                Total
              </Typography>
              <Typography variant="h5" fontWeight={"bold"}>
                4
              </Typography>
              <Typography
                variant="body1"
                fontSize={"14px"}
                color={"#7f7f7f"}
                fontWeight={"600"}
              >
                Active property
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Hosting;
