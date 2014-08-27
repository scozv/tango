<a name="t"></a>
# Type Extension
All types of structures are defined in __window.T__.

We pass some funtion as parameter sometimes, such as `.map(fn), .forEach(fn), .sort(compare)`... 
The default `fn` for `.map(fn)` is `x => x`, while the default for comparasion is `(x, y) => x - y`.

## Type Constructors
### `new T.LinkedList()`
Constructs a new linked list.
### `new T.Stack()`
Constructs a new stack
### `new T.Queue()`
Constructs a new queue.
### `new T.MaxHeap(): heap`
Gets a new max heap.
### `new T.MinHeap(compare): heap`
Gets a new min heap.
### `new T.QuickFind(n: number): unionfind`
Gets a union find by QuickFind algorithm.
### `new T.WeightedQuickUnion(n: number): unionfind`
Gets a union find by Weighted QuickFind algorithm.
### `new T.BinarySearchTree(compare)`
Gets a Binary Search Tree with the specific comparasion rule.
### `new T.Graph(n: number, directed: bool = false)`
Gets a unweighted graph with `n` vertex, which is undirected by default.
### `new T.GraphW(n: number, directed: bool = false)`
Gets a weighted graph with `n` vertex, which is undirected by default.

[Back to top](#t)

## General Members of Linear Collection
Linear collection like `LinkedList, Stack, Queue ...` have the default traversal order. 

* `LinkedList` traverses each element in `0 ... n-1` order;
* `Stack`traverses each element in `LIFO`order;
* `Queue`traverses each element in `FIFO`order;

There are also some general members defined in linear collection.

* `size(): number`
  Gets the size (length) of the linear collecion.
* `isEmpty(): boolean`
  Returns `true`when the linear collection is empty, otherwise `false`.
* `forEach(x => void): void`
  Applies a function to each element in default order.
* map(x => any): [any]`
  Gets a new array mapped from `x => any`in default order.
* `toArray(): [ ]`
  Gets a new array containing each element of this linear collection in default order.

<a name="linkedlist"></a>
## LinkedList
### `insert(any, i): void`
Inserts an element after ith element, indexing from 0, if `i >= size()`, 
insert elem at the end of list.
### `push(any): void`
Inserts an element at the end of list.
### `reverse(): void`
Reverses the list itself.
### `remove(any): void`
Removes the first node with such element, if no such node, keeps array unchanged.

[Back to top](#t)

<a name="stack"></a>
## Stack
### `push(any): void`
Pushes `any` item into `stack`.
### `peek(): any`
Gets the last added item from `stack`, throws `error` when empty.
### `pop(): any`
Gets and removes the last added item from `stack`, throws `error` when empty.

[Back to top](#t)

<a name="queue"></a>
## Queue
### `enqueue(any): void`
Addes item into `queue`.
### `peek(): any`
Gets the first added item from `queue`, throws `error` when empty.
### `dequeue(): any`
Gets and removes the first added item from `queue`, throws `error` when empty.

[Back to top](#t)

<a name="heap"></a>
## Heap
Usage of `T.MinHeap` is same as `T.MaxHeap`, except the constructor. 
Notice, there is a pseudo element at `heap[0]` which we might not use.

The reason we do not implement public `forEach`, `map` or `toArray` is 
that any of these function will destroy the heap.

### `isEmpty(): boolean`
Returns `true` if there is no real element in `heap`, otherwise `false`.
### `size(): number`
Gets the number of elements in `heap`.
### `push(any): number`
Inserts an element into the `heap`, and gets `size()` of the new `heap`.
### `pop(): any`
Get the max element from `MaxHeap`, or the min element from `MinHeap`, 
the remove it, keeping `heap` sorted.
### `minheap.update(key, when, how): boolean`
`minheap.update(key: x => boolean, when: x => boolean, how: x => void): boolean`

Finds the elem holding `key(x)`, if `when(x)`, 
then updates that elem by `how(x)`, 
returns `false` iff no elem hoding `key(x)`.

[Back to top](#t)

<a name="quickfind"></a>
## QuickFind
When we construct a `QuickFind`, we pass `n` as the capacity of the quick find. 
We mark the elements in quick find from `0` to `n-1` (inclusive).

Different algorithms of quick find bring us different growth of the cost, see below:

Type | `connected(p, q)` | `union(p, q)`
:----|:-----------------:|:-------------
`T.QuickFind(N)` | `O(1)` | `O(N)`
`T.WeightedQuickFind(N)` | `O(lg N)` | `O(lg N)`

### `connected(p, q): boolean`
Returns `true` iff `p` is connected with `q`, otherwise `false`.
### `count(): number`
Gets the number of components which are not connected with each other.
### `union(p, q): number`
Unions `p` with `q`, and returns the `count()` after union.

[Back to top](#t)

<a name="binarysearchtree"></a>
## BinarySearchTree
We can indicate the comparasion rule by constructor parameter which 
will be used for greater left instead of smaller left by default.

For `search`, `insert`, `delete` operations which travel the tree, 
there are two versions, the one is iterative operation, 
the other is recursive one whose function name is initialized with a `r`.

Always choose iterative operations as a recommandation in `JavaScript`.

And, here is definition for some properties of tree, 
according to Wikipedia 
([Terminology of Tree on Wikipedia](https://en.wikipedia.org/wiki/Tree_(data_structure)\#Terminology)):

> The height of a node is the length of the longest downward path to a leaf from that node. 
> 
> The depth of a node is the length of the path to its root (i.e., its root path). The root node has depth zero, leaf nodes have height zero.
> 
> The height of the root is the height of the tree. An empty tree (tree with no nodes, if such are allowed) has depth and height `−1`.

We have defined different traversal way in `T.TRAVERSAL.*`. The default traversal way is `T.TRAVERSAL.IN_ORDER`.

### `search(elem): node`
Searches `elem` in this tree, returns node which contains`elem`, or `null` if not exsits.

Recursive version is `rSearch(elem): node`.

### `insert(elem): void`
Inserts `elem` under `BST` order, no duplication.

Recursive version is `rInsert(elem): void`.

### `forEach(t: TRAVERSAL, fn): void`
Travels and applies function `fn` on this `BST` tree with specific `T.TRAVERSA` order.

Recursive version is `rForEach(t: TRAVERSAL, fn): void`.

### `map(t: TRAVERSAL, fn): [any]`
Maps each element of this `BST` tree into an array with specific `T.TRAVERSA` order.

Recursive version is `rMap(t: TRAVERSAL, fn): void`.

[Back to top](#t)

<a name="graph"></a>
## Graph
Representation of unweighted graph, and it is undirected graph by default.

To build a graph, we must pass `n` as number of vertex. `n`, 
the number of vertex, is readonly after built graph.
However, when we call `v()` or `e()` as below, 
the number we get is the valid number of vertex or edges, 
which has not been visited or marked.

### `n: number`
Gets the actual number of vertex, whether it has been visited, marked or not.
### `v(): number`
Gets the number of vertex, which has not been visited.
### `e(): number`
Gets the number of edges, which has not been marked invalid, and the sourcing vertex has not been visited.
### `clone(): Graph`
Gets a new cloned graph from this original graph itself.
### `toString(verbose: boolean = false): string`
Gets the information of this graph, containing only number of vertex and edges by default.

[Back to top](#t)

<a name="graphw"></a>
## GraphW
The members in weighted graph is same as the graph, except some differences 
between the adjancency list representation:

Type | Element in Adjancency List
:----|:-------
`T.Graph` | `[v, [u1, u2, u3, ...]]`
`T.GraphW` | `[v, [(u1, w1), (u2, w2), (u3, w3), ...]]`

[Back to top](#t)
