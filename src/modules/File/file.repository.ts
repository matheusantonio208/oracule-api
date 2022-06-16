import { Schema } from 'mongoose';
import File from '../../schemas/File';

import { FileCreatedDto, FileToCreateDto } from './dto/index.dto';

class FileRepository {
  async create(file: FileToCreateDto): Promise<FileToCreateDto> {
    const fileCreate = new File(file);

    if (await fileCreate.save()) {
      return fileCreate;
    }

    throw new Error(`Error to create file`);
  }

  async getOneByName(name: string): Promise<any> {
    const file: any = await File.find({ name });

    if (file) return file;

    throw new Error(`Error to get file`);
  }

  async listAll(): Promise<Array<FileCreatedDto>> {
    const files: Array<FileCreatedDto> = await File.find({}, (err, docs) => {
      if (!err) return docs;
    });

    if (files) return files;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: any,
  ): Promise<FileCreatedDto> {
    const updatedFile: FileCreatedDto = await File.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedFile) return updatedFile;

    throw new Error(`Error to update file`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await File.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete file`);
  }
}

export default new FileRepository();
