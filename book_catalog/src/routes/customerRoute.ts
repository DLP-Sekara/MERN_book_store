import express from 'express';
import { deleteCustomer, getAllCustomer, loginCustomer, logout, refresh, saveCustomer, userDetail } from '../controllers/customerController';
const route=express.Router();
route.get('/all', getAllCustomer);
route.post('/register', saveCustomer);
route.post('/login', loginCustomer);
route.get('/logout', logout);
route.post('/refresh', refresh);
route.get('/userDetail', userDetail);
route.delete('/delete/:id', deleteCustomer);
export default route; 