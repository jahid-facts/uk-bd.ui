import React from "react";
import { Box, Drawer, Typography, Grid } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Icon } from "@iconify/react";

const OpenAmenitiseList = ({ open, onClose, amenitiseItem }) => {
  const closeDrawer = () => {
    onClose();
  };

  return (
    <div>
      <Drawer anchor="bottom" open={open} onClose={closeDrawer}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "650px",
                },
                margin: "auto",
                marginBottom: "130px",
                mt: 3,
              }}
            >
              <Grid container spacing={2}>
                {amenitiseItem?.map((item) => (
                  <Grid item xs={12} sm={6} key={item._id}>
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      sx={{
                        padding: 2,
                        bgcolor: "#f6f6f6",
                        borderRadius: "10px",
                      }} 
                    >
                      <Box mr={3}>
                        <Icon icon={item.icon} fontSize={"22px"} />
                      </Box>
                      <Box>
                        <Typography
                          variant="text"
                          fontSize={"14px"}
                          color={"primary.main"}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box
              position={"fixed"}
              bottom={0}
              left={0}
              right={0}
              display={"flex"}
              justifyContent={"center"}
            >
              <Box
                onClick={closeDrawer}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "fit-content",
                  px: "20px",
                  py: "8px",
                  m: "15px",
                  cursor: "pointer",
                  borderRadius: "10px",
                  bgcolor: "secondary.main",
                  color: "primary.contrastText",
                }}
              >
                <Close sx={{ marginLeft: "5px" }} />
                <Typography variant="text"> Close </Typography>
              </Box>
            </Box>
          </>
        </div>
      </Drawer>
    </div>
  );
};

export default OpenAmenitiseList;
