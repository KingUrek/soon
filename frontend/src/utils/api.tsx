import axios from 'axios';
import { Iplan } from '../redux/Slicers/plans';
import { userInformationType } from '../redux/Slicers/registerUser';
import Config from '../config';

export async function getPlans() {
  return (await axios.get<Iplan[]>(`${Config.baseUrl}/api/plan`)).data;
}

export function subscribeCustomer(customer: userInformationType) {
  return axios.post(
    `${Config.baseUrl}/api/subscriber`,
    customer,
  );
}

export async function getSubscribers() {
  return (await axios.get<userInformationType[]>(`${Config.baseUrl}/api/subscriber`)).data;
}
