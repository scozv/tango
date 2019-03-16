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

test('Calculator multi', function () {
  function testMulti(x, y, target) {
    // 184911 * 2389
    // x: "184911"
    // y: "2389"
    const asBigNumber = number => String(number).split('').reverse().map(x => parseInt(x));
    const xs = asBigNumber(x),
          ys = asBigNumber(y);
    const targetDefer = () => asBigNumber(parseInt(x) * parseInt(y));
    let solution = math.BigCalculator.multi(xs, ys);

    deepEqual(solution, target ? asBigNumber(target) : targetDefer(), `${x} * ${y} should not be ${solution}`);
  };

  testMulti('184911', '2389');
  testMulti('1', '1');
  testMulti('14', '41');
  testMulti('184911', '238912391');
  testMulti('184911', '0');
  testMulti('0', '2389');
  testMulti('23891239101994881119291011', '1849111981004911881919031010019881', '44177576464551766623720033986902725584880399554783734589691');
  testMulti('1849111981004911881919031010019881', '23891239101994881119291011', '44177576464551766623720033986902725584880399554783734589691');
});
