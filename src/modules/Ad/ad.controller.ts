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

import { AdToCreateDto, AdCreateDto, AdCreatedDto } from './dto/index.dto';

import adRepository from './ad.repository';
import productRepository from '../Product/product.repository';
import shopRepository from '../Shop/shop.repository';

import adService from './ad.service';
import shopService from '../Shop/shop.service';

class AdController {
  async store(req: IRequest, res: IResponse) {
    try {
      const ad: AdToCreateDto = new AdToCreateDto(req.body);
      const { profit, product_id, shop_id, typeAd } = ad;

      const { production_cost, sku } = await productRepository.getOneById(
        product_id,
      );
      const { name: shopName, sku_suffix } = await shopRepository.getOneById(
        shop_id,
      );

      const skuAd: string = sku + sku_suffix;

      const priceWithoutCommissionShop: number =
        adService.generatePriceWithoutCommissionShop(profit, [production_cost]);

      const finalPrice: number = shopService.generatePriceWithCommissionShop(
        priceWithoutCommissionShop,
        shopName,
        typeAd,
      );

      const adCreate: AdCreateDto = new AdCreateDto({
        ...ad,
        sku: skuAd,
        price: finalPrice,
        price_history: [{ date: new Date(), price: finalPrice }],
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
