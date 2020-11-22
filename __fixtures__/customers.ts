import { Customer } from '../types/customer'

export const secondBiteId = '45f58473-db51-43a3-84a4-9cb1c8bf1a7f'
export const axilId = 'c65ee8f1-e584-4bf3-bd93-5b5cda50bff3'
export const myerId = 'd5cd4841-a39a-417b-9804-e3aab002fbbd'
export const defaultCustomerId = 'e8f73e87-e68d-4341-9266-93d4fee81313'

export const customers: { [id: string]: Customer } = {
  defaultCustomerId: {
    name: 'Default Customer',
  },
  secondBiteId: {
    name: 'SecondBite',
  },
  axilId: {
    name: 'Axil Coffee Roasters',
  },
  myerId: {
    name: 'MYER',
  },
}
