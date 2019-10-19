'use strict';

var SmartStoreAPI = require('./index.js'); // use require('smartstore-api')

// Initialize the SmartStoreAPI class
var SmartStore = new SmartStoreAPI({
  url: 'http://example.com', // Your store url (required)
  // version: 'v3', // SmartStore API version (optional)
  // verifySsl: true, // Use `false` when need test with self-signed certificates, default is `true` (optional)
  // encoding: 'utf8', // Encode, default is 'utf8' (optional)
  consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // Your API consumer key (required)
  consumerSecret: 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' // Your API consumer secret (required)
});

// GET example
SmartStore.get('customers', function(err, data, res) {
  console.log(res);
});

// POST example
// SmartStore.post('products', {
//   product: {
//     title: 'Premium Quality',
//     type: 'simple',
//     regular_price: '21.99'
//   }
// }, function(err, data, res) {
//   console.log(res);
// });

// PUT example
// SmartStore.put('orders/123', {
//   order: {
//     status: 'completed'
//   }
// }, function(err, data, res) {
//   console.log(res);
// });

// Delete example
// SmartStore.delete('coupons/123', function(err, data, res) {
//   console.log(res);
// });
