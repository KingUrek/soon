import { configureStore } from '@reduxjs/toolkit';
import registerUserReducer from './Slicers/registerUser';
import plansOptionsReducer from './Slicers/plans';
import clientsReducer from './Slicers/clients';

const store = configureStore({
  reducer: {
    registerUser: registerUserReducer,
    plansOptions: plansOptionsReducer,
    clientsData: clientsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
