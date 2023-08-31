import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Description = ({ setStepValue, values }) => {
  const [text, setText] = useState(values.description || "");
  const maxLength = 500;

  useEffect(() => {
    setStepValue("description", text);
  }, [text]);

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
      setStepValue("description", text);
    }
  };

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
            marginBottom: "130px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} mb={2}>
              <h1>Create your description</h1>
              <Typography variant="text" mt={2}>
              Share what makes your place special.
              </Typography>
            </Grid>
            <Grid item xs={12} p={"0px"}>
              <Box pt={3}>
                <TextField
                  id="textarea"
                  label="write your description"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={text}
                  onChange={handleChange}
                  inputProps={{ maxLength: maxLength }}
                  fullWidth
                />
                <Typography
                  variant="caption"
                  color={text.length > maxLength ? "error" : "textPrimary"}
                >
                  {text.length}/{maxLength} characters
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Description;
