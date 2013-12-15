# List
We put some algortithms on linear collection into `List.*`. To use linear collection type, please go to `T.Stack`, `T.LinkedList`...

## Static
Call | Big `O` | Meaning
:----|:---:|:-------
`validPopStackSeries(push: [], pop: []): bool` | `O(n)` | returns true iff we can get the pop series by the push series, using a stack
`medianMaintenence(arr): []` | `O(n logn)` | for each time `t` we visit `arr` from `0` to `n-1`, we maintenence the median of all `[0, t]` elements from input, and push this median into output array.