/**
 * Return the edit distance for string `A` and string `B`
 */
function levenshtein(a, b, ignoreCase) {
  let xs = String(a).trim().split('');
  let ys = String(b).trim().split('');

  let m = xs.length, n = ys.length;

  if (m <= 0) return n;
  if (n <= 0) return m;

  const same = function(x, y) {
    if (ignoreCase) return x.toLowerCase() === y.toLowerCase();
    else return x === y;
  };

  const dist = function(x, y) {
    return same(x, y) ? 0 : 1;
  };

  // create a matrix m + 1 * n + 1 for edit(i, j)
  let es = [], i = 0, j = 0;
  es[0] = [0]; // edit(0, 0) is the dist of empty string vs empty string

  for (let i = 0; i <= m; i++) {
    // es(i, 0)
    if (i > 0) es[i] = [es[i-1][0] + 1];
    for (let j = 0; j <= n; j++) {
      if (0 === i && j > 0) es[0][j] = es[0][j-1] + 1;

      if (i > 0 && j > 0) {
        let insertion = es[i-1][j] + 1,
          deletion = es[i][j-1] + 1,
          substitution = es[i-1][j-1] + dist(xs[i-1], ys[j-1]);

        es[i][j] = Math.min(insertion, deletion, substitution);
      }
    }
  }

  return es[m][n];
}