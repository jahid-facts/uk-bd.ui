
import { Icon } from '@iconify/react';
import { Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'


const PlaceDescibe = () => {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (boxId) => {
    setActiveBox(boxId === activeBox ? null : boxId);
  };

  const boxStyles = {
    width: '100%',
    height: '100%',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const activeBoxStyles = {
    backgroundColor: '#efefef',
    color: 'white',
  };

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <h1>Which of these best describes your place?</h1>
          </Grid>
          <Grid item xs={6} md={4}>
            <div
              style={{
                ...boxStyles,
                ...(activeBox === 1 ? activeBoxStyles : {}),
              }}
              onClick={() => handleBoxClick(1)}
            >
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Icon icon="ant-design:home-outlined" style={{ fontSize: '24px' }} />
                    <Typography variant="h6">title</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div
              style={{
                ...boxStyles,
                ...(activeBox === 2 ? activeBoxStyles : {}),
              }}
              onClick={() => handleBoxClick(2)}
            >
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Icon icon="ant-design:home-outlined" style={{ fontSize: '24px' }} />
                    <Typography variant="h6">title</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div
              style={{
                ...boxStyles,
                ...(activeBox === 3 ? activeBoxStyles : {}),
              }}
              onClick={() => handleBoxClick(3)}
            >
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Icon icon="ant-design:home-outlined" style={{ fontSize: '24px' }} />
                    <Typography variant="h6">title</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PlaceDescibe