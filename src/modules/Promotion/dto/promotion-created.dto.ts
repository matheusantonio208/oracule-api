export class PromotionCreatedDto {
  ticket: string;

  constructor(body: PromotionCreatedDto) {
    this.ticket = body?.ticket;
  }
}
