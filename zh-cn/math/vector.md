<a name="math"></a>

<a name="math-vector"></a>
## 向量
向量定义在`Math.Vector`中。每一个向量都有一个维度`n`。

#### `new Math.Vector(arr)`
通过向量坐标组构造一个新的向量。
#### `new Math.Vector(arr1, arr2)`
通过两个点的坐标组构造一个新的向量。
#### `new Math.Vector(Math.Point, Math.Point)`
通过两个点构造一个新的向量。
#### `Math.Vector.norm(vec): number`
获得向量的模。
#### `Math.Vector.dot(v1, v2): number`
获得两个向量的数量积。
#### `Math.Vector.cos(v1, v2): number`
获得两个向量的夹角值。

#### `norm(): number`
获得该向量的模。
#### `dot(that): number`
获得该向量和`that`向量的数量积。
#### `cos(that): number`
获得该向量和`that`向量的夹角值。

<!--[Back to top](#math)-->
