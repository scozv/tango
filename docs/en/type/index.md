<a name="t"></a>
# Type Extension
All typies in data structure are defined in `tango.type`.

A function can be the parameter, such as in `.map(fn)`, `.forEach(fn)`, `.sort(compare)`, etc. 
The default `fn` in `.map(fn)` is `x => x`, while the default comparasion way is `(x, y) => x - y`.

## Type Constructors
#### `new tango.type.LinkedList()`
Constructs a new linked list.
#### `new tango.type.Stack()`
Constructs a new stack
#### `new tango.type.Queue()`
Constructs a new queue.
#### `new tango.type.MaxHeap(): heap`
Gets a new max heap.
#### `new tango.type.MinHeap(compare): heap`
Gets a new min heap.
#### `new tango.type.QuickFind(n: number): unionfind`
Gets an union find by QuickFind algorithm.
#### `new tango.type.WeightedQuickUnion(n: number): unionfind`
Gets an union find by Weighted QuickFind algorithm.
#### `new tango.type.BinarySearchTree(compare)`
Gets a Binary Search Tree with the specific comparasion rule.
#### `new tango.type.Graph(n: number, directed: bool = false)`
Gets a unweighted graph with $$n$$ vertex, which is undirected by default.
#### `new tango.type.GraphW(n: number, directed: bool = false)`
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