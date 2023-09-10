import React, { useState } from "react";
import {
  Box,
  Drawer,
  Divider,
  IconButton,
  Button,
  Typography,
  Grid,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import images from "../home/Images";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const OpenImageList = ({ open, onClose }) => {
  const closeDrawer = () => {
    onClose();
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openImage = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div>
      <Drawer anchor="bottom" open={open} onClose={closeDrawer}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: !selectedImageIndex ? "start" : 'center',
          }}
        >
          {!selectedImageIndex ? (
            <>
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "650px",
                  },
                  margin: "auto",
                  marginBottom: "130px",
                  mt: 3,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <ImageList
                      variant="masonry"
                      cols={2}
                      gap={8}
                      sx={{ p: { xs: 3, md: 0 } }}
                    >
                      {images.map((item, index) => (
                        <ImageListItem key={index}>
                          <img
                            src={`${item.image1}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.image1}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ borderRadius: "15px", cursor: "pointer" }}
                            onClick={() => openImage(index)}
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Grid>
                </Grid>
              </Box>
              <Box
                position={"fixed"}
                bottom={0}
                left={0}
                right={0}
                display={"flex"}
                justifyContent={"center"}
              >
                <Box
                  onClick={closeDrawer}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "fit-content",
                    px: "20px",
                    py: "8px",
                    m: "15px",
                    cursor: "pointer",
                    borderRadius: "10px",
                    bgcolor: "secondary.main",
                    color: "primary.contrastText",
                  }}
                >
                  <Close sx={{ marginLeft: "5px" }} />
                  <Typography variant="text"> Close </Typography>
                </Box>
              </Box>
            </>
          ) : (
            <div>
              <Carousel
                showArrows={true}
                showThumbs={true}
                selectedItem={selectedImageIndex}
                dynamicHeight
                infiniteLoop
                showIndicators={false}
              >
                {images.map((item, index) => (
                  <div key={index}>
                    <img
                      src={`${item.image1}?w=600&fit=crop&auto=format`}
                      alt={item.title}
                      style={{
                        width: "100%",
                        maxHeight: "80vh",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
              <Button
                // variant="outlined" 
                color="primary"
                onClick={closeImage}
                sx={{
                  mt: 2,
                  position: "absolute",
                  top: "20px",
                  right: "10px",
                  textTransform: 'capitalize'
                }}
              > 
                <Close sx={{mr:2, fontSize: '16px',}} /> Close 
              </Button>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default OpenImageList;
 