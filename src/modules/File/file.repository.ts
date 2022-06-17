import { Schema } from 'mongoose';

import File from '../../schemas/File';
import {
  FileCreatingDto,
  FileCreatedDto,
  FileToUpdateDto,
} from './dto/index.dto';

class FileRepository {
  async create(file: FileCreatingDto): Promise<FileCreatedDto> {
    const fileCreate = new File(file);

    if (await fileCreate.save()) {
      return fileCreate;
    }

    throw new Error(`Error to create file`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<FileCreatedDto> {
    const file: FileCreatedDto = await File.findById(id);
    if (file) return file;

    throw new Error(`Error to get file`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<FileCreatedDto>> {
    const files: Array<FileCreatedDto> = await File.find({}, (error, docs) => {
      if (!error) return docs;
      throw error;
    })
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (files) return files;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: FileToUpdateDto,
  ): Promise<FileCreatedDto> {
    const updatedFile: FileCreatedDto = await File.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
        throw error;
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
