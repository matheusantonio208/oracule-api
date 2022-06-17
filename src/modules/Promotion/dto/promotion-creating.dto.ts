export class PromotionCreatingDto {
  ticket: string;

  constructor(body: PromotionCreatingDto) {
    this.ticket = body?.ticket;
  }
}
