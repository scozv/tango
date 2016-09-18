<a name="overview"></a>
# `Algo.js`内部机制概述

我将试图解释`JavaScript`算法包内部的文件结构和机制说明。

* [文件结构](#file)
* [文件命名规则](#initial)
* [私有和公有成员](#member)
* [实例和静态方法](#static)
* [变量命名规则](#var)
* [小写和大写](#lower)
* [异常信息](#error)
* [单元测试](#ut)
* [代码覆盖率](#coverage)
* [参考书目](#ref)

<a name="file"></a>
## 文件结构
同样的一个类，可能分布在不同的文件中。比如排序`Sorting`类，分布在
`sorting.js`、`sorting.quickSort.js` 和 `sorting.mergeSort.js`中。

在文件`sorting.quickSort.js`中，有一行备注：
```JavaScript
// using sorting.js
```
表示`quickSort`依赖于`sorting`。

同时，我们需要在`index.html`中手动地指定引用顺序：
```HTML
script src="sorting.js"
script src="sorting.quickSort.js"
```

通常而言，如果我们有三个文件：`basic.js`、 `basic.extendOne.js`和 `basic.extendTwo.js`。
那么，`basic.js`一般是其它两个文件的前置依赖。

未来可能会参考[`Node.js`] [1]和[`RequireJS`] [2]中的`require()`作优化。
或者直接使用`grunt-contrib-uglify`发布为单个文件。

[回到页面上方](#overview)

<a name="initial"></a>
## 文件命名规则

 命名 | 含义
:-----|:-------
 `algo.type.*.js` | 数据结构的类型定义，比如`LinkedList`、`Stack`等
 `x.*.js` | 现有对象的扩展，比如`x.array.js` 
 `sorting.*.js` | 特定算法的实现，比如排序算法

文件命名时，首字母小写，采用驼峰风格。
比如，我们采用`sorting.quickSort.js`而非`sorting.quick_sort.js`，也不是`Sorting.QuickSort.js`。

[回到页面上方](#overview)

## 私有和公有成员
所有的成员命名都是首字母小写，采用驼峰风格。

我们有如下两种私有成员的命名规则：

* `member`是函数闭包中的私有变量，外部无法访问；
* `__member__`将被视为一个私有成员，用于内部共享访问。
  虽然外部可以访问到该成员，但是__不建议__之间访问该成员。

所有的私有成员定义在备注`// ***** private members *****`之下。

公有成员的命名规则只有一种：首字母小写、驼峰，不带任何下划线。

[回到页面上方](#overview)

<a name="static"></a>
## 实例和静态方法
所有的类名都是首字母大写，无论它是公开的还是嵌套私有。

比如我们有“点”的对象构造函数`new algo.math.Point()`，
也有“点”的静态方法，定义在`algo.math.Point.member()`

__记得__ 使用关键字 `new` 来构造对象。

[回到页面上方](#overview)

<a name="var"></a>
## 变量命名规则
变量的命名参考如下规则：

 变量命名 | 含义
:-----|:-------
`$pt` | `prototype`的缩写，常用于闭包内部。比如`$arr = Array.prototype` 
 `_` |  `this`的缩写，比如`function(){var _ = this;};` 
 `*compare` | 排序规则，返回负数、$$0$$或者正数

[回到页面上方](#overview)

<a name="lower"></a>
## 小写和大写
对象的定义都是首字母大写。

[回到页面上方](#overview)

<a name="error"></a>
## 异常信息
```JavaScript
'不要在异常信息的末尾添加标点符号'
```
这样便于我们拼接字符串。

[回到页面上方](#overview)

<a name="ut"></a>
## 单元测试
使用[`Mocha`] [3]执行单元测试。

[回到页面上方](#overview)

<a name="coverage"></a>
## 代码覆盖率
使用[`Blanket.js`] [4]检查代码覆盖率。

[回到页面上方](#overview)

<a name="ref"></a>
## 参考文献
[Nicholas11] Nicholas C. Zakas. Professional JavaScript for Web Developers, 3rd Edition. 2011. Wrox. 978-1-118-22219-5

[回到页面上方](#overview)

[1]: http://nodejs.org  "Node.js"
[2]: http://requirejs.org   "require.js"
[3]: http://mochajs.org/ "Mocha.js"
[4]: http://blanketjs.org "Blanket.js"
