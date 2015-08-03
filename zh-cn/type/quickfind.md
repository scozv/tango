<a name="t"></a>

<a name="quickfind"></a>
## 并查集
构造一个并查集`QuickFind`的时候，需要指定并查集的容量`n`。
并查集的索引从`0`开始，最大为`n-1`。

使用不同的算法，并查集各个操作的时间复杂度有所差异：

并查集类型 | `connected(p, q)` | `union(p, q)`
:----|:-----------------:|:-------------
`T.QuickFind(N)` | $\operatorname{O}(1)$ | $\operatorname{O}(N)$
`T.WeightedQuickFind(N)` | $\operatorname{O}(\ln N)$ | $\operatorname{O}(\ln N)$

#### `connected(p, q): boolean`
返回一个布尔值，如果两个节点`p`和`q`相互关联，则返回`true`，否则返回`false`。
#### `count(): number`
获得并查集当前的联通组件的数量。
#### `union(p, q): number`
将两个节点`p`和`q`相互关联，并返回关联之后的联通组件数。

<!--[Back to top](#t)-->