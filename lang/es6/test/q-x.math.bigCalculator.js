require('./q');

var algo = require('../bundle').default;
var math = algo.math;
var Sorting = algo.sorting;
var array = algo.linear.array;

Array.prototype.zip = function(that){return array.zip(this, that);};
Array.prototype.take = function(n){return array.take(this, n);};
Array.prototype.skip = function(n){return array.skip(this, n);};
Array.prototype.upsert = function(a,b,c){return array.upsert(this, a,b,c);};
Array.prototype.update = function(a,b,c,d){return array.update(this, a,b,c,d);};

test('BigCalculator multi', function () {
  function testMulti(x, y) {
    // 184911 * 2389
    // x: "184911"
    // y: "2389"
    const xs = x.split('').reverse().map(x => parseInt(x)),
          ys = y.split('').reverse().map(x => parseInt(x));
    const target = String(parseInt(x) * parseInt(y))
                .split('').reverse().map(x => parseInt(x));
    let solution = math.BigCalculator.multi(xs, ys);

    deepEqual(solution, target, `${x} * ${y} should not be ${solution}`);
  };

  testMulti('184911', '2389');
  testMulti('1', '1');
  testMulti('14', '41');
  testMulti('184911', '238912391');
  testMulti('184911', '0');
  testMulti('0', '2389');
});
