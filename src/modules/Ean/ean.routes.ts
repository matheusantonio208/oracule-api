import { Router } from 'express';
import Ean from './ean.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Ean.store);
  route.get(`${baseUrl}/index/:id`, Ean.index);
  route.get(`${baseUrl}/show`, Ean.show);
  route.delete(`${baseUrl}/delete/:id`, Ean.delete);
  route.put(`${baseUrl}/update/:id`, Ean.update);
}
