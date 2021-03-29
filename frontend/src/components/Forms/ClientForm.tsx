import React from 'react';

import { TextField } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  changeName,
  changePhone,
  changeCpf,
  changeEmail,
} from '../../redux/Slicers/registerUser';
import { Form } from './style';

export default function ClientForm() {
  const dispatch = useAppDispatch();

  return (
    <Form>
      <TextField
        onChange={(e) => {
          dispatch(changeName(e.target.value));
        }}
        className="form_field"
        value={useAppSelector(({ registerUser }) => registerUser.customer.name)}
        required
        data-testid="name-input"
        id="name"
        label="Nome"
        variant="outlined"
      />
      <TextField
        className="form_field"
        required
        data-testid="phone-input"
        onChange={(e) => {
          dispatch(changePhone(e.target.value));
        }}
        value={useAppSelector(
          ({ registerUser }) => registerUser.customer.phone,
        )}
        type="number"
        id="phone"
        label="Telefone"
        variant="outlined"
      />
      <TextField
        onChange={(e) => {
          dispatch(changeCpf(e.target.value));
        }}
        data-testid="cpf-input"
        className="form_field"
        value={useAppSelector(({ registerUser }) => registerUser.customer.cpf)}
        required
        type="number"
        id="cpf"
        label="Cpf"
        variant="outlined"
      />
      <TextField
        onChange={(e) => {
          dispatch(changeEmail(e.target.value));
        }}
        className="form_field"
        data-testid="email-input"
        value={useAppSelector(
          ({ registerUser }) => registerUser.customer.email,
        )}
        required
        type="email"
        id="email"
        label="Email"
        variant="outlined"
      />
    </Form>
  );
}
