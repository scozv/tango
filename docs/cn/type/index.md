<a name="t"></a>
# 基本数据结构
数据结构的类型定义在`algo.type`里面。

名为`fn`或者`compare`的参数通常都是函数，比如`.map(fn)`、 `.forEach(fn)`、 `.sort(compare)`等。 
`.map(fn)`的默认参数是 `x => x`，而默认的排序规则采用递增排序：`(x, y) => x - y`。

## 类型构造器
#### `new algo.type.LinkedList()`
构造一个单向链接表。
#### `new algo.type.Stack()`
构造一个栈。
#### `new algo.type.Queue()`
构造一个队列。
#### `new algo.type.MaxHeap(): heap`
构造一个最大堆。
#### `new algo.type.MinHeap(compare): heap`
构造一个最小堆。
#### `new algo.type.QuickFind(n: number): unionfind`
构造一个基于`QuickFind`算法的并查集。
#### `new algo.type.WeightedQuickUnion(n: number): unionfind`
构造一个基于`WeightedQuickUnion`算法的并查集。
#### `new algo.type.BinarySearchTree(compare)`
构造一个基于指定排序规则的二叉树。
#### `new algo.type.Graph(n: number, directed: bool = false)`
构造一个节点数目为$$n$$的无权重图，默认为无向图。
#### `new algo.type.GraphW(n: number, directed: bool = false)`
构造一个节点数目为$$n$$的有权重图，默认为无向图。

[回到页面上方](#t)

## 线性集合的通则
诸如 `LinkedList`、 `Stack`和`Queue` 这样的线性集合，我们定义默认的遍历方式：

* `LinkedList` 按照索引顺序从$$0$$到$$n-1$$遍历；
* `Stack`按照先进后出的规则遍历；
* `Queue`按照先进先出的规则遍历。

线性集合都有如下的公共函数：

#### `size(): number`
获取线性集合的长度。
#### `isEmpty(): boolean`
获取一个布尔值，当线性集合为空时，该布尔值为`true`，否则为`false`。
#### `forEach(x => void): void`
按照默认的遍历规则，对线性集合的每一个元素，应用指定的函数。
#### `map(x => any): [any]`
按照默认的遍历规则，对线性集合的每一个元素，映射为新的值，返回一个新的数组（结果集）。
#### `toArray(): []`
按照默认的遍历规则，将线性集合映射为一个新的数组。

[回到页面上方](#t)