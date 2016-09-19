<a name="graph"></a>
# 图算法
图算法定义在`tango.graph._`中，如果要使用图的数据结构，请参考`tango.type.Graph`或者`tango.type.GraphW`。

#### `bfs(graph): []`
获得图的广度优先（BFS）遍历数组。
#### `dfs(graph): []`
获得图的深度优先（DFS）遍历数组。
#### `dijkstra(graph, s: number = 1): []`
获得指定节点$$s$$到每一个节点的最短路径，使用Dijkstra算法。
#### `multiMinimumCut(graph, times: number): number`
获得图的最小割量，最多尝试`times`次。
#### `mstPrim(graph, s: number = 1): number`
获得有权重图的最小生成树的总权重，使用Prim算法。
#### `mstKruskal(graph): number`
获得有权重图的最小生成树的总权重，使用Kruskal算法。
#### `mstKruskal(graph, k): number`
获得图的`k`簇最大空间数，使用Kruskal算法。
#### `sccKosaraju(graph): []`
获得有向图的强联通组的个数，使用Kosaraju算法。
#### `sccTarjan(graph): []`
获得有向图的强联通组的个数，使用Tarjan算法。该算法的实现采用了迭代，而非递归。
参考[解释](http://scotv.github.io/algo/2013/11/10/how-to-write-iterative-tarjan-scc-algorithm-part-zero/#pi)。
#### `topologicalSort(graph): []`
获得有向图的拓扑排序序列。
#### `undirectedConnected(graph): []`
获得无向图的联通分组，比如，
```JavaSript
result = [
  v1: [v1,v4,v8],
  v2: [v2,v3],
  ...
]
```
表示，从 $$ v_1 $$ 出发，作深度优先（DFS）遍历，能依次访问到 $$v_1$$、$$v_4$$和$$v_8$$节点。
$$v_1$$不能访问得到其余节点，其余节点也不能访问得到$$v_1$$。

满足如下两个条件，则称无向图为联通图：

```JavaSript
result.length == 1 && 
result[0][1] == Graph.dfs(graph)
```

<!--[Back to top](#graph)-->
