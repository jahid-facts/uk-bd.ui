import React, { useEffect, useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import { Button } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import StartPropertise from "../../components/addpropertiseComponents/StartPropertise";
import PlaceDescibe from "../../components/addpropertiseComponents/PlaceDescibe";
import AddAdrress from "../../components/addpropertiseComponents/AddAddress";
import TypeOfPlace from "../../components/addpropertiseComponents/TypeOfPlace";
import LocatedPlace from "../../components/addpropertiseComponents/LocatedPlace";
import Guests from "../../components/addpropertiseComponents/Guests";
import Offer from "../../components/addpropertiseComponents/Offer";
import Description from "../../components/addpropertiseComponents/Description";
import ShortTitle from "../../components/addpropertiseComponents/ShortTitle";
import UploadPhoto from "../../components/addpropertiseComponents/UploadPhoto";
import Prices from "../../components/addpropertiseComponents/Prices";
import Decide from "../../components/addpropertiseComponents/Decide";
import Discounts from "../../components/addpropertiseComponents/Discounts";

export default function AddPropertise() {
  const [activeStep, setActiveStep] = useState(0);
  const [localStorageKey] = useState("propertyValues");
  const [stepValues, setStepValues] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || {
      start: "start",
      placeDescibe: null,
      typeOfPlace: null,
      locatedPlace: null,
      addAddress: null,
      guests: null,
      offer: null,
      uploadPhoto: null,
      shortTitle: null,
      description: null,
      decide: null,
      prices: null,
      discounts: null,
    }
  );
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  // const currentStepValue = stepValues[Object.keys(stepValues)[activeStep]];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(stepValues));
  
    const currentStepValue = stepValues[Object.keys(stepValues)[activeStep]];
  
    if (activeStep === 6 && !Array.isArray(currentStepValue)) {
      // setIsNextButtonDisabled(true);
      return;
    }
    if (
      activeStep === 7 &&
      (!Array.isArray(currentStepValue) || currentStepValue.length < 5)
    ) {
      setIsNextButtonDisabled(true);
      return;
    } 
  
    if (currentStepValue === null || currentStepValue === "") {
      setIsNextButtonDisabled(true);
      return;
    }
  
    setIsNextButtonDisabled(false);
  }, [stepValues, activeStep]);
  

  // localStorage.removeItem(localStorageKey);

  const handleBack = () => {
    setIsNextButtonDisabled(false);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // get data from localStorage
  const savedStepValues = localStorage.getItem(localStorageKey);
  const parsedSavedStepValues = savedStepValues
    ? JSON.parse(savedStepValues)
    : null;

  const getStepContent = (step, handleStepChange, parsedSavedStepValues) => {
    switch (step) {
      case 0:
        return <StartPropertise />;
      case 1:
        return (
          <PlaceDescibe
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      case 2:
        return (
          <TypeOfPlace
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      case 3:
        return (
          <LocatedPlace
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      case 4:
        return (
          <AddAdrress
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      case 5:
        return (
          <Guests
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      case 6:
        return (
          <Offer
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      case 7:
        return (
          <UploadPhoto
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      case 8:
        return (
          <ShortTitle
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      case 9:
        return (
          <Description
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      case 10:
        return (
          <Decide
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      case 11:
        return (
          <Prices
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      case 12:
        return (
          <Discounts
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
          />
        );
      default:
        return "Unknown step";
    }
  };

  const handleStepChange = (step, value) => {
    setStepValues((prevStepValues) => ({
      ...prevStepValues,
      [step]: value,
    }));
  };

  return (
    <>
      {getStepContent(activeStep, handleStepChange, parsedSavedStepValues)}
      <MobileStepper
        variant="progress"
        steps={14} // Number of steps (excluding progress bar)
        position="static"
        activeStep={activeStep}
        sx={{
          maxWidth: "100%",
          flexGrow: 1,
          boxShadow: "0px 0px 18px 0px #6363633b",
          position: " fixed",
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          zIndex: 9999,
          marginBottom: {
            xs: "54px",
            md: "0px",
          },
        }}
        nextButton={
          <Button
            size="small"
            variant="contained"
            color={"secondary"}
            onClick={handleNext}
            disabled={activeStep === 14 || isNextButtonDisabled}
          >
            Next
            {/* {theme.direction === "rtl" ? (
              <KeyboardArrowLeft /> 
            ) : (
              <KeyboardArrowRight />
            )} */}
          </Button>
        }
        backButton={
          <Button
            size="small"
            variant="contained"
            color={"secondary"}
            sx={{
              "&.Mui-disabled": {
                background: "#eaeaea",
                color: "#c0c0c0",
              },
            }}
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {/* {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )} */}
            Back
          </Button>
        }
      />
    </>
  );
}
