<a name="t"></a>

<a name="graphw"></a>
## 有权重图
有权重图定义在`tango.type.GraphW`中。

有权重图和无权重图的成员相同，唯一的区别在于各自的邻接矩阵的结构：

图的类型 | 邻接矩阵的数据结构
:----|:-------
`tango.type.Graph` | `[v, [u1, u2, u3, ...]]`
`tango.type.GraphW` | `[v, [(u1, w1), (u2, w2), (u3, w3), ...]]`

<!--[Back to top](#t)-->