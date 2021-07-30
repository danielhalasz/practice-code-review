import { splitObject } from './split-object-jt.js';

const superRaw = { name: 'robs', age: 25, tall: true, userName: 'sbor' };

console.log(splitObject(superRaw));
console.log(splitObject({ A: 1 }));

///

// const toSeparate = {
//   name: 'robs',
//   age: 25,
//   tall: true,
//   userName: 'sbor',
// };

// console.log(toSeparate);

// let arr = Object.keys(toSeparate);
// console.log(arr);

// let arrObj = arr.map(function (key) {
//   return { [key]: toSeparate[key] };
// });

// console.log(arrObj);

// ////

// const toSeparate = {
//   name: 'robs',
//   age: 25,
//   tall: true,
//   userName: 'sbor',
// };

// const newArray = [];
// for (const key of Object.keys(toSeparate)) {
//   newArray.push({ [key]: toSeparate[key] });
// }

// console.log(newArray);
