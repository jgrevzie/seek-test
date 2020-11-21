## Coding challenge for Seek
#### Summary of the problem

There are several types of products (ads), and several types of discounts on ads. 

In the problem statement, the combination of a product, a (set of) discounts, and a customer is called a 'pricing rule'.

Pricing rules are to be kept flexible, and easy (i.e. quick) to change.

#### Approach
 - Just provide the backend and an API.
 - In memory database
 - Keep the data immutable (i.e. keep adding to data, rather than changing it).
 - Pricing rules will be stored in the database.
 
*Note - the provided pseudocode uses a mutable API. My solution will use an immutable API, because in the past I've
found immutable APIs are easier to work with.*

#### Modelling
Customer (id, name)
 
Ad (id, name, price, description)

Discount (id, name, customerId, adId, dateTime)
 - VolumeDiscount (buyN, getN)
 - Special price (price)
 
Purchase (id, customerId, adId, qty)

#### API
Add Customer (Customer)
 
Add ad (Ad)
 
Add discount (Discount)

Make purchase (Purchase)

Get cost (customerId)
 
#### API usage

*New discounts for the same combination of ad and customer replace older ones.* i.e. Adding a discount replaces a
previous discount.

#### Exenstions

Discounts could be associated with a period of time, and only discounts valid for this period of time would be applied.

 