import { IRequest, IResponse, MulterRequest } from '../../@types';
import { FileCreatedDto } from './dto/file-created.dto';

import FileRepository from './file.repository';
import FileService from './file.service';

class FileController {
  async store(req: MulterRequest, res: IResponse) {
    try {
      const { typeFile, path } = req.params;
      const { files } = req;
      const fileList = [];

      Object.keys(files).forEach((key) => {
        fileList.push(files[key]);
      });

      const destination = path.split('-');

      switch (typeFile) {
        case 'photo':
          let commercialFile = FileService.getBufferAndName(fileList, '.webp');

          await FileService.uploadCommercialImage(
            commercialFile,
            20,
            destination,
            typeFile,
          );
          break;

        case 'video':
          let videoFile = FileService.getBufferAndName(fileList, '.mp4');
          await FileService.uploadFile(videoFile, destination, typeFile);
          break;

        case 'artwork':
          let artworkFile = FileService.getBufferAndName(fileList, '.png');
          await FileService.uploadFile(artworkFile, destination, typeFile);
          break;

        case 'edit-artwork':
          let editArtworkFile = FileService.getBufferAndName(fileList, '.psd');
          FileService.uploadFile(editArtworkFile, destination, typeFile);
          break;

        default:
          return res
            .status(401)
            .json({ error_msg: `Error! Type File don't exists` });
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
