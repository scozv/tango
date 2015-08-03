<a name="list"></a>
# Linear Algorithm
We put some algortithms on linear collection into `List.*`. 
To use linear collection type, please go to `T.Stack`, `T.LinkedList`...

A overview of time complexity laies below:

Call | Time Complexity
:----|:---:
`validPopStackSeries` | $\operatorname{O}(n)$
`medianMaintenence` | $\operatorname{O}(n \ln n)$

#### `validPopStackSeries(push: [], pop: []): bool`
Returns true iff we can get the `pop` series from the `push` series, using a stack.
#### `medianMaintenence(arr): []`
For each time $t$ we visit `arr` from $0$ to $n-1$, 
we maintenence the median of all $[0, t]$ elements from input, 
and push this median into output array.

<!--[Back to top](#list)-->
