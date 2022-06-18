import { Router } from 'express';

import Ad from './ad.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Ad.store);
  route.post(`${baseUrl}/download/`, Ad.download);
  route.get(`${baseUrl}/index/:id`, Ad.index);
  route.get(`${baseUrl}/show`, Ad.show);
  route.delete(`${baseUrl}/delete/:id`, Ad.delete);
  route.put(`${baseUrl}/update/:id`, Ad.update);
}
