import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import {Button} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import StartPropertise from '../../components/addpropertiseComponents/StartPropertise';
import PlaceDescibe from '../../components/addpropertiseComponents/PlaceDescibe';
import AddAdrress from '../../components/addpropertiseComponents/AddAddress';

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
        return <AddAdrress />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <div> 
        {getStepContent(activeStep)}
        <MobileStepper
          variant="progress"
          steps={5} // Number of steps (excluding progress bar)
          position="static"
          activeStep={activeStep}
          sx={{ maxWidth: '100%', flexGrow: 1, background: 'primary' }}
          nextButton={
            <Button size="large" color={"primary"} onClick={handleNext} disabled={activeStep === 4}>
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        /> 
    </div> 
  );
}
