#!/usr/bin/env node

/* Each new term in the Fibonacci sequence is generated by adding the previous
   two terms. By starting with 1 and 2, the first 10 terms will be:

   1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

   By considering the terms in the Fibonacci sequence whose values do not
   exceed four million, find the sum of the even-valued terms. */

/* Considering the values modulo 2, we have 1,0,1,1,0,1,...
   from which it is quite clear that the even valued terms occur at every
   third index. Letting F_1 = F_2 = 1, F_3 = 2 and we want to sum up the
   values for F_{3n} while they are less than four million.
   What's more:
   F_{3n+6} = F_{3n+5} + F_{3n+4}
            = 2F_{3n+4} + F_{3n+3}
            = 3F_{3n+3} + 2F_{3n+2}
            = 3F_{3n+3} + F_{3n+2} + F_{3n+1} + F_{3n}
            = 3F_{3n+3} + F_{3n+3} + F_{3n}
            = 4F_{3n+3} + F_{3n} */

var fns = require('../functions.js'),
    timer = require('../timer.js');

exports.main = function(verbose) {
  if (typeof verbose == 'undefined') {
    verbose = false;
  }
  var a = 2, b = 8, result = 2, tmp;
  while (b < 4000000) {
    result += b;

    tmp = fns.recurrenceNext([1, 4], [a, b]);
    a = tmp[0];
    b = tmp[1];
  }

  return result;
};

if (require.main === module) {
  timer.timer(2, exports.main);
}
