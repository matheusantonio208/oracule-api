import fs from 'fs';
import { parse, resolve } from 'path';
import sharp from 'sharp';
import util from 'util';

import FileRepository from './file.repository';

class FileService {
  getBufferAndName(fileList, extension, suffix?) {
    const files = [];

    for (let i = 0; i < fileList.length; i++) {
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

  async verifyAndCreateDirectory(path) {
    const access = util.promisify(fs.access);
    const makeDir = util.promisify(fs.mkdir);

    try {
      await access(path);
    } catch (error) {
      await makeDir(path, { recursive: true });
    }
  }

  async uploadCommercialImage(
    files,
    quality: number,
    path: Array<string>,
    typeFile: string,
  ) {
    const destination = resolve(process.env.UPLOAD_DIRECTORY, ...path);
    await this.verifyAndCreateDirectory(destination);

    files.forEach(async (_, index) => {
      const link = `${files[index].name}`;
      const destinationWithFileName = resolve(
        process.env.UPLOAD_DIRECTORY,
        ...path,
        files[index].name,
      );

      await sharp(files[index].buffer)
        .webp({ quality })
        .resize(1500, 1500)
        .toFile(destinationWithFileName);

      await FileRepository.create({
        name: files[index].name,
        link,
        type_file: typeFile,
      });
    });
  }

  async uploadFile(files, path: Array<string>, typeFile: string) {
    const destination = resolve(
      process.env.UPLOAD_DIRECTORY,
      ...path,
      'production-files',
    );
    await this.verifyAndCreateDirectory(destination);

    files.forEach(async (_, index) => {
      const link = `${files[index].name}`;

      const destinationWithFileName = resolve(
        process.env.UPLOAD_DIRECTORY,
        ...path,
        'production-files',
        files[index].name,
      );

      await sharp(files[index].buffer).toFile(destinationWithFileName);

      await FileRepository.create({
        name: files[index].name,
        link,
        type_file: typeFile,
      });
    });
  }
}

export default new FileService();
