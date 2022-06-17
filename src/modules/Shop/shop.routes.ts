import { Router } from 'express';
import Shop from './shop.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Shop.store);
  route.get(`${baseUrl}/index/:id`, Shop.index);
  route.get(`${baseUrl}/show`, Shop.show);
  route.delete(`${baseUrl}/delete/:id`, Shop.delete);
  route.put(`${baseUrl}/update/:id`, Shop.update);
}
