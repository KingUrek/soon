import React from 'react';
import { Button } from '@material-ui/core';
import { useAppSelector } from '../redux/hooks';
import { subscribeCustomer } from '../utils/api';

function isCompleted(stepInformation: string[]) {
  return stepInformation.every((data) => Boolean(data));
}
interface INextButton {
  activeStep: number;
  steps: string[];
  setActiveStep: Function;
}
export default function NextButton({
  activeStep,
  steps,
  setActiveStep,
}: INextButton) {
  const userInformation = useAppSelector(({ registerUser }) => registerUser);

  function getButtonText() {
    return activeStep === steps.length - 1 ? 'Salvar' : 'Proximo';
  }

  function isStepCompleted(step: number) {
    switch (step) {
      case 0:
        return isCompleted(Object.values(userInformation.customer));
      case 1:
        return isCompleted(Object.values(userInformation.vehicle));
      case 2:
        return isCompleted(Object.values(userInformation.plan));

      default:
        return false;
    }
  }

  function buttonOnClick() {
    if (activeStep === steps.length - 1) {
      return subscribeCustomer(userInformation);
    }
    if (isStepCompleted(activeStep)) {
      return setActiveStep(activeStep + 1);
    }
    return null;
  }
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={buttonOnClick}
    >
      {getButtonText()}
    </Button>
  );
}
