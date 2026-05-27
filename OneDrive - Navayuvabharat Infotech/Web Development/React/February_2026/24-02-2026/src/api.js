import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => axios.get(BASE_URL);
export const updateUser = (id, partialData) => axios.patch(`${BASE_URL}/${id}`, partialData);
export const replaceUser = (id, fullData) => axios.put(`${BASE_URL}/${id}`, fullData);