<a name="math"></a>

<a name="math-vector"></a>
## Math.Vector
The vector is in $$n$$ dimension.

#### `new Math.Vector(arr)`
Builds new vector by coordinates array.
#### `new Math.Vector(arr1, arr2)`
Builds new vector by coordinates array of two point.
#### `new Math.Vector(Math.Point, Math.Point)`
Builds new vector by two Math.Point.

#### `Math.Vector.norm(vec): number`
Gets the length of the vec, that is $$|\vec{X}|=\sqrt{\sum_{i=0}^{n-1} x_i^2}$$.
#### `Math.Vector.dot(v1, v2): number`
Calculates the `dot` result of two vectors, that is $$\vec{X}\cdot \vec{Y} = \sum_{i=0}^{n-1} x_i \cdot y_i$$  .
#### `Math.Vector.cos(v1, v2): number`
Calculates the `cos` result of two vectors, that is $$\frac{\vec{X}\cdot \vec{Y}}{|\vec{X}|\cdot |\vec{Y}|}$$  .

#### `norm(): number`
Gets the length of the vec itself.
#### `dot(that): number`
Calculates the `dot` result of this and that.
#### `cos(that): number`
Calculates the `cos` result of this and that.

<!--[Back to top](#math)-->
