import { Router } from 'express';
import Provider from './provider.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Provider.store);
  route.get(`${baseUrl}/index/:id`, Provider.index);
  route.get(`${baseUrl}/show`, Provider.show);
  route.delete(`${baseUrl}/delete/:id`, Provider.delete);
  route.put(`${baseUrl}/update/:id`, Provider.update);
}
