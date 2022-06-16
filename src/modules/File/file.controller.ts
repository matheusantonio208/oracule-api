import { IRequest, IResponse, MulterRequest } from '../../@types';
import { FileCreatedDto } from './dto/file-created.dto';

import FileRepository from './file.repository';
import FileService from './file.service';

class FileController {
  async store(req: MulterRequest, res: IResponse) {
    try {
      const { files } = req;
      const fileList = [];

      Object.keys(files).forEach((key) => {
        fileList.push(files[key]);
      });

      const filesReduce = FileService.reduceFiles(fileList, '.webp');
      await FileService.uploadMockupImage(filesReduce, 20, 'mockup');

      // if (mockupBuffers) {
      //   const names = FileService.createNamesFiles(files, '.webp');
      // }

      // if (art) {
      //   const name = FileService.createNamesFiles(art, art.fieldname, '.jpg');
      //   await FileService.uploadProductionFile(art, name);
      // }

      // if (psd) {
      //   const name = FileService.createNamesFiles(psd, psd.fieldname, '.psd');
      //   await FileService.uploadProductionFile(psd, name);
      // }

      // if (video) {
      //   const name = FileService.createNamesFiles(
      //     video,
      //     video.fieldname,
      //     '.mp4',
      //   );
      //   await FileService.uploadProductionFile(video, name);
      // }

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
      const file: Array<FileCreatedDto> = await FileRepository.listAll();

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
