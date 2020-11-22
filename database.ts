import { v4 as uuidv4 } from 'uuid'
import { Customer } from './types/customer'

let customers: Customer[] = []

export const getCustomers = () => customers

export const clearCustomers = (): Customer[] => (customers = [])

export const addCustomer = (name: string): Customer => {
  const newCustomer = {
    id: uuidv4(),
    name,
  }
  customers = [...customers, newCustomer]
  return newCustomer
}
