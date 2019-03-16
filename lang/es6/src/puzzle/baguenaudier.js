
// solve the ring with n digtis of `1`
// 111111...11 -> 0...0
function solve(x, n) {
  // console.log(`solv: ${n} of ${binary(x, N)}`);
  if (n === 1) return flip(x, 1);
  if (n === 2) {
    let t = flip(x, 2);
    return solve(t, 1);
  }

  let t = solve(x, n - 2);
  t = flip(t, n);
  t = revert(t, n - 2);
  t = solve(t, n - 1);

  console.log(`solv: ${n} of ${binary(x, N)} then get ${binary(t, N)}`);
  return t;
}

function revert(x, n) {
  // console.log(`revt: ${n} of ${binary(x, N)}`);
  if (n === 1) return flip(x, 1);
  if (n === 2) {
    let t = revert(x, 1);
    return flip(t, 2);
  }

  let t = revert(x, n - 1);
  t = solve(t, n - 2);
  t = flip(t, n);
  t = revert(t, n - 2);

  console.log(`revt: ${n} of ${binary(x, N)} then get ${binary(t, N)}`);
  return t;
}

function bitArray(n) {
  // Bitwise operators treat their operands
  // as a sequence of 32 bits (zeroes and ones),
  // rather than as decimal, hexadecimal, or octal numbers.
  let t = ~ 0;
  return t >>> (32 - n);
}

function flip(x, n) {
  let t = x ^ (1 << n - 1);
  console.log(`flip: ${n} of ${binary(x, N)} then get ${binary(t, N)}`);
  return t;
}

function binary(dec, length) {
  var out = "";
  while(length--)
    out += (dec >> length ) & 1;
  return out;
}

/**
 * Solve the Baguenaudier with n rings, n should be in range [0, 32]
 * @param n
 */
function baguenaudier(n) {
  let N = n;
  let x = bitArray(n);
  console.log(`Start baguenaudier for n ${n} as ${x}`);
  console.log(`Start: ${binary(x, N)}`);
  console.time(`baguenaudier: ${n}`);
  let t = solve(x, n);
  console.log(`Solve: ${binary(t, N)}`);
  console.timeEnd(`baguenaudier: ${n}`);
}
