import { Router } from 'express';

import Transaction from './transaction.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Transaction.store);
  route.get(`${baseUrl}/index/:id`, Transaction.index);
  route.get(`${baseUrl}/show`, Transaction.show);
  route.delete(`${baseUrl}/delete/:id`, Transaction.delete);
  route.put(`${baseUrl}/update/:id`, Transaction.update);
}
