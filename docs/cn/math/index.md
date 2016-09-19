<a name="math"></a>
# `Math`包扩展
对 `JavaScript`中的`Math`做了扩展。

#### `tango.math.mod(i, n): number`
返回一个非负数$$x$$，满足$$i = k * n + x, (x \in [0, n))$$。
#### `tango.math.range(start = 0, end, step = 1): []`
返回一个步长为$$\text{step}$$的有序序列，构成的区间为$$\left[\text{start}, \text{end}\right)$$。
该区间为左闭右开。
#### `tango.math.randomInteger(a = 0, b): number`
返回一个随机整数$$x$$，满足$$ a \leq x \leq b $$。

<!--[Back to top](#math)-->
