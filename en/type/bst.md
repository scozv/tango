<a name="t"></a>

<a name="binarysearchtree"></a>
## BinarySearchTree
We can indicate the comparasion rule by constructor parameter which 
will be used for greater left instead of smaller left by default.

For `search`, `insert`, `delete` operations that travel the tree, 
there are two versions:

* iterative operation, 
* recursive one, in which function name is initialized with a `r`.

Always choose iterative operations as a recommandation in `JavaScript`.

<!--And, here is definition for some properties of tree, -->
<!--according to Wikipedia -->
<!--([Terminology of Tree on Wikipedia] [1]):-->

<!-- The height of a node is the length of the longest downward path to a leaf from that node. -->
<!-- -->
<!--The depth of a node is the length of the path to its root (i.e., its root path). The root node has depth zero, leaf nodes have height zero.-->
<!-- -->
<!-- The height of the root is the height of the tree. An empty tree (tree with no nodes, if such are allowed) has depth and height `−1`.-->

We have defined different traversal way in `T.TRAVERSAL.*`. 
The default traversal way is `T.TRAVERSAL.IN_ORDER`.

#### `search(elem): node`
Searches `elem` in this tree, returns node which contains`elem`, or `null` if not exsits.

Recursive version is `rSearch(elem): node`.

#### `insert(elem): void`
Inserts `elem` under `BST` order, no duplication.

Recursive version is `rInsert(elem): void`.

#### `forEach(t: TRAVERSAL, fn): void`
Travels and applies function `fn` on this `BST` tree with specific `T.TRAVERSA` order.

Recursive version is `rForEach(t: TRAVERSAL, fn): void`.

#### `map(t: TRAVERSAL, fn): [any]`
Maps each element of this `BST` tree into an array with specific `T.TRAVERSA` order.

Recursive version is `rMap(t: TRAVERSAL, fn): void`.

[Back to top](#t)

<!--[1]: https://en.wikipedia.org/wiki/Tree_(data_structure)#Terminology "Tree Term"-->