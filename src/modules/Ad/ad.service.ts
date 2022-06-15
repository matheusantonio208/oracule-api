import { ean13 } from 'ean-check';
import countryCodeEan from './utils/country-code-ean-13.json';

class AdService {
  keywordList = [];

  async generateEan13(
    cnpjDigits: string,
    productCode: string,
  ): Promise<string> {
    const countryCode = countryCodeEan.BRAZIL[1];
    const ean13Code = await ean13.generate(
      Number(`${countryCode}${cnpjDigits}${productCode}`),
    );
    return ean13Code;
  }

  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

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

  generateKeywords(keywords: Array<String>) {
    this.keywordList.push([keywords.join(' ')]);
    if (keywords.length === 1) {
      return keywords[0];
    }
    for (var i = 0; i < keywords.length; i++) {
      keywords.splice(i, 1);
      this.generateKeywords(keywords);
    }
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

    let titles = [];

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

  generatePriceWithoutCommissionShop(
    profit: number,
    costs: Array<number>,
  ): number {
    const costSum = costs.reduce((a, b) => a + b);
    const price = costSum + (costSum * profit) / 100;

    return price;
  }
}

export default new AdService();
