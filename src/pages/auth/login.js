import React, { useState } from 'react';
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
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

import assets from '../../assets';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuthAction } from '../../redux/actions/userAction';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const credentials = { email, password }; 
      console.log(email);
      console.log(password);
      const user = await dispatch(getAuthAction(credentials));

      // Handle successful login, e.g., redirect to a protected route
      console.log('User logged in:', user);
    } catch (error) {
      // Handle login failure
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background:
          'linear-gradient(to right top, #d16ba5, #cb88c2, #c6a2d7, #c5bae4, #cdd0eb, #cdd9f3, #cfe2f9, #d1ebfe, #b8efff, #9af3ff, #7af8ff, #5ffbf1)',
      }}
    >
      <Box p={4}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100%"
            >
              <Box p={2}>
                <img
                  src={assets.images.logo}
                  alt="Airbnb Logo"
                  style={{
                    height: '80px',
                    cursor: 'pointer',
                    border: '1px solid #f3f3f3',
                  }}
                />
                <Box p={2}>
                  <Typography variant="body1">
                    Explore the ideas throughout the world
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              boxShadow={'0px 0px 18px 0px #6363633b'}
              p={3}
              textAlign={'center'}
              sx={{
                width: '100%',
              }}
            >
              <Typography variant="h4">Sign In</Typography>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box pt={5}>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    label="Email"
                    fullWidth
                  />
                </Box>
                <Box pt={3}>
                  <FormControl sx={{ width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      onChange={(e) => setPassword(e.target.value)}
                      id="outlined-adornment-password"
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Box>
                <Box
                  pt={4}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Link to="/register">
                    <Typography variant="body2">Sign Up</Typography>
                  </Link>
                  <Button
                    type="submit"
                    disabled={loading}
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid> 
      </Box>
    </Box>
  );
};

export default LoginScreen;
