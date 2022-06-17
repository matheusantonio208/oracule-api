import { Router } from 'express';

import Feedstock from './feedstock.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Feedstock.store);
  route.get(`${baseUrl}/index/:id`, Feedstock.index);
  route.get(`${baseUrl}/show`, Feedstock.show);
  route.delete(`${baseUrl}/delete/:id`, Feedstock.delete);
  route.put(`${baseUrl}/update/:id`, Feedstock.update);
}
