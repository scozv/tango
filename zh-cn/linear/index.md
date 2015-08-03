<a name="list"></a>
# 线性算法
线性集合上的一些通用算法定义在`List.*`中。
要使用线性集合的数据结构，请参考`T.Stack`，`T.LinkedList`等。

现有方法的时间复杂度为:

方法 | 时间复杂度
:----|:---:
`validPopStackSeries` | $\operatorname{O}(n)$
`medianMaintenence` | $\operatorname{O}(n \ln n)$$

#### `validPopStackSeries(push: [], pop: []): bool`
验证一个`pop`序列，是否为基于`push`入栈的有效出栈序列。
#### `medianMaintenence(arr): []`
遍历数组`arr`，维护每一次遍历的中位数。

<!--[Back to top](#list)-->
