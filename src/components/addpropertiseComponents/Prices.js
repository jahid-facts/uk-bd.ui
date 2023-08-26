import { Icon } from "@iconify/react";
import {
  Box,
  Container,
  Grid,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Prices = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "650px",
            },
            margin: "auto",
            marginBottom: "120px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} mb={2}>
              <h1>Now, set your price</h1>
              <Typography variant="text" mt={2}>
                You can change it anytime.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                textAlign={"center"}
                mr={2}
                sx={{
                  border: '1px solid #c3c3c3',
                  borderRadius: '10px',
                  display: "flex",
                  alignItems: "center",
                  margin:'auto', 
                }}
              >
                <Input
                  inputProps={{
                    maxLength: 10,
                    style: {
                      // width: "25px",
                      fontWeight: "bold",
                      fontSize: "80px",
                      padding: "30px",
                    },
                  }}
                  startAdornment={
                    <InputAdornment
                      sx={{
                        mr: "10px",
                        ml: "20px",
                      }}
                      position="start"
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "80px",
                        }}
                      >
                        $
                      </span>
                    </InputAdornment>
                  }
                  disableUnderline
                />
                {/* <Icon
                      icon="ep:edit"
                      style={{ fontSize: "40px" }}
                    /> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Prices;
