<a name="t"></a>
# Type Extension
All typies in data structure are defined in `window.T`.

A function can be the parameter, such as in `.map(fn)`, `.forEach(fn)`, `.sort(compare)`, etc. 
The default `fn` in `.map(fn)` is `x => x`, while the default comparasion way is `(x, y) => x - y`.

## Type Constructors
#### `new T.LinkedList()`
Constructs a new linked list.
#### `new T.Stack()`
Constructs a new stack
#### `new T.Queue()`
Constructs a new queue.
#### `new T.MaxHeap(): heap`
Gets a new max heap.
#### `new T.MinHeap(compare): heap`
Gets a new min heap.
#### `new T.QuickFind(n: number): unionfind`
Gets an union find by QuickFind algorithm.
#### `new T.WeightedQuickUnion(n: number): unionfind`
Gets an union find by Weighted QuickFind algorithm.
#### `new T.BinarySearchTree(compare)`
Gets a Binary Search Tree with the specific comparasion rule.
#### `new T.Graph(n: number, directed: bool = false)`
Gets a unweighted graph with $$n$$ vertex, which is undirected by default.
#### `new T.GraphW(n: number, directed: bool = false)`
Gets a weighted graph with $$n$$ vertex, which is undirected by default.

[Back to top](#t)

## General Members of Linear Collection
Linear collection like `LinkedList`, `Stack`, `Queue` have the default traversal order. 

* `LinkedList` traverses each element in `0 ... n-1` order;
* `Stack`traverses each element in `LIFO` order;
* `Queue`traverses each element in `FIFO` order;

There are also some general members defined in linear collection.

#### `size(): number`
Gets the size (length) of the linear collecion.
#### `isEmpty(): boolean`
Returns `true` when the linear collection is empty, otherwise `false`.
#### `forEach(x => void): void`
Applies a function to each element in default order.
#### `map(x => any): [any]`
Gets a new array mapped from `x => any`in default order.
#### `toArray(): []`
Gets a new array containing each element of this linear collection in default order.

[Back to top](#t)