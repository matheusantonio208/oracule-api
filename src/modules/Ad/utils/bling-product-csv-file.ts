export type tableValue = {
  id;
  sku;
  name;
  unit;
  ncm;
  origin;
  price;
  fixed_ipi_value;
  comments;
  situation;
  inventory;
  cost_price;
  code_in_the_supplier;
  provider;
  location;
  maximum_stock;
  minimum_stock;
  liquid_weight_kg;
  gross_weight_kg;
  gtin_ean_packing;
  product_width;
  product_height;
  product_depth;
  expiration_date;
  product_description_in_supplier;
  complementary_description;
  cashier_unit;
  product_variation;
  production_type;
  ipi_framework_class;
  service_list_code;
  item_type;
  tags_group;
  tax;
  father_code;
  integration_code;
  product_group;
  brand;
  cest;
  volumes;
  short_description;
  cross_docking;
  url_external_images;
  external_link;
  months_warranty_in_the_supplier;
  product_condition;
  free_shipping;
  fci_number;
  video;
  department;
  unit_of_measurement;
  purchase_price;
  icms_st_base_value_for_retention;
  icms_st_value_for_retention;
  substitutes_own_icms_value;
  product_category;
};
export function getValues(data: tableValue[]) {
  let values = [];
  data.map((item) =>
    values.push({
      id: item.id ?? '',
      sku: item.sku ?? '',
      name: item.name ?? '',
      unit: item.unit ?? '',
      ncm: item.ncm ?? '',
      origin: item.origin ?? '',
      price: item.price ?? '',
      fixed_ipi_value: item.fixed_ipi_value ?? '',
      comments: item.comments ?? '',
      situation: item.situation ?? '',
      inventory: item.inventory ?? '',
      cost_price: item.cost_price ?? '',
      code_in_the_supplier: item.code_in_the_supplier ?? '',
      provider: item.provider ?? '',
      location: item.location ?? '',
      maximum_stock: item.maximum_stock ?? '',
      minimum_stock: item.minimum_stock ?? '',
      liquid_weight_kg: item.liquid_weight_kg ?? '',
      gross_weight_kg: item.gross_weight_kg ?? '',
      gtin_ean_packing: item.gtin_ean_packing ?? '',
      product_width: item.product_width ?? '',
      product_height: item.product_height ?? '',
      product_depth: item.product_depth ?? '',
      expiration_date: item.expiration_date ?? '',
      product_description_in_supplier:
        item.product_description_in_supplier ?? '',
      complementary_description: item.complementary_description ?? '',
      cashier_unit: item.cashier_unit ?? '',
      product_variation: item.product_variation ?? '',
      production_type: item.production_type ?? '',
      ipi_framework_class: item.ipi_framework_class ?? '',
      service_list_code: item.service_list_code ?? '',
      item_type: item.item_type ?? '',
      tags_group: item.tags_group ?? '',
      tax: item.tax ?? '',
      father_code: item.father_code ?? '',
      integration_code: item.integration_code ?? '',
      product_group: item.product_group ?? '',
      brand: item.brand ?? '',
      cest: item.cest ?? '',
      volumes: item.volumes ?? '',
      short_description: item.short_description ?? '',
      cross_docking: item.cross_docking ?? '',
      url_external_images: item.url_external_images ?? '',
      external_link: item.external_link ?? '',
      months_warranty_in_the_supplier:
        item.months_warranty_in_the_supplier ?? '',
      product_condition: item.product_condition ?? '',
      free_shipping: item.free_shipping ?? '',
      fci_number: item.fci_number ?? '',
      video: item.video ?? '',
      department: item.department ?? '',
      unit_of_measurement: item.unit_of_measurement ?? '',
      purchase_price: item.purchase_price ?? '',
      icms_st_base_value_for_retention:
        item.icms_st_base_value_for_retention ?? '',
      icms_st_value_for_retention: item.icms_st_value_for_retention ?? '',
      substitutes_own_icms_value: item.substitutes_own_icms_value ?? '',
      product_category: item.product_category ?? '',
    }),
  );

  return values;
}
export const header = [
  { id: 'id', title: 'ID' },
  { id: 'sku', title: 'SKU' },
  { id: 'name', title: 'Nome' },
  { id: 'unit', title: 'Unidade' },
  { id: 'ncm', title: 'NCM' },
  { id: 'origin', title: 'Origem' },
  { id: 'price', title: 'Preço' },
  { id: 'fixed_ipi_value', title: 'Valor IPI fixo' },
  { id: 'comments', title: 'Observações' },
  { id: 'situation', title: 'Situação' },
  { id: 'inventory', title: 'Estoque' },
  { id: 'cost_price', title: 'Preço de custo' },
  { id: 'code_in_the_supplier', title: 'Cód no fornecedor' },
  { id: 'provider', title: 'Fornecedor' },
  { id: 'location', title: 'Localização' },
  { id: 'maximum_stock', title: 'Estoque maximo' },
  { id: 'minimum_stock', title: 'Estoque minimo' },
  { id: 'liquid_weight_kg', title: 'Peso líquido (Kg)' },
  { id: 'gross_weight_kg', title: 'Peso bruto (Kg)' },
  { id: 'gtin_ean', title: 'GTIN/EAN' },
  { id: 'gtin_ean_packing', title: 'GTIN/EAN da embalagem' },
  { id: 'product_width', title: 'Largura do Produto' },
  { id: 'product_height', title: 'Altura do Produto' },
  { id: 'product_depth', title: 'Profundidade do produto' },
  { id: 'expiration_date', title: 'Data Validade' },
  {
    id: 'product_description_in_supplier',
    title: 'Descrição do Produto no Fornecedor',
  },
  { id: 'complementary_description', title: 'Descrição Complementar' },
  { id: 'cashier_unit', title: 'Unidade por Caixa' },
  { id: 'product_variation', title: 'Produto Variação' },
  { id: 'production_type', title: 'Tipo Produção' },
  {
    id: 'ipi_framework_class',
    title: 'Classe de enquadramento do IPI',
  },
  {
    id: 'service_list_code',
    title: 'Código da lista de serviços',
  },
  { id: 'item_type', title: 'Tipo do item' },
  { id: 'tags_group', title: 'Grupo de Tags/Tags' },
  { id: 'tax', title: 'Tributos' },
  { id: 'father_code', title: 'Código Pai' },
  { id: 'integration_code', title: 'Código Integração' },
  { id: 'product_group', title: 'Grupo de produtos' },
  { id: 'brand', title: 'Marca' },
  { id: 'cest', title: 'CEST' },
  { id: 'volumes', title: 'Volumes' },
  { id: 'short_description', title: 'Descrição Curta' },
  { id: 'cross_docking', title: 'Cross-Docking' },
  { id: 'url_external_images', title: 'URL Imagens Externas' },
  { id: 'external_link', title: 'Link Externo' },
  {
    id: 'months_warranty_in_the_supplier',
    title: 'Meses Garantia no Fornecedor',
  },
  { id: 'product_condition', title: 'Condição do produto' },
  { id: 'free_shipping', title: 'Frete Grátis' },
  { id: 'fci_number', title: 'Número FCI' },
  { id: 'video', title: 'Vídeo' },
  { id: 'department', title: 'Departamento' },
  { id: 'unit_of_measurement', title: 'Unidade de medida' },
  { id: 'purchase_price', title: 'Preço de compra' },
  {
    id: 'icms_st_base_value_for_retention',
    title: 'Valor base ICMS ST para retenção',
  },
  {
    id: 'icms_st_value_for_retention',
    title: 'Valor_ICMS_ST_para_retenção',
  },
  {
    id: 'substitutes_own_icms_value',
    title: 'Valor ICMS próprio do substituto',
  },
  { id: 'product_category', title: 'Categoria do produto' },
];
