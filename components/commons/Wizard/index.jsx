import { Box, Button, Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import { useState } from "react";

function getStepContent(stepIndex, dataSource, values, setValue) {
  return <StepPanel data={dataSource[stepIndex]} index={stepIndex} values={values} setValue={setValue} />;
}

function StepPanel(props) {
  const Component = props.data.component;

  return (
    <div
      id={`full-width-steppanel-${props.index}`}
      role="steppanel"
      aria-labelledby={`full-width-step-${props.index}`}
    >
      <Box p={3} display="flex" alignItems="center" flexDirection="column">
        <Typography variant="h5" component="h5" gutterBottom>
          {props.data.title}
        </Typography>
        <Component values={props.values} setValue={props.setValue} />
      </Box>
    </div>
  );
}

export default function Wizard (props) {
  const [values, setValues] = useState(props.initialValues);
  const [currentStep, setCurrentStep] = useState(0);

  const content = props.dataSource;

  const _handleNext = () => {
    setCurrentStep(currentStep + 1);
  }

  const _handleBack = () => {
    setCurrentStep(currentStep - 1);
  }

  return (
    <Box component="section">
      <Stepper activeStep={currentStep} alternativeLabel>
        {content.map((data, index) => (
          <Step key={index}>
            <StepLabel>{data.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepContent(currentStep, content, values, setValues)}
      {currentStep > 0 && (
        <Button onClick={_handleBack}>Volver</Button>
      )}
      {currentStep < content.length - 1 && (
        <Button onClick={_handleNext}>Siguiente</Button>
      ) || (
        <Button>Finalizar</Button>
      )}
    </Box>
  )
}