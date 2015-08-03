<a name="sorting"></a>
# Sorting
In our sorting, we pass a function as parameters, named `compare(x, y) : number`. 
We sort the array by comparing each two value with this `compare` function.

The default `compare(x, y) : number` is `(x, y) => x - y`. that is ascending order. 
While, we may pass `(x, y) => y -x` to order by DESC, or we could pass `(x, y) => y^2 - x^2` 
to order by DESC of each absolute value.

#### `isSorted(arr, compare): boolean`
Gets a boolean value indicating whether the `arr` is sorted under this `compare` rule.
#### `quickSort(arr, compare): []`
Gets a new sorted array by quick sort.
#### `mergeSort(arr, compare): []`
Gets a new sorted array by merge sort.
#### `mergeSortBU(arr, compare): []`
Gets a new sorted array by bottom-up merge sort.
#### `heapSort(arr, option): []`
Gets a new sorted array by heap sort, with `option = {order:"ASC"}` OR `option = {order:"DESC"}`.

[Back to top](#sorting)
