Feature: Shop a product
Check the product shopping functionality

Scenario:Shop a product
Given User selects the product
When User click the Add to Cart
And  User click the Cart button
And  User clicks the Checkout button
And User entres the Checkout details
And User clicks the Continue button
And User click the Finish button
Then User verify the Orderconmfirmation page