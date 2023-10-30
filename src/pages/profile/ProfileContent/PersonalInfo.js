import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';


const PersonalInfo = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the form data or submit it to an API here
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        boxShadow: 1,
                        p: 2,
                        m: 1,
                        borderRadius: 2,
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="Legal name"
                                label="Legal name"
                                variant="standard"
                                fullWidth
                                value={formData.legalName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="Email address"
                                label="Email address"
                                type="email"
                                variant="standard"
                                fullWidth
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="Phone numbers"
                                label="Phone numbers"
                                variant="standard"
                                fullWidth
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="Government ID"
                                label="Government ID"
                                variant="standard"
                                fullWidth
                                value={formData.governmentID}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="Address"
                                label="Address"
                                variant="standard"
                                fullWidth
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="Emergency contact"
                                label="Emergency contact"
                                variant="standard"
                                fullWidth
                                value={formData.emergencyContact}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </>
    );
};

export default PersonalInfo;
