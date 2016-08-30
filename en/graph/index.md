<a name="graph"></a>
# Graph

All the following methods are invoked like `algo.graph._`. 
To create a graph object, use `new algo.type.Graph*()`.

#### `bfs(graph): []`
Gets the vertex visiting array by BFS order.
#### `dfs(graph): []`
Gets the vertex visiting array by DFS order.
#### `dijkstra(graph, s: number = 1): []`
Gets the shortest path length of each vertex from initial vertex $$s$$.
#### `multiMinimumCut(graph, times: number): number`
Gets the minimum cut number of graph after that times calculations.
#### `mstPrim(graph, s: number = 1): number`
Gets the total MST cost of weighted graph by Prim algorithm.
#### `mstKruskal(graph): number`
Gets the total MST cost of weighted graph by Kruskal algorithm.
#### `mstKruskal(graph, k): number`
Gets the max space of k-clustering by Kruskal algorithm.
#### `sccKosaraju(graph): []`
Gets the top $$3$$ largest size of strong connect component for a directed graph, using Kosaraju algorithm.
#### `sccTarjan(graph): []`
Gets the top $$3$$ largest size of strong connect component for a directed graph, using Tarjan algorithm. 
The implemention of this Tarjian algorithm is iterative one, instead of recursive one.
([Explanation](http://scotv.github.io/algo/2013/11/10/how-to-write-iterative-tarjan-scc-algorithm-part-zero/#pi))
#### `topologicalSort(graph): []`
Gets the topological visiting array of this directed graph.
#### `undirectedConnected(graph): []`
Gets an array indicating connectivity info of undirected graph. this undirected graph is connected
iff  `result.length == 1` AND `result[0][1] == Graph.dfs(graph)`.

<!--[Back to top](#graph)-->
