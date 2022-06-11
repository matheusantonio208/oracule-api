import { IPromotion } from '../promotion.interface';

export class PromotionCreateDto implements IPromotion {
  ticket: string;

  constructor(body: IPromotion) {
    this.ticket = body?.ticket;
  }
}
