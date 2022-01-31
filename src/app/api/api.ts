import axios from 'axios';
import { ICategory } from '../components/Sections/Category/ICategory';
import { IGoodsState } from '../redux/reducers/goodsReducer/IGoodsReducer';
import { IUser } from '../redux/reducers/usersReducer/IUser';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const fetchUsers = (): Promise<IUser[]> => {
  return instance.get(`users`).then((res) => res.data);
};

export const login = (tel: string, password: string): Promise<IUser> => {
  return instance.post(`auth/login`, { tel, password }).then((res) => {
    localStorage.setItem('token', res.data.token);
    return res.data.dataValues;
  });
};

export const registration = (
  name: string,
  tel: string,
  email: string,
  password: string,
  role: string,
): Promise<IUser> => {
  return instance
    .post(`auth/registration`, { name, tel, email, password, role })
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      return res.data.dataValues;
    });
};

export const fetchGoods = (): Promise<IGoodsState> => {
  return instance.get(`goods`).then((res) => res.data);
};

export const fetchCategories = (): Promise<ICategory[]> => {
  return instance.get('categories').then((res) => res.data);
};
