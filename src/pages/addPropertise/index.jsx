import * as React from "react";
import { useTheme } from "@mui/material/styles";
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

// Define your individual step components

export default function AddPropertise() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <StartPropertise />;
      case 1:
        return <PlaceDescibe />;
      case 2:
        return <TypeOfPlace />;
      case 3:
        return <LocatedPlace />;
      case 4:
        return <AddAdrress />;
      case 5:
        return <Guests />;
      case 6:
        return <Offer />;
      case 7:
        return <UploadPhoto />;
      case 8:
        return <ShortTitle />;
      case 9:
        return <Description />;
      case 10:
        return <Decide />;
      case 11:
        return <Prices />;
      case 12:
        return <Discounts />;
      default:
        return "Unknown step";
    }
  };

  return (
    <>
      {getStepContent(activeStep)}
      <MobileStepper
        variant="progress"
        steps={15} // Number of steps (excluding progress bar)
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
            disabled={activeStep === 15}
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
