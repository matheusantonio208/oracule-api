import { IRequest, IResponse } from '../../@types';
import {
  StockToCreateDto,
  StockCreatingDto,
  StockCreatedDto,
  StockToUpdateDto,
} from './dto/index.dto';
import stockRepository from './stock.repository';

// import stockService from './stock.service';

class StockController {
  async store(req: IRequest, res: IResponse) {
    try {
      // === Get Vars === //
      const stock: StockToCreateDto = new StockToCreateDto(req.body);

      // === Generate Vars === //
      // const stockProperty: number = await stockService.serviceFunction();

      // === Create Dto === //
      const stockCreatingDto: StockCreatingDto = new StockCreatingDto({
        ...stock,
        // code: stockCode
      });

      // === Create Object === //
      const stockCreated: StockCreatedDto = await stockRepository.create(
        stockCreatingDto,
      );

      return res.status(201).json(stockCreated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      const stock: StockCreatedDto = await stockRepository.getOneById(id);

      return res.status(201).json(stock);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const stock: Array<StockCreatedDto> = await stockRepository.listAll(
        property,
        sort,
        itensPerPage,
        pagination,
      );

      return res.status(201).json(stock);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await stockRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your stock was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data: StockToUpdateDto = new StockToUpdateDto(req.body);

      const stockUpdated: StockCreatedDto = await stockRepository.updateById(
        id,
        data,
      );

      return res.status(201).json(stockUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new StockController();
