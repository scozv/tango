<a name="array"></a>
# `Array`包扩展
对`JavaScript`中的Array做了扩展。

#### `Array.zip(arr1, arr2): []`
返回一个新的数组，将两个数组`arr1`和`arr2`并列合并。

```JavaScript
Array.zip([1, 2, 3], ['A', 'B', 'C'])
// [[1, 'A'], [2, 'B'], [3, 'C']]
```
#### `Array.swap(arr, i, j): void` 
交换数组中两个索引`i`和`j`的值，该操作直接改变数组。

#### `.clone(): []`
获得一个新的克隆数组。
#### `.zip(that): []`
返回一个新的数组，将该数组和`that`数组并列合并。

<!--[Back to top](#array)-->
