# Difference

Write a function that removes specific values from an array. The values to remove are provided as a second array argument.

---

## Docstring

Here's a starter docstring for your solutions. Feel free to rewrite it if that helps you understand:

```js
/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */
```

> Docstring is adapted from [lodash's difference](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L6947)

# Difference: filtering

Write a function that removes specific values from an array. The values to remove are provided as a second array argument.

## Strategy

I chose to used built-in array method (filter method) to solve this challenge because they're easy to write code and nice to read.

## Implementation

I use function in filter method in order to inspect the values to remove.
array.filter((x) => !values.includes(x))
I use function in filter method in order to remove duplicates.
filteredArray.filter((value, index) => filteredArray.indexOf(value) === index,

## Use Cases

We can use it for an online shopping website. To inspect remaining goods after clients bought some goods.

## Inspiration

I found filter method for removing duplicated values and removing unwanted values.

Removing duplicates;
https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31

Removing unwanted values;
https://stackoverflow.com/questions/1187518/how-to-get-the-difference-between-two-arrays-in-javascript

<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
