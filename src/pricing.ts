import { Discount } from './types/discount'
import { Ad } from './types/ad'

export const getTotal = (discounts: Discount[], ads: Ad[]): number =>
  // apply each discount reducer (in series) to all ads (in series), and then get the sum
  discounts
    .reduce((adsDiscountedSoFar, discount) => discount.priceReducer(adsDiscountedSoFar), ads)
    .reduce((sum: number, ad: Ad): number => ad.price + sum, 0)
