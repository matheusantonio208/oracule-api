import { Router } from 'express';
import Product from './product.controller';

export default function routes(
  route: Router,
  baseUrl: string,
  middleware?: any,
): void {
  route.post(`${baseUrl}/store`, Product.store);
  route.get(`${baseUrl}/index/:id`, Product.index);
  route.get(`${baseUrl}/show`, Product.show);
  route.delete(`${baseUrl}/delete/:id`, Product.delete);
  route.put(`${baseUrl}/update/:id`, Product.update);
}
