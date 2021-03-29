import React, { useEffect } from 'react';
import forms from '../Forms';
import { getPlans } from '../../utils/api';
import { updatePlans } from '../../redux/Slicers/plans';
import { useAppDispatch } from '../../redux/hooks';

const { ClientForm, PlanForm, VehicleForm } = forms;
declare interface RegisterFormProps {
  type: 'Cliente' | 'Veiculo' | 'Cobertura';
}
export default function RegisterForm({ type }: RegisterFormProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getPlans().then((data) => {
      dispatch(updatePlans(data));
    });
  }, []);

  switch (type) {
    case 'Cliente':
      return <ClientForm />;

    case 'Veiculo':
      return <VehicleForm />;

    case 'Cobertura':
      return <PlanForm />;

    default:
      return <div />;
  }
}
