<a name="t"></a>

<a name="linkedlist"></a>
## 单向链表
单向链表定义在`tango.type.LinkedList`中。

#### `insert(any, i): void`
在第$$i$$处索引之后，插入新值，其中，索引从$$0$$开始编号。如何$$i$$大于等于该链接表的长度，
则将新值插入在链接表的尾部。
#### `push(any): void`
将新值插入在链接表的尾部。
#### `reverse(): void`
将该链接表反置。
#### `remove(any): void`
从该连接表中删除指定的元素，只删除第一次出现元素，如果没有这样的元素，则保持链接表不变。

<!--[Back to top](#t)-->