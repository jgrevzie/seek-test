import { Ad } from './ad'

export interface Discount {
  priceReducer: (ads: Ad[]) => Ad[]
}
