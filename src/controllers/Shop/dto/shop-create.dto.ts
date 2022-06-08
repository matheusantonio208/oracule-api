import { IShop } from '../shop.interface';

export class ShopCreateDto implements IShop {
  name: string;

  constructor(body: IShop) {
    this.name = body?.name;
  }
}
