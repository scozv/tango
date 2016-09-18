<a name="t"></a>

<a name="heap"></a>
## 堆
除了构造器不同以外，最小堆`algo.type.MinHeap` 和最大堆 `algo.type.MaxHeap`有着相同的成员函数。
该构造器用于指定堆中排序的规则，我们称之为堆的有序性。

堆中的元素都是唯一的。

需要注意的是，堆中有个伪成员`heap[0]`，当堆只剩下该伪成员的时候，我们认为堆是空堆。
同时，伪成员不占用堆的长度。
不要直接去访问该伪成员。

遍历堆的时候，要破坏堆的底层结构，所以不提供遍历的公开接口，
比如`forEach`、`map` 和 `toArray`。 

#### `isEmpty(): boolean`
获取一个布尔值，当堆为空时，该布尔值为`true`，否则为`false`。
#### `size(): number`
获取堆的长度。
#### `push(any): number`
按照规则，将元素插入到堆中，并返回新堆的大小。
#### `pop(): any`
按照规则，获取最小堆的当前最小值，或者最大堆的当前最大值。
并将该值从堆中删除，同时保证堆的有序性。
#### `minheap.update(key, when, how): boolean`
在最小堆中，找到一个满足`key(x)`的元素：
* 如果该元素进而满足`when(x)`，则按照`how(x)`来更新该元素，同时返回`true`表示我们找到了指定元素；
* 如果该元素不满足`when(x)`，直接返回`true`表示我们找到了指定元素；
* 如果不存在满足`when(x)`的元素，返回`false`表示我们无法找到指定元素。

该方法主要用于`Dijkstra`最短路径算法的优化。

参数的完整定义是：
```JavaScript
minheap.update(
  key: x => boolean, 
  when: x => boolean, 
  how: x => void): boolean
```

<!--[Back to top](#t)-->