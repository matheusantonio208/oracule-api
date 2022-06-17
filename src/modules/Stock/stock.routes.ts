import { Router } from 'express';
import Stock from './stock.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Stock.store);
  route.get(`${baseUrl}/index/:id`, Stock.index);
  route.get(`${baseUrl}/show`, Stock.show);
  route.delete(`${baseUrl}/delete/:id`, Stock.delete);
  route.put(`${baseUrl}/update/:id`, Stock.update);
}
