// Import csv-writer
export function getValues(data: tableValue) {
  return [
    {
      id: data.id ?? '',
      code: data.code ?? '',
      name: data.name ?? '',
      unit: data.unit ?? '',
      ncm: data.ncm ?? '',
      origin: data.origin ?? '',
      price: data.price ?? '',
      fixed_ipi_value: data.fixed_ipi_value ?? '',
      comments: data.comments ?? '',
      situation: data.situation ?? '',
      inventory: data.inventory ?? '',
      cost_price: data.cost_price ?? '',
      code_in_the_supplier: data.code_in_the_supplier ?? '',
      provider: data.provider ?? '',
      location: data.location ?? '',
      maximum_stock: data.maximum_stock ?? '',
      minimum_stock: data.minimum_stock ?? '',
      liquid_weight_kg: data.liquid_weight_kg ?? '',
      gross_weight_kg: data.gross_weight_kg ?? '',
      gtin_ean_packing: data.gtin_ean_packing ?? '',
      product_width: data.product_width ?? '',
      product_height: data.product_height ?? '',
      product_depth: data.product_depth ?? '',
      expiration_date: data.expiration_date ?? '',
      product_description_in_supplier:
        data.product_description_in_supplier ?? '',
      complementary_description: data.complementary_description ?? '',
      cashier_unit: data.cashier_unit ?? '',
      product_variation: data.product_variation ?? '',
      production_type: data.production_type ?? '',
      ipi_framework_class: data.ipi_framework_class ?? '',
      service_list_code: data.service_list_code ?? '',
      item_type: data.item_type ?? '',
      tags_group: data.tags_group ?? '',
      tax: data.tax ?? '',
      father_code: data.father_code ?? '',
      integration_code: data.integration_code ?? '',
      product_group: data.product_group ?? '',
      brand: data.brand ?? '',
      cest: data.cest ?? '',
      volumes: data.volumes ?? '',
      short_description: data.short_description ?? '',
      cross_docking: data.cross_docking ?? '',
      url_external_images: data.url_external_images ?? '',
      external_link: data.external_link ?? '',
      months_warranty_in_the_supplier:
        data.months_warranty_in_the_supplier ?? '',
      product_condition: data.product_condition ?? '',
      free_shipping: data.free_shipping ?? '',
      fci_number: data.fci_number ?? '',
      video: data.video ?? '',
      department: data.department ?? '',
      unit_of_measurement: data.unit_of_measurement ?? '',
      purchase_price: data.purchase_price ?? '',
      icms_st_base_value_for_retention:
        data.icms_st_base_value_for_retention ?? '',
      icms_st_value_for_retention: data.icms_st_value_for_retention ?? '',
      substitutes_own_icms_value: data.substitutes_own_icms_value ?? '',
      product_category: data.product_category ?? '',
    },
  ];
}

import { createObjectCsvWriter } from 'csv-writer';

type tableValue = {
  id;
  code;
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

export function exportToCsv(header: any, data: any, fileName: string): Boolean {
  const csvWriter = createObjectCsvWriter({
    path: `${fileName}.csv`,
    header: header,
  });

  csvWriter
    .writeRecords(data)
    .then(() => true)
    .catch((error) => {
      throw error;
    });

  return false;
}
