/* eslint-disable max-len */
import React from 'react';
import { Button } from '@material-ui/core';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { subscribeCustomer, getSubscribers } from '../../utils/api';
import {
  UpdateStatusToFailure,
  UpdateStatusToSucess,
  resetToInitialState,
  setCurrentStep,
} from '../../redux/Slicers/pagestatus';
import { resetUserData } from '../../redux/Slicers/registerUser';
import { updateRawCustomerData, filterCustomerData } from '../../redux/Slicers/clients';

function isCompleted(stepInformation: string[]) {
  return stepInformation.every((data) => Boolean(data));
}
interface INextButton {
  steps: string[];
}
export default function NextButton({ steps }: INextButton) {
  const dispatch = useAppDispatch();
  const userInformation = useAppSelector(({ registerUser }) => registerUser);
  const activeStep = useAppSelector(({ pageStatus }) => pageStatus.currentStep);

  function setActiveStep(value: number) {
    return dispatch(setCurrentStep(value));
  }

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

  function resetUserForm() {
    dispatch(resetToInitialState());
    dispatch(resetUserData());
  }
  function buttonOnClick() {
    if (activeStep === steps.length - 1) {
      return subscribeCustomer(userInformation)
        .then(({ status }) => dispatch(
          status === 400 ? UpdateStatusToFailure() : UpdateStatusToSucess(),
        ))
        .catch(() => dispatch(UpdateStatusToFailure()))
        .then(resetUserForm)
        .then(() => {
          getSubscribers().then((data) => {
            dispatch(updateRawCustomerData(data));
            dispatch(filterCustomerData(data));
          });
        });
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
      style={{ marginLeft: '30%' }}
      onClick={buttonOnClick}
      data-testid="next-button"
    >
      {getButtonText()}
    </Button>
  );
}
