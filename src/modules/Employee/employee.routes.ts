import { Router } from 'express';
import Employee from './employee.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Employee.store);
  route.get(`${baseUrl}/index/:id`, Employee.index);
  route.get(`${baseUrl}/show`, Employee.show);
  route.delete(`${baseUrl}/delete/:id`, Employee.delete);
  route.put(`${baseUrl}/update/:id`, Employee.update);
}
