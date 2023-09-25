import React, { useEffect, useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import { Button } from "@mui/material";
import StartPropertise from "../../components/addpropertiseComponents/StartPropertise";
import PlaceDescibe from "../../components/addpropertiseComponents/PlaceDescibe";
import AddAdrress from "../../components/addpropertiseComponents/AddAddress";
import TypeOfPlace from "../../components/addpropertiseComponents/TypeOfPlace";
import LocatedPlace from "../../components/addpropertiseComponents/LocatedPlace";
import Guests from "../../components/addpropertiseComponents/Guests";
import Offer from "../../components/addpropertiseComponents/Offer";
import Description from "../../components/addpropertiseComponents/Description";
import ShortTitle from "../../components/addpropertiseComponents/ShortTitle";
import Prices from "../../components/addpropertiseComponents/Prices";
import Decide from "../../components/addpropertiseComponents/Decide";
import Discounts from "../../components/addpropertiseComponents/Discounts";
import { getApiById, putApi } from "../../config/configAxios";
import { useNavigate, useParams } from "react-router-dom";
import { AppLayout } from "../../layouts/appLayout";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import MultipleImages from "../../components/addpropertiseComponents/MultipleImages";
import { useAuthInfo } from "../../helpers/AuthCheck";

export default function EditProperty() {
  const userInfo = useAuthInfo();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [localStorageKey] = useState("editPropertyValues");
  const [oldStepValues, setOldStepValues] = useState(null);
  const [multipleImages, setMultipleImages] = useState(null);
  const [stepValues, setStepValues] = useState({});

  // Use useEffect to populate stepValues when oldStepValues is available
  useEffect(() => {
    if (oldStepValues) {
      setStepValues({
        start: "start",
        placeDescibe: oldStepValues.placeDescribesId || null,
        typeOfPlace: oldStepValues.typeOfPlaceId || null,
        locatedPlace: oldStepValues.located || null,
        addAddress: oldStepValues.address || null,
        guests: oldStepValues.guests || null,
        offer: oldStepValues.amenitiesIds || null,
        UploadPhoto: "start",
        shortTitle: oldStepValues.title || null,
        description: oldStepValues.description || null,
        decide: oldStepValues.decideReservations || null,
        prices: oldStepValues.price || null,
        discounts: oldStepValues.discounts || null,
      });
    }
  }, [oldStepValues, activeStep]);

  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const { propertyId } = useParams();

  // fetch data
  const fetchDataServer = async () => {
    try {
      const response = await getApiById(
        `/edit/property/${propertyId}`,
        propertyId
      );
      if (response.data.property.userId === userInfo._id) {
        setOldStepValues(response.data.property);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Internal server error:", error.message);
    }
  };

  useEffect(() => {
    fetchDataServer();
  }, [activeStep]);

  const dataSubmitServer = async () => {
    const data = {
      placeDescribesId: stepValues.placeDescibe,
      typeOfPlaceId: stepValues.typeOfPlace,
      located: stepValues.locatedPlace,
      address: stepValues.addAddress,
      guests: stepValues.guests,
      amenitiesIds: stepValues.offer,
      images: multipleImages || oldStepValues?.images,
      title: stepValues.shortTitle,
      description: stepValues.description,
      decideReservations: stepValues.decide,
      price: stepValues.prices,
      discounts: stepValues.discounts,
    };
    try {
      await putApi(`/properties/${propertyId}`, data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleNext = () => {
    dataSubmitServer();
    toast.success("Successfully saved");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(stepValues));

    const currentStepValue = stepValues[Object.keys(stepValues)[activeStep]];
    if (activeStep === 7) {
      setIsNextButtonDisabled(false);
      return;
    }
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
    : {};

  const getStepContent = (
    step,
    handleStepChange,
    parsedSavedStepValues,
    oldStepValues,
    setMultipleImages
  ) => {
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
            handleNext={handleNext}
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
          <MultipleImages
            setStepValue={handleStepChange}
            values={parsedSavedStepValues}
            oldStepValues={oldStepValues}
            setMultipleImages={setMultipleImages}
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
      {getStepContent(
        activeStep,
        handleStepChange,
        parsedSavedStepValues,
        oldStepValues,
        setMultipleImages
      )}
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
            sx={{ textTransform: "capitalize" }}
            disabled={activeStep === 12 ? false : isNextButtonDisabled}
          >
            {activeStep !== 12 && isNextButtonDisabled ? (
              <BeatLoader color="#ff0000" />
            ) : activeStep === 12 ? (
              "Save & Next"
            ) : (
              "Save & Next"
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
              textTransform: "capitalize",
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
