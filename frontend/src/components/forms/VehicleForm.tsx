import React from 'react';

import { TextField } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  changeWarancyDate,
  changeDescription,
  changePlate,
  changeYear,
} from '../../redux/Slicers/registerUser';

export default function VehicleForm() {
  const dispatch = useAppDispatch();

  return (
    <form>
      <TextField
        required
        onChange={(e) => {
          dispatch(changeDescription(e.target.value));
        }}
        value={useAppSelector(({ registerUser }) => registerUser.vehicle.description)}
        id="Description"
        label="Descrição"
        variant="outlined"
      />
      <TextField
        required
        onChange={(e) => {
          dispatch(changePlate(e.target.value));
        }}
        value={useAppSelector(({ registerUser }) => registerUser.vehicle.plate)}
        type="text"
        id="plate"
        label="placa"
        variant="outlined"
      />
      <TextField
        required
        onChange={(e) => {
          dispatch(changeYear(e.target.value));
        }}
        value={useAppSelector(({ registerUser }) => registerUser.vehicle.year)}
        type="number"
        id="year"
        label="Ano"
        variant="outlined"
      />
      <TextField
        onChange={(e) => {
          dispatch(changeWarancyDate(e.target.value));
        }}
        value={useAppSelector(({ registerUser }) => registerUser.vehicle.warranty_date)}
        required
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        id="warranty_date"
        label="Data"
        variant="outlined"
      />
    </form>
  );
}
