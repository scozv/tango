

const BigCalculator = {
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
  }
};

export default BigCalculator;
