import { Ad } from '../types/ad'
import * as Pricing from '../pricing'
import { getVolumeDiscount } from '../discounts/volumeDiscount'
import { getSpecialPriceDiscount } from '../discounts/specialPriceDiscount'
import { classicAd, classicAdId } from '../ads/classicAd'
import { standOutAd, standOutAdId } from '../ads/standoutAd'
import { premiumAd, premiumAdId } from '../ads/premiumAd'

describe('#getTotal', () => {
  test('customer - default', () => {
    const ads: Ad[] = [classicAd, standOutAd, premiumAd]
    const price = Pricing.getTotal([], ads)
    expect(price).toBe(98797)
  })

  test('SecondBite', () => {
    const ads: Ad[] = [classicAd, classicAd, classicAd, premiumAd]
    const price = Pricing.getTotal([getVolumeDiscount(2, 3, classicAdId)], ads)
    expect(price).toBe(93497)
  })

  test('Axil Coffee Roasters', () => {
    const ads: Ad[] = [standOutAd, standOutAd, standOutAd, premiumAd]
    const price = Pricing.getTotal([getSpecialPriceDiscount(29999, standOutAdId)], ads)
    expect(price).toBe(129496)
  })

  test('MYER', () => {
    const ads: Ad[] = [
      standOutAd,
      standOutAd,
      standOutAd,
      premiumAd,
      standOutAd,
      standOutAd,
      premiumAd,
    ]
    const price = Pricing.getTotal(
      [getVolumeDiscount(4, 5, standOutAdId), getSpecialPriceDiscount(38999, premiumAdId)],
      ads
    )
    expect(price).toBe(32299 * 4 + 2 * 38999)
  })
})
