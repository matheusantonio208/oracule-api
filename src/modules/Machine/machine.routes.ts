import { Router } from 'express';
import Machine from './machine.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Machine.store);
  route.get(`${baseUrl}/index/:id`, Machine.index);
  route.get(`${baseUrl}/show`, Machine.show);
  route.delete(`${baseUrl}/delete/:id`, Machine.delete);
  route.put(`${baseUrl}/update/:id`, Machine.update);
}
