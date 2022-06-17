export class FeedstockCreatedDto {
  name: string;
  variation: string;
  sku: string;
  material: string;
  material_synonyms: string;
  ncm: string;
  weight_in_grams: number;

  constructor(body: FeedstockCreatedDto) {
    this.name = body?.name;
    this.variation = body?.variation;
    this.sku = body?.sku;
    this.material = body?.material;
    this.material_synonyms = body?.material_synonyms;
    this.ncm = body?.ncm;
    this.weight_in_grams = body?.weight_in_grams;
  }
}
