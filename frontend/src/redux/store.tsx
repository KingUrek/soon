import { configureStore } from '@reduxjs/toolkit';
import registerUserReducer from './Slicers/registerUser';
import plansOptionsReducer from './Slicers/plans';
import clientsReducer from './Slicers/clients';
import pageStatusReducer from './Slicers/pagestatus';

const store = configureStore({
  reducer: {
    registerUser: registerUserReducer,
    plansOptions: plansOptionsReducer,
    clientsData: clientsReducer,
    pageStatus: pageStatusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
