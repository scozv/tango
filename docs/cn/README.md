# 为`algo-x`而作的接口文档


## 概述

元 | 数据
:----|:-------
最后更新 | 2016年8月
版本编号 | $$3.1$$
`LaTeX`引擎 | [`KaTeX`] [4]
drone.io | [![Build Status](https://drone.io/github.com/scozv/tango/status.png)](https://drone.io/github.com/scozv/tango/latest)
david-dm | [![devDependency Status](https://david-dm.org/scozv/tango/dev-status.png)](https://david-dm.org/scozv/tango#info=devDependencies)

早期的一份基于`LaTeX`编译的PDF文档发布在
[Releases](https://github.com/scozv/tango/releases)页面。

在项目的[`DUWO.md`] [3]文件中，可以了解到该算法包的进展情况。
而本页面是如下算法包的接口文档：

*  [`algo-js`](https://github.com/scozv/algo-js)：基于`JavaSript`而写的基本算法包
*  [`algo-scala`](https://github.com/scozv/algo-scala)（暂时搁置）：基于`Scala`而写的基本算法包
*  ...


## 命名空间

命名层级 | 说明
:-------|:------
`tango._` | 根节点
`tango.type._` | 基本的数据结构定义，可以使用工厂模式构造
`tango.math._` | `Math`扩展，以及数学相关的数据结构定义
`tango.linear._` | 线性算法和`Array`扩展
`tango.sorting._` | 排序算法
`tango.graph._` | 图算法

[1]: https://github.com/scozv/tango	"Algo-js"
[2]: https://github.com/scozv/algo-scala	"Algo-scala"
[3]: https://github.com/scozv/algo-js/blob/master/DUWO.md "README.md"
[4]: https://khan.github.io/KaTeX/ "KaTeX"
