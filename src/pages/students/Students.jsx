import React, { useEffect } from "react";
import { AppLayout } from "../../layouts/appLayout";
import {
  Alert,
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // form control all state
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  let studentInfoForSumbut = {
    name: name,
    age: age,
    city: city,
  };

  // handleSubmit for submit all data in database
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/add`, studentInfoForSumbut)
      .then((response) => {
        setMessage(response.data.message);
        fetchStudents();
        setName("");
        setAge("");
        setCity("");
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    // fetch data use api endpoint 'api/students' use axios
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/students`)
      .then((response) => {
        setStudents(response.data.students);
      })
      .catch((err) => console.log(err));
  };

  // handle delete
  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_BASE_URL}/delete/${id}`,)
      .then((response) => {
        setMessage(response.data.message);
        fetchStudents(); 
      })
      .catch((err) => console.log(err));
  };

  // handle edit
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
    
  }
  
  return (
    <AppLayout>
      <Container maxWidth={"xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ p: 20 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
              Student Form
            </Typography>

            {message && <Alert severity="success">{message && message}</Alert>}
            <form onSubmit={(e) => handleSubmit(e)}>
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
                Submit
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6} sx={{ bgcolor: "#f5f5f5" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
              Student List
            </Typography>
            <table>
              <thead>
                <tr>
                  <th style={{ padding: "10px" }}>Name</th>
                  <th style={{ padding: "10px" }}>Age</th>
                  <th style={{ padding: "10px" }}>City</th>
                  <th style={{ padding: "10px" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index ) => (
                  <tr key={index}>
                    <td style={{ padding: "10px" }}>{student.name}</td>
                    <td style={{ padding: "10px" }}>{student.age}</td>
                    <td style={{ padding: "10px" }}>{student.city}</td>
                    <td style={{ padding: "10px" }}>
                      <Button
                        onClick={() => handleEdit(student._id)}
                        variant="contained"
                        size="small"
                        sx={{
                          marginRight: "10px",
                          cursor: "pointer",
                          textTransform: "capitalize",
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(student._id)}
                        variant="contained"
                        size="small"
                        color="secondary"
                        sx={{ cursor: "pointer", textTransform: "capitalize" }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
};

export default Students;
