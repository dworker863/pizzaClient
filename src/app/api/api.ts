import axios from 'axios';
import { IUser } from '../interfaces/user';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const fetchUsers = (): Promise<IUser[]> => {
  return instance.get(`users`).then((res) => res.data);
};

export const login = (tel: string, password: string): Promise<IUser> => {
  return instance.post(`auth/login`, { tel, password }).then((res) => {
    localStorage.setItem('token', res.data.token);
    console.log(localStorage.getItem('token'));
    return res.data.dataValues;
  });
};

export const registration = (
  name: string,
  tel: string,
  email: string,
  password: string,
): Promise<IUser> => {
  return instance
    .post(`auth/registration`, { name, tel, email, password })
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      console.log(localStorage.getItem('token'));
      return res.data;
    });
};
