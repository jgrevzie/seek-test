import { ads as adFixtures, classicAdId, premiumAdId, standOutAdId } from '../__fixtures__/ads'
import { Ad } from '../types/ad'
import * as Pricing from '../pricing'
import { getVolumeDiscount } from '../discounts/volumeDiscount'
import { getSpecialPriceDiscount } from '../discounts/specialPriceDiscount'

describe('#getTotal', () => {
  test('customer - default', () => {
    const ads: Ad[] = [adFixtures.classicAdId, adFixtures.standOutAdId, adFixtures.premiumAdId]
    const price = Pricing.getTotal([], ads)
    expect(price).toBe(98797)
  })

  test('SecondBite', () => {
    const ads: Ad[] = [
      adFixtures.classicAdId,
      adFixtures.classicAdId,
      adFixtures.classicAdId,
      adFixtures.premiumAdId,
    ]
    const price = Pricing.getTotal([getVolumeDiscount(2, 3, classicAdId)], ads)
    expect(price).toBe(93497)
  })

  test('Axil Coffee Roasters', () => {
    const ads: Ad[] = [
      adFixtures.standOutAdId,
      adFixtures.standOutAdId,
      adFixtures.standOutAdId,
      adFixtures.premiumAdId,
    ]
    const price = Pricing.getTotal([getSpecialPriceDiscount(29999, standOutAdId)], ads)
    expect(price).toBe(129496)
  })

  test('MYER', () => {
    const ads: Ad[] = [
      adFixtures.standOutAdId,
      adFixtures.standOutAdId,
      adFixtures.standOutAdId,
      adFixtures.premiumAdId,
      adFixtures.standOutAdId,
      adFixtures.standOutAdId,
      adFixtures.premiumAdId,
    ]
    const price = Pricing.getTotal(
      [getVolumeDiscount(4, 5, standOutAdId), getSpecialPriceDiscount(38999, premiumAdId)],
      ads
    )
    expect(price).toBe(32299 * 4 + 2 * 38999)
  })
})
