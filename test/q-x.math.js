test('Array basic extensions', function(){
	deepEqual([1, 2, 3, 4].zip(['A','B','C','D']), [[1,'A'],[2,'B'],[3,'C'],[4,'D']], 'Array zip same size');
	deepEqual([1, 2, 3, 4].zip(['A','B','C','D','E']), [[1,'A'],[2,'B'],[3,'C'],[4,'D']], 'Array zip different size');
	deepEqual([1, 2, 3].zip(['A','B','C','D']), [[1,'A'],[2,'B'],[3,'C']], 'Array zip different size');
	deepEqual([].zip(['A','B','C','D']), [], 'Array zip different size');
	deepEqual(['A','B','C','D'].zip([]), [], 'Array zip different size');

  var arrEquals = (x, y) => Array.isArray(x) && Array.isArray(y) &&
    x.length === y.length &&
    x.zip(y).every(item => Math.equals(item[0], item[1]));

  var norm = function(arr){
    var sum = Math.Stats.sum(arr),
      result = [];

    for (var i=0;i<arr.length;i++){
      result.push(arr[i]/sum);
    }

    return result;
  };

  (function(n, repeat){

    var testNormalize = function(){
      var length = Math.randomInteger(10, n),
        randomArray = Sorting.__randomUniqueArray__(length),
        norm1 = Math.Stats.normalize(randomArray),
        norm2 = norm(randomArray);

      return {
        length: length, 
        result: Math.equals(norm1, norm2) && arrEquals(norm1, norm2)};
    };


    Math.range(repeat).forEach(function(){
      var test = testNormalize();
      ok(test.result, 'Array normalized with length: ' + test.length);
    });
  })(100, 5);
});

test('Math basic extensions', function(){
	// strictEqual(Math.mod(0, 0), 0 % 0, '0 mod 0 == NaN');
	strictEqual(Math.mod(17, 4), 17 % 4, '17 mod 4 == 1');
	strictEqual(Math.mod(-25, 4), 3, '-25 mod 4 == 3 (-25 == -7 * 4 + 3)');
	throws(function(){
		Math.range();
	}, 'range should have at least one args');

	throws(function(){
		Math.range('A', 1);
	}, 'range accepts only numerical args');

	deepEqual(Math.range(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Math.range(10)');
	deepEqual(Math.range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9], 'Math.range(1, 10)');
	deepEqual(Math.range(2, 11, 2), [2, 4, 6, 8, 10], 'Math.range(2, 11, 2)');
	deepEqual(Math.range(2, 10, 2), [2, 4, 6, 8], 'Math.range(2, 10, 2)');
});

test('Math.stats', function(){
	var a1 = [1, 2, 3, 4, 5, 6, 7, 8];
	var f = function (a, b){
		return a1.map(function(x){return a*x + b;});
	};

	var f1 = function(a){
		return a1.map(function(x){return Math.pow(x, a);});
	};

  var lls = (X, Y, fn) => Math.Stats.linearLeastSquare(X, Y, fn);

	ok(Math.equals(lls(a1, f(3, 1))[0], 3), 'y=3x+1');
	ok(Math.equals(lls(a1, f(-2.31, 3.12))[0], (-2.31)), 'y=-2.31x+3.12');
	ok(Math.equals(lls(a1, f1(2), Math.log)[0], (2)), 'y=x^2, with ln()');
	ok(Math.equals(lls(a1, f1(-3.141501), Math.log)[0], (-3.141501)), 'y=x^-3.141501, with ln()');
}); 