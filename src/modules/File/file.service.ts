import sharp from 'sharp';
import FileRepository from './file.repository';

import fs from 'fs';

import { parse, resolve } from 'path';

class FileService {
  getBufferAndName(fileList, extension, suffix?) {
    let files = [];

    for (var i = 0; i < fileList.length; i++) {
      const fieldName = fileList[i][0].fieldname;
      const fileName = parse(fileList[i][0].originalname).name;
      const suffixText = suffix ? `_${suffix}` : '';

      files.push({
        name: `${fieldName}_${fileName}${suffixText}${extension}`,
        buffer: fileList[i][0].buffer,
      });
    }
    return files;
  }

  async uploadCommercialImage(files, quality, path, typeFile) {
    files.forEach(async (_, index) => {
      const link = `${files[index].name}`;
      const destination = `${process.env.UPLOAD_DIRECTORY}${path}/${files[index].name}`;

      fs.access(destination, (error) => {
        if (error) {
          fs.mkdirSync(destination);
        }
      });

      await sharp(files[index].buffer)
        .webp({ quality })
        .resize(1500, 1500)
        .toFile(destination);

      await FileRepository.create({
        name: files[index].name,
        link,
        type_file: typeFile,
      });
    });
  }

  verifyAndCreateDirectory(path) {
    fs.access(path, (error) => {
      if (error) {
        fs.mkdir(path, { recursive: true }, (error) => {});
      }
    });
  }

  async uploadFile(files, path, typeFile) {
    files.forEach(async (_, index) => {
      const link = `${files[index].name}`;
      const destination = resolve(process.env.UPLOAD_DIRECTORY, path);

      this.verifyAndCreateDirectory(destination);

      return;

      await sharp(files[index].buffer).toFile(
        process.env.UPLOAD_DIRECTORY +
          path +
          'productions-file/' +
          files[index].name,
      );

      await FileRepository.create({
        name: files[index].name,
        link,
        type_file: typeFile,
      });
    });
  }
}

export default new FileService();
