<a name="overview"></a>
# Overview of `Algo.js`

This overview describes how I organize the files, and how to name the variables.

* [File Structure](#file)
* [Initial Filename and Its Meaning](#initial)
* [Filename and So-called Namespace](#namespace)
* [Private and Public Member](#member)
* [Instance and Static](#static)
* [Variable Name](#var)
* [lower and Upper](#lower)
* [Error Message](#error)
* [Unit Test](#ut)
* [Code Coverage](#coverage)
* [References](#ref)

<a name="file"></a>
## File Structure
The implementation of one Class may be separated into different files, with the same initial file name, 
for instance `sorting.js`, `sorting.quickSort.js` and `sorting.mergeSort.js`. 
These three files implement the class named `Sorting`. In `sorting.quickSort.js`, 
there is a comment `// using sorting.js`, 
which means the `sorting.quickSort.js` is dependent on `sorting.js`. 
However, we have to add following lines into `index.html` manually:
```HTML
script src="sorting.js"
script src="sorting.quickSort.js"
```

Usually, if we have `basic.js`, `basic.extendOne.js` and `basic.extendTwo.js`, 
that means `basic.js` is the basic file of other two files, these two files are dependent on `basic.js`. 
Meanwhile, `basic.extendOne.js` and `basic.extendTwo.js` are two branches of the extension.

I will try to make this (using namespace, or import package) dynamicly one day, 
like `require()` in [`Node.js`] [1] or [`RequireJS`] [2]. 
Or I will merge them into one file using `grunt-contrib-uglify`.

[Back to top](#overview)

<a name="initial"></a>
## Initial Filename and Its Meaning

 Filename | Meaning
:-----|:-------
 `t.*.js` | Encapsulation of the structure type, like `LinkedList`, `Stack`, etc 
 `x.*.js` | Extensions of the current object, like `x.array.js` 
 `sorting.*.js` | Implementation of sorting algorithm 

[Back to top](#overview)

<a name="namespace"></a>
## Filename and So-called Namespace
`sorting.js`
`sorting.quickSort.js`, `sorting.mergeSort.js`

Our files are named like `sorting.quickSort.js` instead of `sorting.quick_sort.js` or `Sorting.QuickSort.js`. 

[Back to top](#overview)

## Private and Public Member
All members of class named by lowercase, and we have two types of private member: `member` and `__member__`.

* `member` is a private member which we can only access it inside the function closure. 
* `__member__` is a so-called private member, which we can access it as a public one actually, 
   but please __DO NOT__ call it directly.

We should place all private members under `// ***** private members *****` .

We have one type of public member: `member` by lowercase withoud any underscore.

For instance, there are two files: `f1.js` and `f2.js`
```JavaScript
// f1.js
(function(X, undefined){
    function _func1(){};

    X.__func2__ = function(){};

    X.func3 = function(){};
}(window.X = window.X || {}));
```

```JavaScript
// f2.js
(function(X, undefined){
    function func1(){};

    X.func3 = function(){
        // call X.__func2__
    };
}(window.X = window.X || {}));

// X.func1() is not accessible outside.
```

This coding way is inspired by "The constructor pattern defines instance properties,
whereas the prototype pattern defines methods and shared properties." (see [Nicholas11](#ref) page 197)

[Back to top](#overview)

<a name="static"></a>
## Instance and Static
All classes named by Capital letter initilized, no matter public or nested private.

We have Point objects constructed by `new Math.Point()`, 
we also have static class Point, which we access its static member by `Math.Point.member()`.

__DO NOT__ forget using `new` to construct the object.

[Back to top](#overview)

<a name="var"></a>
## Variable Name
Here are some name specification:

 Variable name | Meaning
:-----|:-------
`$pt` | the short for prototype, like `$arr = Array.prototype` 
 `_` | the short for 'this' in function, like `function(){var _ = this;};` 
 `*`compare | a function which returns negative, 0 and positive number for comparison, 
 it is `(x, y) => x - y` by default

[Back to top](#overview)

<a name="lower"></a>
## lower and Upper
Only when we get to the function level, we use lowercase, otherwise, we describe the Object by Uppercase.

[Back to top](#overview)

<a name="error"></a>
## Error Message
```JavaScript
'All error messages should not end by any symbol'
```
So that, we can `join` a error list, and end a dot by ourselves.

[Back to top](#overview)

<a name="ut"></a>
## Unit Test
Unit test runs under [`Mocha`] [3].
To see the result of unit test for Algo.js, just run `qunit.html` in your `Firefox 22.0+`
([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Browser_compatibility)).

[Back to top](#overview)

<a name="coverage"></a>
## Code Coverage
Code coverage runs under [`Blanket.js`] [4].
To see the result of code coverage for unit test, just run `grunt test` and check the result in `coverage.html`. 

[Back to top](#overview)

<a name="ref"></a>
## References
[Nicholas11] Nicholas C. Zakas. Professional JavaScript for Web Developers, 3rd Edition. 2011. Wrox. 978-1-118-22219-5

[Back to top](#overview)

[1]: http://nodejs.org  "Node.js"
[2]: http://requirejs.org   "require.js"
[3]: http://mochajs.org/ "Mocha.js"
[4]: http://blanketjs.org "Blanket.js"
