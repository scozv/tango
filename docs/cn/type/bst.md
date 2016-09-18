<a name="t"></a>

<a name="binarysearchtree"></a>
## 二叉树
二叉树定义在`algo.type.BinarySearchTree`。

可以传入一个函数，作为二叉树的排序规则，即默认将更小的值放到左节点，还是
将更大的值放到左节点。

二叉树的遍历操作，比如`search`、 `insert`和 `delete` 有如下两个版本：

* 迭代实现； 
* 递归实现，方法名前面带着一个`r`。

在`JavaScript`中，优先使用迭代版本的函数。

<!--引用维基百科对树的定义：([Terminology of Tree on Wikipedia] [1]):-->

<!-- The height of a node is the length of the longest downward path to a leaf from that node. -->
<!-- -->
<!-- The depth of a node is the length of the path to its root (i.e., its root path). The root node has depth zero, leaf nodes have height zero.-->
<!-- -->
<!-- The height of the root is the height of the tree. An empty tree (tree with no nodes, if such are allowed) has depth and height `−1`.-->

同时，我们在`algo.type.TRAVERSAL.*`中定义了树的遍历规则，默认按照中序遍历。

#### `search(elem): node`
在二叉树中查找指定元素，返回包含该元素的节点，如果没有该元素，则返回`null`。

对应的递归版本为`rSearch(elem): node`。

#### `insert(elem): void`
按照排序规则，向二叉树中插入指定元素，并保证元素的唯一性。

对应的递归版本为`rInsert(elem): void`。

#### `forEach(t: TRAVERSAL, fn): void`
按照指定的遍历规则，将指定的函数`fn`应用到每一个元素上。

对应的递归版本为`rForEach(t: TRAVERSAL, fn): void`。

#### `map(t: TRAVERSAL, fn): [any]`
按照指定的遍历规则，将每一个元素映射到新值，并返回一个新的数组（结果集）。

对应的递归版本为`rMap(t: TRAVERSAL, fn): void`。

[回到页面上方](#t)

<!--[1]: https://en.wikipedia.org/wiki/Tree_(data_structure)#Terminology "Tree Term"-->