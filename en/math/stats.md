<a name="math"></a>

<a name="math-stats"></a>
## Statistics
The basic statistics extension that is located in `Math.Stats.*`

#### `equals(x: number, y: number): boolean`
Return true iif `Math.abs(x - y) < 1e-29`.
#### `equals(x: Array, y: Array): boolean`
Return true iif the lengths of array x and y are same and each items in same index are `equals()`.
#### `max(arr): number`
Gets the max value of an array.
#### `min(arr): number`
Gets the min value of an array.
#### `sum(arr): number`
Gets the sum of an array.
#### `normalize(arr): []`
Normalizes the array, for instance: `normalize([1, 7, 3])` 
$$=[\frac{1}{1+7+3}, \frac{7}{1+7+3}, \frac{3}{1+7+3}]$$.
#### `mean(arr): number`
Gets the average of an array.
#### `var(arr): number`
Gets sample variance of an array.
#### `stddev(arr): number`
Gets the standard deviation of an array.
#### `linearLeastSquare(X,  Y, fn = (x=>x)): [number, number]`
Gets the `[a, b]`, where $$\operatorname{fn}(\vec{Y}) = a \cdot \operatorname{fn}(\vec{X}) + b$$. 
Passes `Math.log` to get linear least square for $$\vec{Y} = c \cdot (\vec{X})^a$, where $c = e^b$$.

<!--[Back to top](#math)-->