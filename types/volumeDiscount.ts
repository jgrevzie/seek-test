import { Discount } from './discount'
import { Ad } from './ad'

export const getVolumeDiscount = (payForN: number, getN: number, adId: string): Discount => ({
  priceReducer: (ads: Ad[]): Ad[] => [
    // all ads that don't match
    ...ads.filter((ad) => ad.id !== adId),

    // ads remaining after applying volume discount
    ...applyVolumeDiscount(
      payForN,
      getN,
      ads.filter((ad) => ad.id === adId)
    ),
  ],
})

export const applyVolumeDiscount = (payForN: number, getN: number, ads: Ad[]): Ad[] => [
  // Remove some of the ads
  ...Array(Math.floor(ads.length / getN) * payForN).fill(ads[0]),

  // Remainder after the discount
  ...Array(ads.length % getN).fill(ads[0]),
]
