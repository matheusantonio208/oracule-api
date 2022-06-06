import { Document } from 'mongoose';
import { IRequest, IResponse } from '../../@types';

import { IFile } from './file.interface';
import FileRepository from './file.repository';
import FileService from './file.service';

class FileController {
  async store(req: IRequest, res: IResponse) {
    try {
      const { mockups, art, psd } = req;
      const mockupBuffers = FileService.getBuffers(mockups);

      if (mockupBuffers) {
        const names = FileService.createNamesFiles(mockups, '.webp');
        await FileService.uploadMockupImage(mockupBuffers, names, 20);
      }

      if (art) {
        const name = FileService.createNamesFiles(art, '.jpg');
        await FileService.uploadProductionFile(art, name);
      }

      if (psd) {
        const name = FileService.createNamesFiles(psd, '.psd');
        await FileService.uploadProductionFile(psd, name);
      }

      return res
        .status(201)
        .json({ success_msg: 'Congratulations! Upload completed' });
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
