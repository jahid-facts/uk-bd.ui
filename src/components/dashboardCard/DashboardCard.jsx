import { Icon } from "@iconify/react";
import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";

const DashboardCard = ({ icon, title, subTitle, countNumber, color }) => {
  return (
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
      <Box display={"flex"} alignItems={"center"} p={3}>
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
          <Icon icon={icon} style={{ fontSize: "30px", color: color }} />
        </Box>
        <Box>
          <Typography variant="body1" fontSize={"14px"} color={"#7f7f7f"}>
            {subTitle}
          </Typography>
          <Typography variant="h5" fontWeight={"bold"}>
            {countNumber}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={"600"}
            fontSize={"14px"}
            color={"#7f7f7f"}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default DashboardCard;
