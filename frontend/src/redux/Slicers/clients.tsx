/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { userInformationType } from './registerUser';

interface IinitialState {
  filteredCustomerData: userInformationType[];
  rawCustomerData: userInformationType[];
  filters: {
    customerFilter: string;
    plateFilter: string;
  };
}

const initialState: IinitialState = {
  filteredCustomerData: [],
  rawCustomerData: [],
  filters: {
    customerFilter: '',
    plateFilter: '',
  },
};

export const ClientsSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    filterCustomerData: (state, action) => {
      state.filteredCustomerData = action.payload;
    },
    updateRawCustomerData: (state, action) => {
      state.rawCustomerData = action.payload;
    },
    setPlateFilter: (state, action) => {
      state.filters.plateFilter = action.payload;
    },
    setCustomerFilter: (state, action) => {
      state.filters.customerFilter = action.payload;
    },
  },
});

export const {
  filterCustomerData,
  updateRawCustomerData,
  setPlateFilter,
  setCustomerFilter,
} = ClientsSlice.actions;

export default ClientsSlice.reducer;
