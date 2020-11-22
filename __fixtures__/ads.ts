import { Ad } from '../types/ad'

export const classicAdId = '2b0bd5b1-0541-452c-b552-4d4fae154783'
export const standOutAdId = '8ce0a47b-2cbd-4228-899f-1b36524a3f80'
export const premiumAdId = '8a98a8d0-360d-40fb-b49b-f63c60f6050f'

export const ads: { [id: string]: Ad } = {
  classicAdId: {
    id: classicAdId,
    name: 'Classic Ad',
    price: 26999,
    description: 'Offers the most basic level of advertisement',
  },
  standOutAdId: {
    id: standOutAdId,
    name: 'Stand out Ad',
    price: 32299,
    description: 'Allows advertisers to use a company logo and use a longer presentation text',
  },
  premiumAdId: {
    id: premiumAdId,
    name: 'Premium Ad',
    price: 39499,
    description:
      'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
  },
}
