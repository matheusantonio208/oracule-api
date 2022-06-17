import { Router } from 'express';

import Person from './person.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Person.store);
  route.get(`${baseUrl}/index/:id`, Person.index);
  route.get(`${baseUrl}/show`, Person.show);
  route.delete(`${baseUrl}/delete/:id`, Person.delete);
  route.put(`${baseUrl}/update/:id`, Person.update);
}
