import { ean13 } from 'ean-check';
import { Schema } from 'mongoose';
import { exportToCsv } from 'utils/json-to-csv';

import companyRepository from '../Company/company.repository';
import { CompanyCreatedDto } from '../Company/dto/company-created.dto';
import { EanCreatingDto, EanCreatedDto } from '../Ean/dto/index.dto';
import eanRepository from '../Ean/ean.repository';
import shopService from '../Shop/shop.service';
import adRepository from './ad.repository';
import { header } from './utils/bling-product-csv-file';
import countryCodeEan from './utils/country-code-ean-13.json';

class AdService {
  keywordList = [];

  async generateAdCode() {
    const ads = await adRepository.listAll('ad_code', 'asc', null, null);

    if (ads.length > 0) {
      const lastAdCode = Number(ads[Object.keys(ads).sort().pop()].ad_code);
      const adCode = String(lastAdCode + 1).padStart(4, '0');

      return adCode;
    }

    return '0000';
  }

  generateSku(sku_preffix: string, ad_code: string, sku_suffix: string) {
    return `${sku_preffix}${ad_code}${sku_suffix}`;
  }

  async generateEan13(
    companyId: Schema.Types.ObjectId,
    countryEanCode: string,
    adCode: string,
  ): Promise<string> {
    let countryCode;

    const company: CompanyCreatedDto = await companyRepository.getOneById(
      companyId,
    );
    const cnpj = company.cnpj.replace(/[^\d]+/g, '');
    const cnpjDigits: string = cnpj.slice(0, 5);

    for (let i = 0; i < countryCodeEan[countryEanCode].length; i++) {
      countryCode = countryCodeEan[countryEanCode][i];
    }
    const ean13Code = await ean13.generate(
      Number(`${countryCode}${cnpjDigits}${adCode}`),
    );
    const isValidEan13 = this.verifyEan(ean13Code);

    if (isValidEan13) {
      const eanCreating = new EanCreatingDto({
        _id: ean13Code,
        ean: ean13Code,
      });
      const eanCreated: EanCreatedDto = await eanRepository.create(eanCreating);
      return eanCreated.ean;
    }

    throw new Error('EAN13 is not valid! Try change country code');
  }

  async verifyEan(ean: string): Promise<boolean> {
    const isValid = !!(await eanRepository.getOneById(ean));

    return isValid;
  }

  /*
    models:         ['Caneca', 'Xícara', 'Copo'],
    materials:      ['Cerâmica', 'Porcelana', 'Vidro'],
    themes:         ['Superman', 'DC', 'Super Homem'],
    names:          ['Rosto', 'Face'],
    variations:     ['Azul Claro', 'Azul Escuro'],
    keywords:       ['Filmes', 'Série', 'HQ', 'Premium'],
    maxCharacters:  60,
    qtdAd:          30,
  */
  generateTitles(
    models: Array<String>,
    materials: Array<String>,
    themes: Array<String>,
    names: Array<String>,
    variations: Array<String>,
    keywords: Array<String>,
    maxCharacters: number,
    qtdAd: number,
  ) {
    this.generateKeywords(keywords);

    const titles = [];

    models.map((model) => {
      materials.map((material) => {
        themes.map((theme) => {
          names.map((name) => {
            variations.map((variation) => {
              this.keywordList.map((keyword) => {
                const title = [
                  model,
                  material,
                  theme,
                  name,
                  variation,
                  keyword,
                ].join(' ');

                if (title.length <= maxCharacters) titles.push(title);
              });
            });
          });
        });
      });
    });

    const generatedTitles = titles.filter(function (item, index, inputArray) {
      return inputArray.indexOf(item) == index;
    });

    const titleList = this.shuffle(generatedTitles).slice(
      0,
      qtdAd < titles.length ? qtdAd : titles.length,
    );

    return titleList;
  }

  generateKeywords(keywords: Array<String>) {
    this.keywordList.push([keywords.join(' ')]);
    if (keywords.length === 1) {
      return keywords[0];
    }
    for (let i = 0; i < keywords.length; i++) {
      keywords.splice(i, 1);
      this.generateKeywords(keywords);
    }
  }

  shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  generateProductionCostWithProfit(
    profit: number,
    costs: Array<number>,
  ): number {
    const costSum = costs.reduce((a, b) => a + b);
    const price = costSum + (costSum * profit) / 100;

    return price;
  }

  async createPrice(
    profit: number,
    costs: Array<number>,
    shopName: string,
    typeAd?: string,
  ) {
    const productionWithProfitCost: number =
      this.generateProductionCostWithProfit(profit, costs);

    const priceWithCommissionShop: number =
      shopService.generatePriceWithCommissionShop(
        productionWithProfitCost,
        shopName,
        typeAd,
      );

    return priceWithCommissionShop;
  }

  exportCSV(data) {
    if (exportToCsv(header, data, 'ads')) return true;
    throw new Error('Error on export CSV');
  }
}

export default new AdService();
