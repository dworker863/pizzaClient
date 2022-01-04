import axios from 'axios';
import { IUser } from '../redux/reducers/usersReducer/userTypes';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

const baseURL = 'http://localhost:5000/';

export const fetchUsers = (): Promise<IUser[]> => {
  return instance.get(`${baseURL}users`).then((res) => res.data);
};
