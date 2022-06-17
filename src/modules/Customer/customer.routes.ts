import { Router } from 'express';
import Customer from './customer.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Customer.store);
  route.get(`${baseUrl}/index/:id`, Customer.index);
  route.get(`${baseUrl}/show`, Customer.show);
  route.delete(`${baseUrl}/delete/:id`, Customer.delete);
  route.put(`${baseUrl}/update/:id`, Customer.update);
}
