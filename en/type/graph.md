<a name="t"></a>

<a name="graph"></a>
## Graph
Representation of unweighted graph, and it is undirected graph by default.

To build a graph, we must pass $$n$$ as number of vertex. $$n`, 
the number of vertex, is readonly after built graph.
However, when we call `v()` or `e()` as below, 
the number we get is the valid number of vertex or edges, 
which has not been visited or marked.

#### `n: number`
Gets the actual number of vertex, whether it has been visited, marked or not.
#### `v(): number`
Gets the number of vertex, which has not been visited.
#### `e(): number`
Gets the number of edges, which has not been marked invalid, and the sourcing vertex has not been visited.
#### `clone(): Graph`
Gets a new cloned graph from this original graph itself.
#### `toString(verbose: boolean = false): string`
Gets the information of this graph, containing only number of vertex and edges by default.

<!--[Back to top](#t)-->