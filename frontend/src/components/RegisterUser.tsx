import React, { useState } from 'react';
import {
  Stepper, Button, Step, StepLabel,
} from '@material-ui/core';
import RegisterForm from './RegisterForm';
import NextButton from './NextButton';

function getSteps(): string[] {
  return ['Cliente', 'Veiculo', 'Cobertura'];
}

function getStepForm(activeStep: number) {
  switch (activeStep) {
    case 0:
      return <RegisterForm type="Cliente" />;
    case 1:
      return <RegisterForm type="Veiculo" />;
    case 2:
      return <RegisterForm type="Cobertura" />;
    default:
      return '';
  }
}

export default function RegisterUser() {
  const steps = getSteps();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {getStepForm(activeStep)}
      {activeStep > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Voltar
        </Button>
      )}
      <NextButton activeStep={activeStep} setActiveStep={setActiveStep} steps={steps} />

    </>
  );
}
