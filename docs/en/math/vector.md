<a name="math"></a>

<a name="math-vector"></a>
## tango.math.Vector
The vector is in $$n$$ dimension.

#### `new tango.math.Vector(arr)`
Builds new vector by coordinates array.
#### `new tango.math.Vector(arr1, arr2)`
Builds new vector by coordinates array of two point.
#### `new tango.math.Vector(tango.math.Point, tango.math.Point)`
Builds new vector by two tango.math.Point.

#### `tango.math.Vector.norm(vec): number`
Gets the length of the vec, that is $$|\vec{X}|=\sqrt{\sum_{i=0}^{n-1} x_i^2}$$.
#### `tango.math.Vector.dot(v1, v2): number`
Calculates the `dot` result of two vectors, that is $$\vec{X}\cdot \vec{Y} = \sum_{i=0}^{n-1} x_i \cdot y_i$$  .
#### `tango.math.Vector.cos(v1, v2): number`
Calculates the `cos` result of two vectors, that is $$\frac{\vec{X}\cdot \vec{Y}}{|\vec{X}|\cdot |\vec{Y}|}$$  .

#### `norm(): number`
Gets the length of the vec itself.
#### `dot(that): number`
Calculates the `dot` result of this and that.
#### `cos(that): number`
Calculates the `cos` result of this and that.

<!--[Back to top](#math)-->
