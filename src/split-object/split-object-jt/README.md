# Split-Object: .

Split an object into an array of objects.
Each entry in the array will be one key/value pair from the object.

```js
/**
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * This function has no side-effects, the argument object is not modified
 *
 * @param {Object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 * @example
 *
 * splitObject({ a: 1, b: 2, c: 3 });
 * // -> [{ a: 1 }, { b: 2 }, { c: 3 }]
 *
 * @example
 *
 * splitObject({ name: 'robs', age: 25, tall: true, userName: 'sbor' });
 * // -> [{ name: 'robs }, { age: 25 }, { tall: true }, { userName: 'sbor' }]
 *
 * @example
 *
 * splitObject({});
 * // -> []
 */
```

## Strategy

1. Create a new array to store the objects key/value pairs.
2. Loop for iterating the keys of the argument object.
3. Mapping the objects key/value,
4. Push the mapped key values(key/value) as an object into the newArray.

## Implementation

- for of
- Object.keys()
- .map()
- .push()

## Use Cases
I think that it is very useful to separate the array object into an array of objects because it makes data more accesible to manipulate it.
If we state that each array is a 'profile card' of a real object or a person, then we could use it later for comparing or finding common information between different arrays and then manipulate data more easy. Maybe we want to compare which countries has visited X person and Y person or comparing who is the youngest, etc...

```js
const splitObject = (toSeparate = {}) => {
  const arr1 = Object.keys(toSeparate);
  const arrObj = arr1.map(function (key) {
    return { [key]: toSeparate[key] };
  });
  return arrObj;
};

const arg = { name: 'Evan', age: undefined, country: 'U.S.A.' };
console.log(splitObject(arg));
```



## Inspiration

- This article was useful [Dimitri Pavlutin](https://dmitripavlutin.com/access-object-keys-values-entries/)
- This article from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) too for my other solution of the same problem :D

<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
