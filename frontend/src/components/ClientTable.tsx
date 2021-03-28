import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { updateRawCustomerData, filterCustomerData } from '../redux/Slicers/clients';

import { getSubscribers } from '../utils/api';
import TableFilter from './TableFilter';

const headers = [
  'Cliente',
  'Placa',
  'Descrição',
  'Plano',
  'Data Inicio',
  'Data Final',
];
export default function ClientTable() {
  const dispatch = useAppDispatch();
  const rows = useAppSelector(({ clientsData }) => clientsData.filteredCustomerData);

  useEffect(() => {
    getSubscribers().then((data) => {
      dispatch(updateRawCustomerData(data));
      dispatch(filterCustomerData(data));
    });
  }, []);
  return (
    <TableContainer>
      <TableFilter />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header} align="right">
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ plan, customer, vehicle }) => (
            <TableRow key={customer.cpf}>
              <TableCell align="center" component="th" scope="row">
                {customer.name}
              </TableCell>
              <TableCell align="right">{vehicle.plate}</TableCell>
              <TableCell align="right">{vehicle.description}</TableCell>
              <TableCell align="right">{plan.product}</TableCell>
              <TableCell align="right">{plan.begin_date}</TableCell>
              <TableCell align="right">{plan.end_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
