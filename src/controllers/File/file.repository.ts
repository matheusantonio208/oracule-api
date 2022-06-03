import { Document, Model } from 'mongoose';

import File from '../../schemas/File';

import { FileCreateDto } from './dto/file-create.dto';
import { IFile } from './file.interface';

class FileRepository {
  async create(file: FileCreateDto): Promise<Document<IFile>> {
    const fileCreate = new File(file);

    if (await fileCreate.save()) {
      return fileCreate;
    }

    throw new Error(`Error to create file`);
  }

  async getOneById(id: string): Promise<Document<IFile>> {
    const file: Document<IFile> = await File.findById(id);
    if (file) return file;

    throw new Error(`Error to get file`);
  }

  async listAll(): Promise<Array<Document<IFile>>> {
    const files: Array<Document<IFile>> = await File.find({}, (err, docs) => {
      if (!err) return docs;
    });

    if (files) return files;

    throw new Error(`Error to list categories`);
  }

  async updateById(id: string, data: any): Promise<Document<IFile>> {
    const updatedFile: Document<IFile> = await File.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedFile) return updatedFile;

    throw new Error(`Error to update file`);
  }

  async deleteById(id: string): Promise<Boolean> {
    if (await File.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete file`);
  }
}

export default new FileRepository();
