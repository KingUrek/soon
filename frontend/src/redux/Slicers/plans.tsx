/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export declare interface Iplan {
  name: string;
  id: number;
}

const initialState: Iplan[] = [];

export const PlansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    updatePlans: (state, action) => {
      state = [{ name: 'gabriel', id: 1234 }, ...action.payload];
      return state;
    },
  },
});

export const { updatePlans } = PlansSlice.actions;

export default PlansSlice.reducer;
