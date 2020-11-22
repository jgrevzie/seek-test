import { Ad } from '../types/ad'
import { getSpecialPriceDiscount } from '../types/specialPriceDiscount'

const ad: Ad = {
  id: '12345',
  name: 'Mad lad ad',
  price: 20,
  description: 'This ad goes mad',
}

const ad2: Ad = {
  id: '54321',
  name: 'Glad Ad',
  price: 40,
  description: 'Sad is _not_ this ad',
}
describe('#getSpecialPriceDiscount', () => {
  test('generate a new set of ads, where matching ads are changed to the new price', () => {
    const ads: Ad[] = [...Array(5).fill(ad), ad2]
    const newAds = getSpecialPriceDiscount(15, '12345').priceReducer(ads)
    expect(newAds.filter((ad) => ad.price === 15)).toHaveLength(5)
    expect(newAds.filter((ad) => ad.price === 40)).toHaveLength(1)
  })
})
