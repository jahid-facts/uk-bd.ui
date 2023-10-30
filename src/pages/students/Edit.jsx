import React, { useEffect, useState } from "react";
import { AppLayout } from "../../layouts/appLayout";
import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Edit = () => {
  const [message, setMessage] = useState("");
  const { id } = useParams();

  // form control all state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/edit/${id}`)
      .then((response) => {
        setName(response.data.student.name);
        setAge(response.data.student.age);
        setCity(response.data.student.city);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const data1 = {
      id: id,
      name: name,
      age: age,
      city: city,
    };

    axios
      .put(`${process.env.REACT_APP_BASE_URL}/update`, data1)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <AppLayout>
      <Container maxWidth={"xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} sx={{ p: 20 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
              Student Edit
            </Typography>

            {message && <Alert severity="success">{message && message}</Alert>}
            <form onSubmit={(e) => handleUpdate(e)}>
              <TextField
                id="outlined-basic"
                fullWidth
                sx={{ mt: 3 }}
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                fullWidth
                sx={{ mt: 3 }}
                label="Age"
                variant="outlined"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                fullWidth
                sx={{ mt: 3 }}
                label="City"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Button
                variant="contained"
                fullWidth
                type="submit"
                color="primary"
                size="large"
                sx={{ my: 3 }}
              >
                Update Student
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};
