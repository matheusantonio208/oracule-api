import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { IFile } from './file.interface';
import FileRepository from './file.repository';
import FileService from './file.service';

class FileController {
  async store(req: IRequest, res: IResponse) {
    try {
      const { buffer, originalname: name } = req.file;

      const nameFile = FileService.createNameImageProduct(name);
      await FileService.sharpImage(buffer, nameFile, 20);

      const link = `/file/${nameFile}`;

      const file = await FileRepository.create({
        name: nameFile,
        link,
      });

      return res.json(file);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async index(req: IRequest, res: IResponse) {
    try {
      const { name } = req.params;

      const file = await FileRepository.getOneByName(name);

      return res.status(201).json(file);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const file: Array<Document<IFile>> = await FileRepository.listAll();

      return res.status(201).json(file);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await FileRepository.deleteById(id);

      return res
        .status(201)
        .json({ success_msg: `Success! Your file was deleted` });
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async update(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;
      const data = req.body;

      const fileUpdated = await FileRepository.updateById(id, data);

      return res.status(201).json(fileUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new FileController();