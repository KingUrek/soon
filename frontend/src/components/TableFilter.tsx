import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  setPlateFilter,
  setCustomerFilter,
  filterCustomerData,
} from '../redux/Slicers/clients';

export default function TableFilter() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.clientsData.filters);
  const rawData = useAppSelector((state) => state.clientsData.rawCustomerData);

  function onChange(type: 'customer' | 'plate', filter: string) {
    return dispatch(
      type === 'customer' ? setCustomerFilter(filter) : setPlateFilter(filter),
    );
  }

  function filterData() {
    let filteredData = rawData;
    const customerFitler = filters.customerFilter;
    const palteFilter = filters.plateFilter;
    if (filters.customerFilter !== '') {
      filteredData = filteredData.filter(({ customer }) => customer.name.includes(customerFitler));
    }
    if (filters.plateFilter !== '') {
      filteredData = filteredData.filter(({ vehicle }) => vehicle.plate.includes(palteFilter));
    }
    return dispatch(filterCustomerData(filteredData));
  }

  return (
    <div>
      <TextField
        InputLabelProps={{ shrink: true }}
        id="name_filter"
        label="Filtrar por nome"
        onChange={(e) => onChange('customer', e.target.value)}
        required
        type="text"
        value={filters.customerFilter}
        variant="outlined"
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        id="plate_filter"
        label="Filtrar por placa"
        onChange={(e) => onChange('plate', e.target.value)}
        required
        type="text"
        value={filters.plateFilter}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={filterData}>
        Filtrar
      </Button>
    </div>
  );
}
