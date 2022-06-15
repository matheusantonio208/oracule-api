/*
 * ===Production cost===
 * Matéria Prima
 * Maquinário e Ferramentas
 * Mão de obra
 * Impostos
 *
 * ===Operation cost===
 * Infraestrutura
 * Expanções e Reformas
 * Depreciação
 * Custo de Erros
 * Custo de Logística
 * Custo de Marketing
 * Serviços (Internet, Hospedagem do servidor de produção, telefone, serviço de email, etc)
 * Aluguel
 * Taxa do Cartão
 */
import { IRequest, IResponse } from '../../@types';

import { AdToCreateDto, AdCreatingDto, AdCreatedDto } from './dto/index.dto';
import { CompanyCreatedDto } from '../Company/dto/index.dto';
import { ProductCreatedDto } from '../Product/dto/product-created.dto';
import { EanCreatingDto, EanCreatedDto } from '../Ean/dto/index.dto';
import { ShopCreatedDto } from '../Shop/dto/index.dto';

import adRepository from './ad.repository';
import productRepository from '../Product/product.repository';
import shopRepository from '../Shop/shop.repository';
import companyRepository from '../Company/company.repository';
import eanRepository from '../Ean/ean.repository';

import adService from './ad.service';
import shopService from '../Shop/shop.service';

class AdController {
  async store(req: IRequest, res: IResponse) {
    try {
      const ad: AdToCreateDto = new AdToCreateDto(req.body);
      const { profit, product_id, shop_id, typeAd } = ad;

      const product: ProductCreatedDto = await productRepository.getOneById(
        product_id,
      );
      const { production_cost, product_code, sku } = product;

      const shop: ShopCreatedDto = await shopRepository.getOneById(shop_id);
      const { name: shopName, sku_suffix } = shop;

      // === Create EAN ===
      const { company_id } = req.body;
      const company: CompanyCreatedDto = await companyRepository.getOneById(
        company_id,
      );
      const cnpj = company.cnpj.replace(/[^\d]+/g, '');
      const cnpjDigits: string = cnpj.slice(0, 5);

      const ean: string = await adService.generateEan13(
        cnpjDigits,
        product_code,
      );
      const eanCreating = new EanCreatingDto({ ean });
      const eanCreated: EanCreatedDto = await eanRepository.create(eanCreating);

      // === Create SKU ===
      const skuAd: string = sku + sku_suffix;

      // === Create Price ===
      const priceWithoutCommissionShop: number =
        adService.generatePriceWithoutCommissionShop(profit, [production_cost]);
      const priceWithCommissionShop: number =
        shopService.generatePriceWithCommissionShop(
          priceWithoutCommissionShop,
          shopName,
          typeAd,
        );

      // === Create Ad ===
      const adCreate: AdCreatingDto = new AdCreatingDto({
        ...ad,
        ean_code: eanCreated.ean,
        sku: skuAd,
        price: priceWithCommissionShop,
        price_history: [{ date: new Date(), price: priceWithCommissionShop }],
      });

      const adCreated: AdCreatedDto = await adRepository.create(adCreate);

      return res.status(201).json(adCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const ad: AdCreatedDto = await adRepository.getOneById(id);

      return res.status(201).json(ad);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const ad: Array<AdCreatedDto> = await adRepository.listAll();

      return res.status(201).json(ad);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await adRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your ad was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const adUpdated = await adRepository.updateById(id, data);

      return res.status(201).json(adUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new AdController();
