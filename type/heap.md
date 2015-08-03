<a name="t"></a>

<a name="heap"></a>
## Heap
Usage of `T.MinHeap` is same as `T.MaxHeap`, except the constructor. 
Notice, there is a pseudo element at `heap[0]` which we might not use.

The reason we do not implement public `forEach`, `map` or `toArray` is 
that any of these function will destroy the heap.

#### `isEmpty(): boolean`
Returns `true` if there is no real element in `heap`, otherwise `false`.
#### `size(): number`
Gets the number of elements in `heap`.
#### `push(any): number`
Inserts an element into the `heap`, and gets `size()` of the new `heap`.
#### `pop(): any`
Get the max element from `MaxHeap`, or the min element from `MinHeap`, 
the remove it, keeping `heap` sorted.
#### `minheap.update(key, when, how): boolean`
`minheap.update(key: x => boolean, when: x => boolean, how: x => void): boolean`

Finds the elem holding `key(x)`, if `when(x)`, 
then updates that elem by `how(x)`, 
returns `false` iff no elem hoding `key(x)`.

[Back to top](#t)