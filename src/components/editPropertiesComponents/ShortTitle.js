import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const ShortTitle = ({ setStepValue, values }) => {
  const [text, setText] = useState(values.title || "");
  const maxLength = 80;

  useEffect(() => {
    setStepValue("shortTitle", text);
  }, [text]);

  const handleChange = (event) => {
    const newText = event.target.value;
    if (newText.length <= maxLength) {
      setText(newText);
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
              <h1>Now, let's give your cabin a title</h1>
              <Typography variant="text" mt={2}>
                Short titles work best. Have fun with it—you can always change
                it later.
              </Typography>
            </Grid>
            <Grid item xs={12} p={"0px"}>
              <Box pt={3}>
                <TextField
                  id="textarea"
                  label="write your short title"
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

export default ShortTitle;
