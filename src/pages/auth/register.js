import * as React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  TextField,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import assets from "../../assets";
import { Link } from "react-router-dom"; 

const RegisterScreen = () => { 
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => { 
    event.preventDefault();
  };

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
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="center" alignItems="center" 
                minHeight="100%" >
                <Box p={2}>
                <img
                  src={assets.images.logo}
                  alt="Logo"
                  style={{
                    height: "80px",
                    cursor: "pointer",
                    border: "1px solid #f3f3f3",
                  }}
                />
                <Box p={2}></Box>
                <p>
                  Explore the ideas throughtout the world
                </p>
                </Box>

              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                boxShadow={"0px 0px 18px 0px #6363633b"}
                p={3}
                textAlign={"center"}
                sx={{
                  width: " 100%",
                }}
              >
                <h1>Sing Up</h1>
                <form noValidate autoComplete="off">
                  <Box pt={5}> </Box>
                  <TextField id="standard-basic" label="Email" fullWidth />
                  <Box pt={3}> </Box>
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  <Box pt={4} display={'flex'} justifyContent={'space-between'}>
                  
                  <Link to={'/login'} >
                    <Typography variant="text">
                      Sing In
                    </Typography>
                    </Link>
                    <Button variant="contained" color="primary">
                      Register
                    </Button>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default RegisterScreen;
