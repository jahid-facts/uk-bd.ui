import { Icon } from "@iconify/react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import osm from "../leaftLet/OsmProvider";
import "leaflet/dist/leaflet.css";
import assets from "../../assets";
import L from "leaflet";

const LocatedPlace = () => {
    const initialCenter = { lat: 23.7104, lng: 90.4071 };
    const ZOOM_LEVEL = 10;
    const mapRef = useRef();
    
    const [center, setCenter] = useState(initialCenter);

    const markerIcon = new L.Icon({
        iconUrl: assets.images.location,
        iconSize: [25,35],
        iconAnchor: [17, 46],
        popupAnchor: [0,-46],
    });

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
            marginBottom: "120px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} mb={2}>
              <h1>Where's your place located?</h1>
              <Typography variant="text" mt={2}>
                Your address is only shared with guests after they’ve made a
                reservation.
              </Typography>
            </Grid>
            <Grid item xs={12} p={"0px"}>
            <div style={{ width: "100%", height: "400px" }}>
                <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{ width: "100%", height: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center} icon={markerIcon}>
                    <Popup>
                        <b>Dhaka</b>
                    </Popup>
                </Marker>
                </MapContainer>

            </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default LocatedPlace;
