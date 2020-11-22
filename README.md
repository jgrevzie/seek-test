## Coding challenge for Seek

#### Setup
```
npm install
npm test
```

To inspect the code, start here - `src/__tests__/pricing.test.ts`

#### Summary of the problem

There are several types of products (ads), and several types of discounts on ads. 

In the problem statement, the combination of a product, a (set of) discounts, and a customer is a 'pricing rule'.

Pricing rules are to be kept flexible, and easy (i.e. quick) to change.

#### Approach
Illustrate a solution to the problem with a set of tests *(see `src/__tests__/pricing.test.ts`)*

Note - the pseudocode in the problem statement uses a mutable javascript API. 
My solution uses an immutable javascript API, because in the past I've found immutable APIs are easier to work with.

 I had planned to build a full graphQL API as well, but ran out of time. I've left the initial graphQL code in the repo
 (some types, see `src/server.ts`, a resolver implementation with a test, and a **very** basic in memory database). 
 I'll explain in this README how I was planning to structure the graphQL api.
 

#### Modelling
- Ad (id, name, price, description)
- Discount (priceReducer - code to reduce a set of ads via discouting rules)
- Pricer (takes ads and discounts and calulates a price)

#### Extension - full graphQL API

##### Types

(see `src/server.ts`)

```
Customer (id, name, etc)
Discount (see below for further info)
PricingRule (associate customer with discounts)
Purchase (associate customer with ads)
```

##### Mutations
```
newCustomer(name: String!): Customer)
newAd(name: String!, price: number!, etc)
newDiscount(discountType: String!, discountParams)
newPricingRule(customerId: String!, discountId: String!, adId: String)
newPurchase(customerId: String!, adId: String!)
```

#### Queries
```
getCustomer(customerId: String!)
getAd(adId: String!)

(etc)

getCost(customerId: String!)

```

##### How would we store discounts and pricing rules in the database?

As an example, in the problem statement there are 2 discount 'templates'
- Volume discount
- Special price discount

We could easily add more templates.

Each discount template will get an id. E.g. 'volumeDiscount' & 'specialPriceDiscount'

A `Discount` is created by instantiating one of these templates with 'template paramaters'.
E.g. to create a special price discount, the discount parameter(s) are simply the special price. For a volume discount,
the parameters are the amount you get, and the amount you pay for (i.e. buy 1 get 2).

We can store each `Discount` with the id of its template, and it's params in the database.

This allows us to use the same rules across many customers, each with potentially different parameters.
E.g. MYER gets 5 for the price of 4, but DJ's gets 2 for the price of 1.

We associate a `Discount` with a customer and an ad using a `PricingRule`. (see 'Types' above for attributes)

 