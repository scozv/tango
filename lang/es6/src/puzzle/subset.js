function subsetSum(x, i, T, acc) {
  if (0 === T) return {
    subset: [],
    solutions: [...acc.solutions, acc.subset]
  };

  if (0 > T || i < 0) return {
    subset: [],
    solutions: acc.solutions
  };

  let subsetA = subsetSum(x, i - 1, T - x[i], {
    subset: [...acc.subset, x[i]],
    solutions: acc.solutions
  });
  let subsetB = subsetSum(x, i - 1, T, {
    subset: acc.subset,
    solutions: acc.solutions
  });

  return {
    subset: [],
    solutions: [...subsetA.solutions, ...subsetB.solutions]
  };
}


/**
 * Get all subset of x, where sumOf(x) === T
 * @param x
 * @param T
 * @returns {{solutions, subset}}
 */
function solve(x, T) {
  return subsetSum(x, x.length - 1, T, {subset: [], solutions: []});
}
