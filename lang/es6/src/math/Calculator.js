

const Calculator = {
  /**
   * Multi 2 big number
   * @param xs the list of digits of number x, xs[0] is the right most digit
   * @param ys the list of digits of number y, ys[0] is the right most digit
   * @returns {Array} the list of digits of number (x * y), the 0st element is the right most digit
   */
  multi: function (xs, ys) {
    // 184911 * 2389
    // xs: "119481".split("").map(x => parseInt(x))
    // ys: "9832".split("").map(x => parseInt(x))

    console.log(`multi for ${xs} and ${ys}`);

    const m = xs.length, n = ys.length;
    let zs = [], hold = 0;

    for (let k = 0; k < m + n; k++) {
      // for all i and j such that i + j = k
      for (let i = 0; i < m; i++) {
        let j = k - i;
        if (0 <= j && j < n) {
          hold = hold + xs[i] * ys[j];
        }
      }

      zs[k] = hold % 10;
      hold = Math.trunc(hold / 10);
    }

    while (zs.length > 1 && zs[zs.length - 1] === 0) {
      zs.pop();
    }

    return zs;
  },

  /**
   * Calculate x^n by repeated square, with multi(x, y) = x * y
   * @param x the base
   * @param n n times of x, i.e. (x * x) * x .., appending x with result
   * @param multi the multi operation for x
   * @param one multi(x, one) = x // TODO and multi(one, x) = x
   */
  pow: function(x, n, multi, one) {
    const pow0 = function(res, y, k) {
      if (k < 0) return pow0(res, 1/y, -k); // TODO define (1 / y) given multi()
      if (0 === k) return multi(res, one);
      if (1 === k) return multi(res, y);
      if (0 === (k & 1)) {
        // k is even
        return pow0(res, multi(y, y), k >> 1);
      } else {
        // k is odd
        return pow0(multi(res, y), multi(y, y), k >> 1);
      }
    };

    return pow0(one, x, n);
  },

  /**
   * Calculate the pow(matrix, n), where the matrix is 2*2 square
   * @param matrix 2*2 square, representing as
   *        [
   *          [x00, x01],
   *          [x10, x11]
   *        ]
   * @param n
   */
  matrixPow2: function(matrix, n) {
    const multi = function (x, y) {
      return [
        [ x[0][0] * y[0][0] + x[0][1] * y[1][0], x[0][0] * y[0][1] + x[0][1] * y[1][1] ],
        [ x[1][0] * y[0][0] + x[1][1] * y[1][0], x[1][0] * y[0][1] + x[1][1] * y[1][1]]
      ];
    };

    const one = [[1, 0], [0, 1]];

    return Calculator.pow(matrix, n, multi, one);
  }

};

export default Calculator;
