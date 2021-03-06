#!/usr/bin/env node

/* A palindromic number reads the same both ways. The largest
   palindrome made from the product of two 2-digit numbers is
   9009 = 91 * 99.

   Find the largest palindrome made from the product of two
   3-digit numbers. */

var fns = require('../functions.js'),
    operator = require('../operator.js'),
    timer = require('../timer.js');

exports.main = function(verbose) {
  if (typeof verbose == 'undefined') {
    verbose = false;
  }
  var products = fns.applyToList(operator.mul, operator.range(100, 1000));

  products = products.filter(fns.isPalindrome);
  return Math.max.apply(Math, products);
};

if (require.main === module) {
  timer.timer(4, exports.main);
}
