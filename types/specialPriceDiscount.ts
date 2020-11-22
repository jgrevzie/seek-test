import { Discount } from './discount'
import { Ad } from './ad'

export const getSpecialPriceDiscount = (specialPrice: number, adId: string): Discount => ({
  priceReducer: (ads: Ad[]): Ad[] => [
    // all ads that don't match
    ...ads.filter((ad) => ad.id !== adId),

    // ads that match get special price
    ...ads
      .filter((ad) => ad.id === adId)
      .map((ad) => ({
        ...ad,
        price: specialPrice,
      })),
  ],
})
