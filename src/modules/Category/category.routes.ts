import { Router } from 'express';
import Category from './category.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Category.store);
  route.get(`${baseUrl}/index/:id`, Category.index);
  route.get(`${baseUrl}/show`, Category.show);
  route.delete(`${baseUrl}/delete/:id`, Category.delete);
  route.put(`${baseUrl}/update/:id`, Category.update);
}
