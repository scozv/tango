function partialMatchTable(pattern) {
  const m = pattern.length;
  if (m <= 0) return [];

  let table = [0];
  for (let q = 1, k = 0; q < m; q++) {
    while (k > 0 && pattern[q] !== pattern[k]) {
      k = table[k - 1];
    }

    if (pattern[q] === pattern[k]) { k++; }

    table[q] = k;
  }

  return table;
}

/**
 * Return the index of pattern in str in KMP algorithm
 * http://www.ruanyifeng.com/blog/2013/05/Knuth–Morris–Pratt_algorithm.html
 * @param str the search where we search the pattern
 * @param pattern the substr of str
 */
function kmp(str, pattern) {

  const next = partialMatchTable(pattern), n = str.length, m = pattern.length;
  if (m <= 0) return [];
  if (n <= 0) return [];

  let result = [];

  let j = 0;
  for (let i = 0; i <= n - m; i++) {
    while (j < m && str[i+j] === pattern[j]) { j++; }
    if (j >= m) {
      // matched on index at i
      result.push(i);
      j = 0;
    } else if (j > 1) {
      // not fully matched
      let lengthOfPatternShift = j - next[j - 1];
      j = j - (lengthOfPatternShift);
      i--;
    } else {
      j = 0;
    }
  }

  return result;
}


[
  ['', []],
  ['ABCDABCE', [0, 0, 0, 0, 1, 2, 3, 0]],
  ['ABCDEFABCHABCDEFABCD', [0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4]],
  ['ABCDABD', [0, 0, 0, 0, 1, 2, 0]]
].forEach(test => {
  let [pattern, target] = test;
  console.log(`partialMatchTable of ${pattern}`);
  let table = partialMatchTable(pattern);
  console.log(table);
  console.log(table.join(',') === target.join(',') ? 'passed' : 'failed')
});