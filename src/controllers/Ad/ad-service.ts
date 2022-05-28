import bitgener from 'bitgener';
import { ean13 } from 'ean-check';

class AdService {
  async generateEan13() {
    const countryCode = 789;
    const cnpjDigits = 12345;
    const productCode = 1234;
    const ean13Code = await ean13.generate(
      Number(`${countryCode}${cnpjDigits}${productCode}`),
    );
    return ean13Code;
  }

  async generateTitles(
    model: Array<String>,
    materials: Array<String>,
    themes: Array<String>,
    names: Array<String>,
    variations: Array<String>,
    keywords: Array<String>,
    maxCharacters: number,
  ) {
    /*
    Model: Caneca, Xícara
    Materiais: Cerâmica, Porcelana
    Tema: Avatar
    Nome: Poster
    Variações: Azul, Verde
    Keywords: Filmes, Anime

    Caneca Ceramica Avatar Poster Azul Filmes
    Caneca Ceramica Avatar Poster Azul Animes
    Caneca Ceramica Avatar Poster Verde Filmes
    Caneca Ceramica Avatar Poster Verde Animes
    Caneca Porcelana Avatar Poster Azul Filmes
    Caneca Porcelana Avatar Poster Azul Animes
    Caneca Porcelana avatar Poster Verde Filmes
    Caneca Porcelana avatar Poster Verde Animes
    Xícara Ceramica Avatar Poster Azul Filmes
    Xícara Ceramica Avatar Poster Azul Animes
    Xicara Ceramica Avatar Poster Verde Filmes
    Xicara Ceramica Avatar Poster Verde Animes
    Xicara Porcelana Avanar Poster Azul Filmes
    Xicara Porcelana Avanar Poster Azul Animes
    Xicara Porcelana Avanar Poster Verde Filmes
    Xicara Porcelana Avanar Poster Verde Animes
    */

    let titlesString = [];

    let titles = [];
    for (var modelIndex = 0; modelIndex < model.length; modelIndex++) {
      for (
        var materialIndex = 0;
        materialIndex < materials.length;
        materialIndex++
      ) {
        for (var themeIndex = 0; themeIndex < themes.length; themeIndex++) {
          titles.push([
            model[modelIndex],
            materials[materialIndex],
            themes[themeIndex],
          ]);
        }
      }
    }

    for (let i = 0; i < titles.length; i++) {
      titlesString = titlesString.concat(titles[i]);
    }
    console.log(titlesString);
  }
}

export default new AdService();
