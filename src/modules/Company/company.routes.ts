import { Router } from 'express';

import Company from './company.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Company.store);
  route.get(`${baseUrl}/index/:id`, Company.index);
  route.get(`${baseUrl}/show`, Company.show);
  route.delete(`${baseUrl}/delete/:id`, Company.delete);
  route.put(`${baseUrl}/update/:id`, Company.update);
}
