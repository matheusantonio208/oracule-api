import { IRequest, IResponse, IMulterRequest } from '../../@types';
import { FileCreatedDto, FileToUpdateDto } from './dto/index.dto';
import fileRepository from './file.repository';
import fileService from './file.service';

class FileController {
  async store(req: IMulterRequest, res: IResponse) {
    try {
      const { typeFile } = req.params;
      const { path } = req.query;
      const { files } = req;
      const fileList = [];

      Object.keys(files).forEach((key) => {
        fileList.push(files[key]);
      });

      const destination = path.split('-');

      switch (typeFile) {
        case 'photo':
          const commercialFile = fileService.getBufferAndName(
            fileList,
            '.webp',
          );

          await fileService.uploadCommercialImage(
            commercialFile,
            20,
            destination,
            typeFile,
          );
          break;

        case 'video':
          const videoFile = fileService.getBufferAndName(fileList, '.mp4');
          await fileService.uploadFile(videoFile, destination, typeFile);
          break;

        case 'artwork':
          const artworkFile = fileService.getBufferAndName(fileList, '.png');
          await fileService.uploadFile(artworkFile, destination, typeFile);
          break;

        case 'edit-artwork':
          const editArtworkFile = fileService.getBufferAndName(
            fileList,
            '.psd',
          );
          fileService.uploadFile(editArtworkFile, destination, typeFile);
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
      const { id } = req.params;

      const file: FileCreatedDto = await fileRepository.getOneById(id);

      return res.status(201).json(file);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async show(req: IRequest, res: IResponse) {
    try {
      const { property, sort, itensPerPage, pagination } = req.query;

      const file: Array<FileCreatedDto> = await fileRepository.listAll(
        property,
        sort,
        itensPerPage,
        pagination,
      );

      return res.status(201).json(file);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }

  async delete(req: IRequest, res: IResponse) {
    try {
      const { id } = req.params;

      await fileRepository.deleteById(id);

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
      const data: FileToUpdateDto = new FileToUpdateDto(req.body);

      const fileUpdated: FileCreatedDto = await fileRepository.updateById(
        id,
        data,
      );

      return res.status(201).json(fileUpdated);
    } catch (error) {
      return res.status(401).json({ error_msg: `Error! ${error}` });
    }
  }
}

export default new FileController();
