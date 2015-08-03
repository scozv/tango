<a name="math"></a>

<a name="math-stats"></a>
## 统计
基本的统计扩展定义在`Math.Stats.*`中。

#### `equals(x: number, y: number): boolean`
判断两个数的差异是否在`1e-29`误差范围之内，
如果在该极小范围内，则认为两个数相等，返回`true`，否则返回`false`。
#### `equals(x: Array, y: Array): boolean`
如果两个数组的长度相等，并且每一个索引中的对应元素差异都在`1e-29`误差范围之内，
则返回`true`，表示两个数组相等，否则返回`false`。
#### `max(arr): number`
返回数组中的最大值。
#### `min(arr): number`
返回数组中的最小值。
#### `sum(arr): number`
返回数据的元素总和。
#### `normalize(arr): []`
返回一个新的权重数组，比如`normalize([1, 7, 3])` 等于
$[\frac{1}{1+7+3}, \frac{7}{1+7+3}, \frac{3}{1+7+3}]$。
#### `mean(arr): number`
返回数组的平均值。
#### `var(arr): number`
返回数组的样本方差。
#### `stddev(arr): number`
返回数组的样本标准差。
#### `linearLeastSquare(X,  Y, fn = (x=>x)): [number, number]`
返回最小二乘法的参数`[a, b]`，满足$\operatorname{fn}(\vec{Y}) = a \cdot \operatorname{fn}(\vec{X}) + b$。
如果传入参数`Math.log` 则返回最小对数二乘法的参数，满足$\vec{Y} = c \cdot (\vec{X})^a$, where $c = e^b$。

<!--[Back to top](#math)-->