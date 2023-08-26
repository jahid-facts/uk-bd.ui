
import * as React from "react";
import {
  Box,
  Grid,
} from "@mui/material";

import assets from "../../assets";
import { Link } from "react-router-dom";

export const PageNotFound = () => {


  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          background:
            "linear-gradient(to right top, #d16ba5, #cb88c2, #c6a2d7, #c5bae4, #cdd0eb, #cdd9f3, #cfe2f9, #d1ebfe, #b8efff, #9af3ff, #7af8ff, #5ffbf1)",
        }}
      >
        <Box p={4} sx={{}}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box textAlign={'center'} >
                <Box p={2} textAlign={'center'}>
                <Link to={'/'}>
                <img
                  src={assets.images.logo}
                  alt="Logo"
                  style={{
                    height: "80px",
                    cursor: "pointer",
                    border: "1px solid #f3f3f3",
                  }}
                />
                </Link>
                <Box p={2}></Box>
                <h1>404</h1>
                <p>
                  Page not found
                </p>
                </Box>

              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

