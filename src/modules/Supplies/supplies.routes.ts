import { Router } from 'express';
import Supplies from './supplies.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Supplies.store);
  route.get(`${baseUrl}/index/:id`, Supplies.index);
  route.get(`${baseUrl}/show`, Supplies.show);
  route.delete(`${baseUrl}/delete/:id`, Supplies.delete);
  route.put(`${baseUrl}/update/:id`, Supplies.update);
}
