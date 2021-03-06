import { Schema } from 'mongoose';

import Company from '../../schemas/Company';
import {
  CompanyCreatingDto,
  CompanyCreatedDto,
  CompanyToUpdateDto,
} from './dto/index.dto';

class CompanyRepository {
  async create(company: CompanyCreatingDto): Promise<CompanyCreatedDto> {
    const companyCreate = new Company(company);

    if (await companyCreate.save()) {
      return companyCreate;
    }

    throw new Error(`Error to create company`);
  }

  async getOneById(id: Schema.Types.ObjectId): Promise<CompanyCreatedDto> {
    const company: CompanyCreatedDto = await Company.findById(id);
    if (company) return company;

    throw new Error(`Error to get company`);
  }

  async listAll(
    property: string,
    sort: string,
    itensPerPage: number,
    pagination: number,
  ): Promise<Array<CompanyCreatedDto>> {
    const companys: Array<CompanyCreatedDto> = await Company.find(
      {},
      (error, docs) => {
        if (!error) return docs;
      },
    )
      .sort([[property, sort]])
      .skip(pagination)
      .limit(itensPerPage)
      .exec();

    if (companys) return companys;

    throw new Error(`Error to list categories`);
  }

  async updateById(
    id: Schema.Types.ObjectId,
    data: CompanyToUpdateDto,
  ): Promise<CompanyCreatedDto> {
    const updatedCompany: CompanyCreatedDto = await Company.findByIdAndUpdate(
      id,
      data,
      (error, document) => {
        if (!error) return document;
      },
    );

    if (updatedCompany) return updatedCompany;

    throw new Error(`Error to update company`);
  }

  async deleteById(id: Schema.Types.ObjectId): Promise<Boolean> {
    if (await Company.deleteOne({ _id: id })) return true;

    throw new Error(`Error to delete company`);
  }
}

export default new CompanyRepository();
