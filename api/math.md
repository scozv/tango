<a name="math"></a>
# Math
The basic extensions for Math.

#### `Math.mod(i, n): number`
Returns a positive number $x$, where $i = k * n + x, (x > 0)$.
#### `Math.range(start = 0, end, step = 1): []`
Generates an array of range from `start` (inclusive) to `end` (exclusive), with that `step`.
#### `Math.randomInteger(a = 0, b): number`
Gets a random integer $x$, where $ a \leq x \leq b $.
 
<a name="math-stats"></a>
## Statistics
The basic statistics extension that is located in `Math.Stats.*`

#### `max(arr): number`
Gets the max number of an array.
#### `min(arr): number`
Gets the min number of an array.
#### `sum(arr): number`
Gets the sum of an array.
#### `mean(arr): number`
Gets the average of an array.
#### `var(arr): number`
Gets sample variance of an array.
#### `stddev(arr): number`
Gets the standard deviation of an array.
#### `linearLeastSquare(X,  Y, fn = (x=>x)): [number, number]`
Gets the `[a, b]`, where $fn(Y) = a \cdot fn(X) + b$. Passes `Math.log` to get linear least square for $Y = c \cdot X^a$.

[Back to top](#math)

<a name="math-point"></a>
## Math.Point
The point for the vector.

#### `new Math.Point(arr)`
Builds new point by coordinates array.

[Back to top](#math)

<a name="math-vector"></a>
## Math.Vector
The vector in $n$ dimension.

#### `new Math.Vector(arr)`
Builds new vector by coordinates array.
#### `new Math.Vector(arr1, arr2)`
Builds new vector by coordinates array of two point.
#### `new Math.Vector(point1, point2)`
Builds new vector by two Math.Point.

#### `Math.Vector.norm(vec): number`
Gets the length of the vec.
#### `Math.Vector.dot(v1, v2): number`
Calculates the `dot` result of two vectors.
#### `Math.Vector.cos(v1, v2): number`
Calculates the `cos` result of two vectors.

#### `norm(): number`
Gets the length of the vec itself.
#### `dot(that): number`
Calculates the `dot` result of this and that.
#### `cos(that): number`
Calculates the `cos` result of this and that.

[Back to top](#math)
