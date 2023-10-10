import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import {
  ApartmentOutlined,
  AttachMoney,
  BarChart,
  MonetizationOnOutlined,
} from "@mui/icons-material";
import { theme } from "../../theme";
import DashboardLayout from "../../layouts/userDashboard";
import DashboardCard from "../../components/dashboardCard/DashboardCard";

const Hosting = () => {
  return (
    <DashboardLayout title={"Hosting"}>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <DashboardCard
              icon={"clarity:dashboard-line"}
              title={"Spend this month"}
              subTitle={"Total"}
              countNumber={"$654"}
              color={"#2980b9"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DashboardCard
              icon={"mdi:dollar"}
              title={"Earnings"}
              subTitle={"Total"}
              countNumber={"$642.39"}
              color={"#27ae60"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                boxShadow: theme.palette.boxShadow,
                borderRadius: "20px",
                position: "relative",
                width: "100%",
                height: "100%",
                bgcolor: "#ffffff",
              }}
            >
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
                  <Typography
                    variant="body1"
                    fontSize={"14px"}
                    color={"#7f7f7f"}
                  >
                    <span style={{ color: "#27ae60" }}> +23%</span> since last
                    month
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <DashboardCard
              icon={"tdesign:building"}
              title={"Active property"}
              subTitle={"Total"}
              countNumber={"65"}
              color={"#FF6AC2"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DashboardCard
              icon={"clarity:building-line"}
              title={"Active property renting"}
              subTitle={"Total"}
              countNumber={"30"}
              color={"#ff0000"}
            />
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
};

export default Hosting;
