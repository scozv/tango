<a name="t" />
# T.*
All types of structures are defined in __window.T__.

We pass some funtion as parameter sometimes, such as `.map(fn), .forEach(fn), .sort(compare)`... The default `fn` for `.map(fn)` is `x => x`, while the default for comparasion is `(x, y) => x - y`.

## Constructors
Call | Meaning
:----|:-------
`new T.LinkedList()` | constructs a new linked list
`new T.Stack()` | constructs a new stack
`new T.Queue()` | constructs a new queue
`new T.MaxHeap(): heap` | gets a new max heap
`new T.MinHeap(compare): heap` | gets a new min heap
`new T.QuickFind(` <br /> `n: number): unionfind`| gets a union find by QuickFind algorithm
`new T.WeightedQuickUnion(` <br /> `n: number): unionfind` | gets a union find by Weighted QuickFind algorithm
`new T.BinarySearchTree(compare)` | gets a binary search tree with the specific comparasion rule
`new T.Graph(` <br /> `n: number,` <br /> `directed: bool = false)` | gets a unweighted graph with n vertex, which is undirected by default
`new T.GraphW(` <br /> `n: number,` <br /> `directed: bool = false)` | gets a weighted graph with n vertex, which is undirected by default

[Back to top](#t)

## Members
### LinkedList
Call | Meaning
:----|:-------
`size(): number` | the size of the list
`isEmpty(): boolean` | true when list is empty, otherwise false
`insert(any, i): void` | insert elem after ith element, basing 0, if `i >= length`, insert elem at the end of list
`push(any): void` | insert elem at the end of list
`reverse(): void` | reverse the list itself
`remove(any): void` | remove the first node with elem, if no such node, wo do nothing
`forEach(x => void): void` | apply the function to each element in `0..n-1` order
`map(x => any): [any]` |  get a new array mapped from `x => any` in `0..n-1` order
`toArray(): []` | get a new array containing each element of list in `0..n-1` order

[Back to top](#t)

### Stack
Call | Meaning
:----|:-------
`size(): number` | the size of the list
`isEmpty(): boolean` | true when list is empty, otherwise false
`push(any): void` | push item into stack
`peek(): any` | get the last item from stack, error when empty
`pop(): any` | get the last item and remove it, error when empty
`forEach(x => void): void` | apply the function to each element in LIFO order
`map(x => any): [any]` |  get a new array mapped from `x => any` in LIFO order
`toArray(): []` | get a new array containing each element of stack in LIFO order

[Back to top](#t)

### Queue
Call | Meaning
:----|:-------
`size(): number` | the size of the list
`isEmpty(): boolean` | true when list is empty, otherwise false
`enqueue(any): void` | add item into queue
`peek(): any` | get the first added item from queue, error when empty
`dequeue(): any` | get the first added item and remove it, error when empty
`forEach(x => void): void` | apply the function to each element in FIFO order
`map(x => any): [any]` |  get a new array mapped from `x => any` in FIFO order
`toArray(): []` | get a new array containing each element of queue in FIFO order

[Back to top](#t)

### Heap
Usage of `Sorting.MinHeap` is same as `Sorting.MaxHeap`, except the constructor. Notice, there is a pseudo element at `heap[0]` which we might not use.

The reason we do not implement public `forEach`, `map` or `toArray` is that any of these function will destroy the heap.

Call | Meaning
:----|:-------
`isEmpty(): boolean` | returns true if there is no real element in heap
`size(): number` | gets the number of elements in heap
`push(any): number` | inserts a element into the heap, and gets length of the new heap
`pop(): any` | gets the max / min element from heap, and remove it, keeping heap sorted

[Back to top](#t)

### MinHeap
Call | Meaning
:----|:-------
`update(` <br /> `key: x=>boolean,` <br /> `when: x=>boolean,` <br /> `how: x=>void): boolean` | find the elem holding `key(x)`, if `when(x)`, then update elem by `how(x)`, return false iff no elem hoding `key(x)`

[Back to top](#t)

### QuickFind
When we construct a quick find, we pass `n` as the capacity of the quick find. We index the elements in quick find from `0` to `n-1` (inclusive).

Call | Meaning
:----|:-------
`connected(p, q): boolean` | returns true iff `p` is connected with `q`
`count(): number` | gets the number of components which are not connected with each other
`union(p, q): number` | unions `p` with `q`, and returns the count after union

Different algorithms of quick find bring us different growth of the cost, see below:

Type | `connected(p, q)` | `union(p, q)`
:----|:-----------------:|:-------------
`T.QuickFind(N)` | `O(1)` | `O(N)`
`T.WeightedQuickFind(N)` | `O(lg N)` | `O(lg N)`

[Back to top](#t)

### BinarySearchTree
We can indicate the comparasion rule by constructor parameter which will be used for greater left instead of smaller left by default.

For `search`, `insert`, `delete` operations which travel the tree, we provide you two versions, one is iterative operation, the other is recursive one whose function name is initialized with a `r`. Always choose iterative operations as a recommandation.

And, here is definition for some properties of tree, according to Wikipedia:

> The height of a node is the length of the longest downward path to a leaf from that node. 
> 
> The depth of a node is the length of the path to its root (i.e., its root path). The root node has depth zero, leaf nodes have height zero.
> 
> The height of the root is the height of the tree. An empty tree (tree with no nodes, if such are allowed) has depth and height `−1`.

We have defined different traversal way in `T.TRAVERSAL.*`. The default traversal way is `T.TRAVERSAL.IN_ORDER`.

Recursive Call | Iterative Call | Meaning
:--------------|:---------------|:-------
`rSearch(elem): node` | `search(elem): node` | searches elem in this tree, returns node which contains elem, or null if not exsits
`rInsert(elem): void` | `insert(elem): void` | inserts elem under `BST` order, no duplication
`rForEach(` <br /> `TRAVERSAL,` <br /> `fn): void` | `forEach(` <br /> `TRAVERSAL,` <br /> `fn): void` | travel this `BST` tree with specific `T.TRAVERSAL` order
`rMap(` <br /> `TRAVERSAL,` <br /> `fn: x => any): [any]` | `map(` <br /> `TRAVERSAL,` <br /> `fn): [any]` | maps each element of this `BST` tree into an array with specific `T.TRAVERSAL` order

[Back to top](#t)

### Graph
Representation of unweighted graph, and it is undirected graph by default.

To build a graph, we must pass `n` as number of vertex. `n`, the number of vertex, is readonly after built graph.

However, when we call `v()` or `e()` as below, the number we get is the valid number of vertex or edges, which has not been visited or marked.

Call | Meaning
:----|:-------
`n: number` | gets the actual number of vertex, whether it is visited, marked or not
`v(): number`| gets the number of vertex, which has not been visited
`e(): number`| gets the number of edges, which has not been marked invalid, and the sourcing vertex has not been visited
`clone(): Graph` | gets a new cloned graph from this graph itself
`toString(` <br /> `verbose: bool = false)` | gets the information of this graph, containing only number of v and e by default

[Back to top](#t)

### GraphW
The members in weighted graph is same as the graph, except some differences between the adjancency list representation:

Type | Element in Adjancency List
:----|:-------
`T.Graph` | `[v, [u1, u2, u3, ...]]`
`T.GraphW` | `[v, [(u1, w1), (u2, w2), (u3, w3), ...]]`

[Back to top](#t)