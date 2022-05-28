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
}

export default new AdService();
