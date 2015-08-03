<a name="t"></a>

<a name="queue"></a>
## 队列
队列定义在`T.Queue`中。

#### `enqueue(any): void`
将元素加入到队列中排队。
#### `peek(): any`
获取最早进入排队的元素，如果是空队列，则抛出异常。
#### `dequeue(): any`
获取最早进入排队的元素，并将该元素从队列中删除，如果是空队列，则抛出异常。

<!--[Back to top](#t)-->