export class PromotionToUpdateDto {
  ticket: string;

  constructor(body: PromotionToUpdateDto) {
    this.ticket = body?.ticket;
  }
}
