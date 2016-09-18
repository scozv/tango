<a name="math"></a>

<a name="math-vector"></a>
## algo.math.Vector
The vector is in $$n$$ dimension.

#### `new algo.math.Vector(arr)`
Builds new vector by coordinates array.
#### `new algo.math.Vector(arr1, arr2)`
Builds new vector by coordinates array of two point.
#### `new algo.math.Vector(algo.math.Point, algo.math.Point)`
Builds new vector by two algo.math.Point.

#### `algo.math.Vector.norm(vec): number`
Gets the length of the vec, that is $$|\vec{X}|=\sqrt{\sum_{i=0}^{n-1} x_i^2}$$.
#### `algo.math.Vector.dot(v1, v2): number`
Calculates the `dot` result of two vectors, that is $$\vec{X}\cdot \vec{Y} = \sum_{i=0}^{n-1} x_i \cdot y_i$$  .
#### `algo.math.Vector.cos(v1, v2): number`
Calculates the `cos` result of two vectors, that is $$\frac{\vec{X}\cdot \vec{Y}}{|\vec{X}|\cdot |\vec{Y}|}$$  .

#### `norm(): number`
Gets the length of the vec itself.
#### `dot(that): number`
Calculates the `dot` result of this and that.
#### `cos(that): number`
Calculates the `cos` result of this and that.

<!--[Back to top](#math)-->
