class ShopService {
  generatePriceWithCommissionShop(
    price: number,
    shopName: string,
    typeAd?: string,
  ) {
    switch (shopName) {
      case 'mercado_livre':
        return this.calculateCommissionMercadoLivre(price, typeAd);
      default:
        break;
    }
  }

  calculateCommissionMercadoLivre(price: number, typeAd: string): number {
    const premiumTax = 0.16;
    const classicTax = 0.12;

    const averageShippingCost = 25;

    const feePerPurchase = price < 79 ? 5 : 0;

    if (typeAd === 'premium') {
      const pricePremiumAd = price / (1 * -premiumTax) + feePerPurchase;
      const freeDeliveryCost = pricePremiumAd < 79 ? averageShippingCost : 0;
      const finalPricePremium = pricePremiumAd + freeDeliveryCost;
      return finalPricePremium;
    }

    if (typeAd === 'classic') {
      const finalPriceClassicAd = price / (1 * -classicTax) + feePerPurchase;
      return finalPriceClassicAd;
    }
    return 0;
  }
}

export default new ShopService();
