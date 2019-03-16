function queens(n, r, Q) {
  if (r >= n + 1) return Q;

  for (let j = 1; j <= n; j++) {
    let legal = true;
    for (let i = 1; i <= r - 1; i++) {
      if (Q[i] === j || Q[i] === j + r - i || Q[i] === j - r + i) {
        // console.log(`Failed to place Q ${Q}, i, j, r: ${i}, ${j}, ${r}`);
        legal = false;
      }
    }
    if (legal) {
      Q[r] = j;
      // console.log(`Manage to place Q ${Q}, #, j, r: #, ${j}, ${r}`);
      console.log(`Queen on ${r}: ${Q}`)
      queens(n, r + 1, Q);
    }
  }
}

/**
 * Returns one solution of n-Queen problem
 * @param n
 * @returns {*}
 */
function solve(n) {
  return queens(n, 1, []);
}
