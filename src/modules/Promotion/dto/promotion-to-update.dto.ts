export class PromotionToCreateDto {
  ticket: string;

  constructor(body: PromotionToCreateDto) {
    this.ticket = body?.ticket;
  }
}
