import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";

import images from "./Images";
import ReservationCard from "../../components/reservationCard";
import { AppLayout } from "../../layouts/appLayout";
import { getActiveProperties } from "../../redux/features/PropertySlice";
import { useDispatch, useSelector } from "react-redux";
import CustomHashLoader from "../../components/customLoader/CustomHashLoader";
import ReservationCardCopy from "../../components/reservationCard/index copy";

export default function Home() {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.properties);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if properties is an empty array or "falsy"
    // if (!properties || (Array.isArray(properties) && properties.length === 0)) {
    setLoading(true);
    dispatch(getActiveProperties());
    setLoading(false);
    // }
  }, [dispatch, properties]);

  return (
    <AppLayout>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {loading ? (
            <CustomHashLoader />
          ) : (
            <>
              {properties && properties.length > 0 ? (
                properties
                  // .filter((data) => data.status === "active")
                  .map((data, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                      <ReservationCard
                        propertyId={data._id}
                        image1={data.images[0]?.url}
                        image2={data.images[1]?.url}
                        image3={data.images[2]?.url}
                        title={`${data.located.address?.state}, ${data.located.address?.country}`}
                        subtitle={
                          data.title.length > 60
                            ? `${data.title.substring(0, 60)}...`
                            : data.title
                        }
                        price={data.price}
                        review={"4.9"}
                      />
                    </Grid>
                  ))
              ) : (
                <CustomHashLoader />
              )}
            </>
          )}

          {images.map((card, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <ReservationCardCopy
                image1={card.image1}
                image2={card.image2}
                image3={card.image3}
                title={"Chaing Rai, Thailand"}
                subtitle={"29 km to Lam Nam Kok National Park Aug 19 - 24"}
                price={card.price}
                review={"4.9"}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: { md: "none" } }}></Box>
      </Container>
    </AppLayout>
  );
}
