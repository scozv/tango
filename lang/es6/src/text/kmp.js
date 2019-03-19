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

  // str[i] and pattern[j]
  let i = 0, j = 0;
  while (i < n) {
    if (str[i] === pattern[j]) {
      if (j === m - 1) {
        // full matched, push the first index in `str` of match
        result.push(i - j);
        // move to next of i to start new search
        i = i - j + 1;
        j = 0;
      } else {
        // partial matched
        i++;
        j++;
      }
    } else if (j > 0) {
      // unmatched
      let lengthOfPatternShift = j - next[j - 1];
      j = j - (lengthOfPatternShift);
    } else {
      i++;
      j = 0;
    }
  }

  // we start to compare str[i + q] and pattern[j + q];
  // if match then q++
  // let j = 0, q = 0;
  // for (let i = 0; i <= n - m; i++) {
  //   while (j < m && str[i+q] === pattern[j+q]) { q++; }
  //   if (j+q >= m) {
  //     // matched on index at i
  //     result.push(i);
  //     j = 0;
  //   } else if (j > 1) {
  //     // not fully matched
  //     let lengthOfPatternShift = j - next[j - 1];
  //     j = j - (lengthOfPatternShift);
  //     i--;
  //   } else {
  //     j = 0;
  //   }
  // }

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