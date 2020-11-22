import { Ad } from '../types/ad'
import { applyVolumeDiscount, getVolumeDiscount } from '../types/volumeDiscount'

const ad: Ad = {
  id: '12345',
  name: 'Vlad the Ad',
  price: 10,
  description: "He's quite the lad",
}

const ad2: Ad = {
  id: '54321',
  name: 'Another Ad',
  price: 20,
  description: 'This is another ad',
}

describe('#applyVolumeDiscount', () => {
  describe('five for the price of 4', () => {
    test('get 5, pay 4', () => {
      expect(applyVolumeDiscount(4, 5, Array(5).fill(ad))).toHaveLength(4)
    })

    test('get 10, pay 8', () => {
      expect(applyVolumeDiscount(4, 5, Array(10).fill(ad))).toHaveLength(8)
    })

    test('get 6, pay 5', () => {
      expect(applyVolumeDiscount(4, 5, Array(6).fill(ad))).toHaveLength(5)
    })
  })

  describe('three for the price of 2', () => {
    test('get 3, pay 2', () => expect(applyVolumeDiscount(2, 3, Array(3).fill(ad))).toHaveLength(2))

    test('get 5, pay 4', () => expect(applyVolumeDiscount(2, 3, Array(5).fill(ad))).toHaveLength(4))
  })
})

describe('#getVolumeDiscount', () => {
  test('all ads are matching ads', () => {
    const discount = getVolumeDiscount(4, 5, '12345')
    expect(discount.priceReducer(Array(5).fill(ad))).toHaveLength(4)
  })

  test("some ads don't match, and will remain in output", () => {
    const discount = getVolumeDiscount(4, 5, '12345')
    expect(discount.priceReducer([...Array(4).fill(ad), ad2, ad])).toHaveLength(5)
  })
})
