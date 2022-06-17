import { Router } from 'express';
import Factory from './factory.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Factory.store);
  route.get(`${baseUrl}/index/:id`, Factory.index);
  route.get(`${baseUrl}/show`, Factory.show);
  route.delete(`${baseUrl}/delete/:id`, Factory.delete);
  route.put(`${baseUrl}/update/:id`, Factory.update);
}
