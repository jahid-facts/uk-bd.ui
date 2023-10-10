import React, { useEffect, useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import { Button } from "@mui/material";
import StartProperties from "../../components/addpropertiesComponents/StartProperties";
import PlaceDescibe from "../../components/addpropertiesComponents/PlaceDescibe";
import AddAdrress from "../../components/addpropertiesComponents/AddAddress";
import TypeOfPlace from "../../components/addpropertiesComponents/TypeOfPlace";
import LocatedPlace from "../../components/addpropertiesComponents/LocatedPlace";
import Guests from "../../components/addpropertiesComponents/Guests";
import Offer from "../../components/addpropertiesComponents/Offer";
import Description from "../../components/addpropertiesComponents/Description";
import ShortTitle from "../../components/addpropertiesComponents/ShortTitle";
import UploadPhoto from "../../components/addpropertiesComponents/UploadPhoto";
import Prices from "../../components/addpropertiesComponents/Prices";
import Decide from "../../components/addpropertiesComponents/Decide";
import Discounts from "../../components/addpropertiesComponents/Discounts";
import { postApi } from "../../config/configAxios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import ExacteLocation from "../../components/addpropertiesComponents/ExacteLocation";
import { AppLayout } from "../../layouts/appLayout";
import { BeatLoader } from "react-spinners";

export default function AddPropertise() {
  const navigate = useNavigate();
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

  const dataSubmitServer = async () => {
    const authUserInfo = localStorage.getItem("user");
    const user = authUserInfo ? JSON.parse(authUserInfo) : null;
    const token = user.token;
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userInfo._id;

    const data = {
      userId: userId,
      placeDescribesId: stepValues.placeDescibe,
      typeOfPlaceId: stepValues.typeOfPlace,
      located: stepValues.locatedPlace,
      address: stepValues.addAddress,
      guests: stepValues.guests,
      amenitiesIds: stepValues.offer,
      images: stepValues.uploadPhoto,
      title: stepValues.shortTitle,
      description: stepValues.description,
      decideReservations: stepValues.decide,
      price: stepValues.prices,
      discounts: stepValues.discounts,
    };
    try {
      await postApi("/add-property", data);
      localStorage.removeItem(localStorageKey);
      navigate("/property/list");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleNext = () => {
    if (activeStep === 12) {
      console.log(stepValues);
      dataSubmitServer();
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(stepValues));

    const currentStepValue = stepValues[Object.keys(stepValues)[activeStep]];

    if (currentStepValue === null || currentStepValue === "") {
      setIsNextButtonDisabled(true);
      return;
    }

    setIsNextButtonDisabled(false);
  }, [stepValues, activeStep, localStorageKey]);

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
        return <StartProperties />;
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
            handleNext={handleNext}
          />
        );
      // case 5:
      //   return (
      //     <ExacteLocation
      //       setStepValue={handleStepChange}
      //       values={parsedSavedStepValues}
      //       handleNext={handleNext}
      //     />
      //   );
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
        return navigate("/property/list");
    }
  };

  const handleStepChange = (step, value) => {
    setStepValues((prevStepValues) => ({
      ...prevStepValues,
      [step]: value,
    }));
  };

  return (
    <AppLayout>
      {getStepContent(activeStep, handleStepChange, parsedSavedStepValues)}
      <MobileStepper
        variant="progress"
        steps={13} // Number of steps (excluding progress bar)
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
            disabled={activeStep === 12 ? false : isNextButtonDisabled}
          >
            {activeStep != 12 && isNextButtonDisabled ? (
              <BeatLoader color="#ff0000" />
            ) : activeStep === 12 ? (
              "Finish"
            ) : (
              "Next"
            )}
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
            Back
          </Button>
        }
      />
    </AppLayout>
  );
}
