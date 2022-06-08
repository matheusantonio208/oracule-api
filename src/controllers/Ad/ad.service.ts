import { ean13 } from 'ean-check';

class AdService {
  keywordList = [];

  async generateEan13(
    countryCode: number,
    cnpjDigits: number,
    productCode: number,
  ) {
    const ean13Code = await ean13.generate(
      Number(`${countryCode}${cnpjDigits}${productCode}`),
    );
    return ean13Code;
  }

  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
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
  async generateTitles(
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
    console.log(this.keywordList);

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

    const keys = titles.filter(function (item, index, inputArray) {
      return inputArray.indexOf(item) == index;
    });

    const titleList = this.shuffle(keys).slice(
      0,
      qtdAd < titles.length ? qtdAd : titles.length,
    );

    return titleList;
  }
}

export default new AdService();
