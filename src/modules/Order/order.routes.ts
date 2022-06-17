import { Router } from 'express';

import Order from './order.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Order.store);
  route.get(`${baseUrl}/index/:id`, Order.index);
  route.get(`${baseUrl}/show`, Order.show);
  route.delete(`${baseUrl}/delete/:id`, Order.delete);
  route.put(`${baseUrl}/update/:id`, Order.update);
}
