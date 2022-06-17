import { Router } from 'express';

import File from './file.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store/:typeFile`, middleware, File.store);
  route.get(`${baseUrl}/index/:id`, File.index);
  route.get(`${baseUrl}/show`, File.show);
  route.delete(`${baseUrl}/delete/:id`, File.delete);
  route.put(`${baseUrl}/update/:id`, File.update);
}
