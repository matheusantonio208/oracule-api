import sharp from 'sharp';
import multer from 'multer';
import FileRepository from './file.repository';

import fs from 'fs';

import { parse, resolve } from 'path';

class FileService {
  reduceFiles(fileList, extension, suffix?) {
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

  async uploadMockupImage(files, quality, category) {
    fs.access(process.env.UPLOAD_DIRECTORY, (error) => {
      if (error) {
        fs.mkdirSync(process.env.UPLOAD_DIRECTORY);
      }
    });

    files.forEach(async (_, index) => {
      const link = `${files[index].name}`;

      console.log(link);

      await sharp(files[index].buffer)
        .webp({ quality })
        .toFile(process.env.UPLOAD_DIRECTORY + files[index].name);

      await FileRepository.create({
        name: files[index].name,
        link,
        category,
      });
    });
  }
  // uploadProductionFile(file, name) {
  //   return {
  //     storage: multer.diskStorage({
  //       destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  //       filename: (req, file, callback) => {
  //         return callback(null, file.originalname);
  //       },
  //     }),
  //   };
  // }
}

export default new FileService();
