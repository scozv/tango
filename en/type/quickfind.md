<a name="t"></a>

<a name="quickfind"></a>
## QuickFind
When construct a `QuickFind`, we pass $$n$$ as the capacity of the quick find. 
We mark the elements in quick find from $$0$$ to $$n-1$$ (inclusive).

Different algorithms of quick find bring us different growth of the cost, see below:

Type | `connected(p, q)` | `union(p, q)`
:----|:-----------------:|:-------------
`T.QuickFind(N)` | $$\operatorname{O}(1)$$ | $$\operatorname{O}(N)$$
`T.WeightedQuickFind(N)` | $$\operatorname{O}(\ln N)$$ | $$\operatorname{O}(\ln N)$$

#### `connected(p, q): boolean`
Returns `true` iff $$p$$ is connected with $$q$$, otherwise `false`.
#### `count(): number`
Gets the number of components which are not connected with each other.
#### `union(p, q): number`
Unions $$p$$ with $$q$$ and returns the `count()` after union.

<!--[Back to top](#t)-->