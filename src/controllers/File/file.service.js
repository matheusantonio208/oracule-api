const sharp = require('sharp');
const fs = require('fs');

import { parse } from 'path';

class FileService {
  createNameImageProduct(file) {
    return parse(file).name + '.webp';
  }

  async sharpImage(buffer, name, quality) {
    console.log(buffer);
    fs.access(process.env.UPLOAD_DIRECTORY, (error) => {
      if (error) {
        fs.mkdirSync(process.env.UPLOAD_DIRECTORY);
      }
    });

    await sharp(buffer)
      .webp({ quality })
      .toFile(process.env.UPLOAD_DIRECTORY + name);
  }
}

export default new FileService();
