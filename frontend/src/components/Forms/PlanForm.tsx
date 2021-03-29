import React, { useMemo } from 'react';

import { TextField, MenuItem } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  changeBeginDate,
  changeEndDate,
  changeProduct,
} from '../../redux/Slicers/registerUser';

import { Iplan } from '../../redux/Slicers/plans';
import { Form } from './style';

function isPlateEven(plate: string) {
  return parseInt(plate[plate.length - 1], 10) % 2 === 0;
}

function getPlanForPlate(plans: Iplan[], plate: string) {
  const planForEvenPlate = [plans[0], plans[2]];
  const planForOddPlate = [plans[1], plans[3]];

  return isPlateEven(plate) ? planForEvenPlate : planForOddPlate;
}

export default function PlanForm() {
  const dispatch = useAppDispatch();
  const plans = useAppSelector(({ plansOptions }) => plansOptions);
  const plate = useAppSelector(
    ({ registerUser }) => registerUser.vehicle.plate,
  );
  const plansForPlate = useMemo(() => getPlanForPlate(plans, plate), [
    plans,
    plate,
  ]);

  return (
    <Form>
      <TextField
        onChange={(e) => {
          dispatch(changeProduct(e.target.value));
        }}
        value={useAppSelector(({ registerUser }) => registerUser.plan.product)}
        required
        select
        InputLabelProps={{
          shrink: true,
        }}
        style={{ width: 300 }}
        type="text"
        id="product"
        label="Produto"
        variant="outlined"
      >
        {plansForPlate.map((plan) => (
          <MenuItem key={plan?.id} value={plan?.name}>{plan?.name}</MenuItem>
        ))}
      </TextField>
      <TextField
        required
        onChange={(e) => {
          dispatch(changeBeginDate(e.target.value));
        }}
        value={useAppSelector(
          ({ registerUser }) => registerUser.plan.begin_date,
        )}
        type="date"
        id="begin_date"
        InputLabelProps={{
          shrink: true,
        }}
        label="Data De Começo"
        variant="outlined"
      />
      <TextField
        required
        onChange={(e) => {
          dispatch(changeEndDate(e.target.value));
        }}
        value={useAppSelector(({ registerUser }) => registerUser.plan.end_date)}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        id="end_date"
        label="Data De Termino"
        variant="outlined"
      />
    </Form>
  );
}
