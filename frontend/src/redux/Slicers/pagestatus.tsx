/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type initialState = {
  registerUserStatus: 'ongoing' | 'sucess' | 'failure';
  currentStep: number;
};

const initialState: initialState = {
  registerUserStatus: 'ongoing',
  currentStep: 0,
};

export const PageStatusSlice = createSlice({
  name: 'pagesStatus',
  initialState,
  reducers: {
    UpdateStatusToFailure: (state) => {
      state.registerUserStatus = 'failure';
    },
    UpdateStatusToSucess: (state) => {
      state.registerUserStatus = 'sucess';
    },
    UpdateStatusToOnGoing: (state) => {
      state.registerUserStatus = 'ongoing';
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetToInitialState: (state) => {
      state.currentStep = 0;
    },
  },
});

export const {
  UpdateStatusToFailure,
  UpdateStatusToOnGoing,
  UpdateStatusToSucess,
  setCurrentStep,
  resetToInitialState,
} = PageStatusSlice.actions;

export default PageStatusSlice.reducer;
