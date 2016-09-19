<a name="array"></a>
# `Array` Extension
The basic extensions for `Array`.

#### `tango.linear.array.zip(arr1, arr2): []`
Returns an new array, each item in which is `[x, y]`, where `x` from `arr1` and `y` from `arr2`.

```JavaScript
Array.zip([1, 2, 3], ['A', 'B', 'C'])
// [[1, 'A'], [2, 'B'], [3, 'C']]
```

#### `tango.linear.array.swap(arr, i, j): void` 
Swaps the elements at index $$i$$ and $$j$$, and does modify the original `arr`.

#### `.clone(): []`
Get a new array cloned from the `arr` itself.

Use `[...arr]` instead.

#### `.zip(that): []`
Gets `Array.zip(this, that)`.

Use `tango.linear.array.swap(this, that)` instead.

<!--[Back to top](#array)-->
