This package is meant to count how many of given elements exists in a given array.

You must import the package and then use it like this:

```js
const arrayCount = require("@romulorod/array-count");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arrayCount(array, 5);

console.log(result); // 1
```

This function can also be used with strings:

```js
const arrayCount = require("@romulorod/array-count");

const array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const result = arrayCount(array, "a");

console.log(result); // 1
```

It will also work with nested arrays:

```js
const arrayCount = require("@romulorod/array-count");

const array = [
	[1, 2, 3],
	[4, 5, [2, 2]],
	[7, 8, 9],
	[10, 11, 2],
];

const result = arrayCount(array, 2);

console.log(result); // 4
```
