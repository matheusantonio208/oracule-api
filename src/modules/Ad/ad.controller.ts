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
import { getValues } from 'utils/json-to-csv';
import { IRequest, IResponse } from '../../@types';
import { ProductCreatedDto } from '../Product/dto/product-created.dto';
import productRepository from '../Product/product.repository';
import { ShopCreatedDto } from '../Shop/dto/index.dto';
import shopRepository from '../Shop/shop.repository';
import adRepository from './ad.repository';
import adService from './ad.service';
import {
  AdToCreateDto,
  AdCreatingDto,
  AdCreatedDto,
  AdToUpdateDto,
} from './dto/index.dto';

class AdController {
  async store(req: IRequest, res: IResponse) {
    try {
      const ad: AdToCreateDto = new AdToCreateDto(req.body);
      const product: ProductCreatedDto = await productRepository.getOneById(
        ad.products_id[0],
      );
      const shop: ShopCreatedDto = await shopRepository.getOneById(ad.shop_id);

      const adCode: string = await adService.generateAdCode();
      const skuAd: string = adService.generateSku(
        product.sku,
        adCode,
        shop.sku_suffix,
      );
      const eanCodeAd = await adService.generateEan13(
        ad.company_id,
        ad.country_ean_code,
        adCode,
      );

      //TODO: Generate Sum Cost Product of all products in ad
      const costs = [product.production_cost];
      const priceWithCommissionShop = await adService.createPrice(
        ad.profit,
        costs,
        shop.name,
        ad.typeAd,
      );

      const adCreating: AdCreatingDto = new AdCreatingDto({
        ...ad,
        ad_code: adCode,
        ean_code: eanCodeAd,
        sku: skuAd,
        price: priceWithCommissionShop,
        price_history: [{ date: new Date(), price: priceWithCommissionShop }],
      });

      const adCreated: AdCreatedDto = await adRepository.create(adCreating);

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
      const { property, sort, itensPerPage, pagination } = req.query;

      const ad: Array<AdCreatedDto> = await adRepository.listAll(
        property,
        sort,
        itensPerPage,
        pagination,
      );

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
        .json({ success_msg: `Success! Your  ad was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data: AdToUpdateDto = new AdToUpdateDto(req.body);

      const adUpdated: AdCreatedDto = await adRepository.updateById(id, data);

      return res.status(201).json(adUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async download(req: IRequest, res: IResponse) {
    try {
      const values = getValues(req.body);
      console.log(values);

      adService.exportCSV(values);

      return res.status(201).json('Exported!');
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new AdController();
