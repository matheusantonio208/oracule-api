import { Router } from 'express';

import Promotion from './promotion.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Promotion.store);
  route.get(`${baseUrl}/index/:id`, Promotion.index);
  route.get(`${baseUrl}/show`, Promotion.show);
  route.delete(`${baseUrl}/delete/:id`, Promotion.delete);
  route.put(`${baseUrl}/update/:id`, Promotion.update);
}
