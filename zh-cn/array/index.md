<a name="array"></a>
# `Array`包扩展
对`JavaScript`中的`Array`做了扩展。

#### `algo.linear.array.zip(arr1, arr2): []`
返回一个新的数组，将两个数组`arr1`和`arr2`并列合并。

```JavaScript
Array.zip([1, 2, 3], ['A', 'B', 'C'])
// [[1, 'A'], [2, 'B'], [3, 'C']]
```
#### `algo.linear.array.swap(arr, i, j): void` 
交换数组中两个索引$$i$$和$$j$$的值，该操作直接改变数组。

#### `.clone(): []`

使用`[...arr]`。

#### `.zip(that): []`

返回一个新的数组，将该数组和`that`数组并列合并。

请使用`algo.linear.array.zip(this, that)`。

<!--[Back to top](#array)-->
