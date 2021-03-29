/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customer: {
    name: '',
    phone: '',
    cpf: '',
    email: '',
  },
  vehicle: {
    description: '',
    plate: '',
    year: '',
    warranty_date: '',
  },
  plan: {
    product: '',
    begin_date: '',
    end_date: '',
  },
};

export const RegisterUserSlice = createSlice({
  name: 'userInformation',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.customer.name = action.payload;
    },
    changePhone: (state, action) => {
      state.customer.phone = action.payload;
    },
    changeCpf: (state, action) => {
      state.customer.cpf = action.payload;
    },
    changeEmail: (state, action) => {
      state.customer.email = action.payload;
    },
    changeDescription: (state, action) => {
      state.vehicle.description = action.payload;
    },
    changePlate: (state, action) => {
      state.vehicle.plate = action.payload;
    },
    changeYear: (state, action) => {
      state.vehicle.year = action.payload;
    },
    changeWarancyDate: (state, action) => {
      state.vehicle.warranty_date = action.payload;
    },
    changeProduct: (state, action) => {
      state.plan.product = action.payload;
    },
    changeBeginDate: (state, action) => {
      state.plan.begin_date = action.payload;
    },
    changeEndDate: (state, action) => {
      state.plan.end_date = action.payload;
    },
    resetUserData: () => initialState,
  },
});

export const {
  changeName,
  changePhone,
  changeCpf,
  changeEmail,
  changeWarancyDate,
  changeDescription,
  changePlate,
  changeYear,
  changeBeginDate,
  changeEndDate,
  changeProduct,
  resetUserData,
} = RegisterUserSlice.actions;

export declare type userInformationType = typeof initialState

export default RegisterUserSlice.reducer;
