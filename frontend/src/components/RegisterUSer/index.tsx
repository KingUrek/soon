import React from 'react';
import {
  Stepper, Button, Step, StepLabel,
} from '@material-ui/core';
import RegisterForm from '../RegisterForm';
import NextButton from '../NextButton';
import { Container, StepperWrapper } from './style';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCurrentStep } from '../../redux/Slicers/pagestatus';

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
  const dispatch = useAppDispatch();
  const activeStep = useAppSelector(({ pageStatus }) => pageStatus.currentStep);
  function setActiveStep(value:number) {
    dispatch(setCurrentStep(value));
  }

  return (
    <Container>
      <StepperWrapper>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </StepperWrapper>
      {getStepForm(activeStep)}
      <Button
        variant="contained"
        color="primary"
        onClick={() => setActiveStep(activeStep - 1)}
        disabled={activeStep <= 0}
        data-testid="back-button"
      >
        Voltar
      </Button>
      <NextButton
        steps={steps}
      />
    </Container>
  );
}
