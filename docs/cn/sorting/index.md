<a name="sorting"></a>
# 排序算法
所有的排序算法定义在`tango.sorting._`中，每个排序算法，
接受一个排序规则函数`compare(x, y) : number`用来比较
两两元素的先后关系。

默认的排序规则是升序排列，即`(x, y) => x - y`。可以使用`(x, y) => y^2 - x^2` 作
绝对值的降序排列。

#### `isSorted(arr, compare): boolean`
判断数组是否按照指定的规则排序。
#### `quickSort(arr, compare): []`
返回一个新的数组，按照指定的规则作快速排序。
#### `mergeSort(arr, compare): []`
返回一个新的数组，按照指定的规则作归并排序。
#### `mergeSortBU(arr, compare): []`
返回一个新的数组，按照指定的规则作Bottom Up归并排序。
#### `heapSort(arr, option): []`
返回一个新的数组，按照指定的规则作堆排序。

规则可以是`option = {order:"ASC"}` 或者 `option = {order:"DESC"}`。

<!--[Back to top](#sorting)-->
