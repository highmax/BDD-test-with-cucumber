'use strict';
var ProductList = require('../../lib/productlist.js'),
    assert      = require('assert');


function Floki() {

  var productList = new ProductList;

  this.Given(/^there are at least (\d+) product selected$/, function (quantity, callback) {
   //initial_quantity = quantity;
   assert.isAtLeast(productlist.getLength(), quantity , 'Product list is greater or equal to 1');
   callback();
  });

  this.When(/^the user select add another product$/, function (callback) {
   callback();
  });

  this.Then(/^a new product list should be visible$/, function (callback) {
   callback();
  });
}

module.exports = Floki;
