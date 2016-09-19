<a name="list"></a>
# Linear Algorithm
We put some algorithms on linear collection into `tango.linear.*`. 
To use linear collection type, please go to `tango.type.Stack`, `tango.type.LinkedList`...

A overview of time complexity is listed below:

Call | Time Complexity
:----|:---:
`validPopStackSeries` | $$\text{O}(N)$$
`medianMaintenence` | $$\text{O}(N \ln N)$$

#### `validPopStackSeries(push: [], pop: []): bool`
Returns true iff we can get the `pop` series from the `push` series, using a stack.
#### `medianMaintenence(arr): []`
For each time $$t$$ we visit `arr` from $$0$$ to $$n-1$$, 
we maintenence the median of all $$[0, t]$$ elements from input, 
and push this median into output array.

<!--[Back to top](#list)-->
