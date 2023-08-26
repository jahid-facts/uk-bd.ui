import React from "react";
import AboutPlaceComponent from "./AboutPlaceComponent";

const AboutPlace = ({
  guestsCount,
  setGuestsCount,
  bedroomsCount,
  setBedroomsCount,
  bedsCount,
  setBedsCount,
  bathroomsCount,
  setBathroomsCount,
}) => {
  return (
    <>
      <AboutPlaceComponent
        label="Guests"
        count={guestsCount}
        setCount={setGuestsCount}
      />
      <AboutPlaceComponent
        label="Bedrooms"
        count={bedroomsCount}
        setCount={setBedroomsCount}
      />
      <AboutPlaceComponent
        label="Beds"
        count={bedsCount}
        setCount={setBedsCount}
      />
      <AboutPlaceComponent
        label="Bathrooms"
        count={bathroomsCount}
        setCount={setBathroomsCount}
      />
    </>
  );
};

export default AboutPlace;



