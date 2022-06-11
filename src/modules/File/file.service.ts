import sharp from 'sharp';
import multer from 'multer';
import FileRepository from './file.repository';

import fs from 'fs';

import { parse, resolve } from 'path';

class FileService {
  createNamesFiles(files, extension) {
    let names = [];

    files.map((file) => names.push(parse(file.originalname).name + extension));

    return names;
  }

  getBuffers(files) {
    let buffers = [];

    files.map((file) => buffers.push(file.buffer));

    return buffers;
  }

  uploadProductionFile(file, name) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, callback) => {
          return callback(null, file.originalname);
        },
      }),
    };
  }

  async uploadMockupImage(buffers, names, quality) {
    fs.access(process.env.UPLOAD_DIRECTORY, (error) => {
      if (error) {
        fs.mkdirSync(process.env.UPLOAD_DIRECTORY);
      }
    });

    buffers.forEach(async (_, index) => {
      const link = `/file/${names[index]}`;

      await sharp(buffers[index])
        .webp({ quality })
        .toFile(process.env.UPLOAD_DIRECTORY + names[index]);

      await FileRepository.create({
        name: names[index],
        link,
      });
    });
  }
}

export default new FileService();
