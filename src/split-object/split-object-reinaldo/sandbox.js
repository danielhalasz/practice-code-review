import { splitObjectReinaldo } from './split-object-reinaldo.js';

const data = {
  a: { 0: '1' },
  b: { 1: '2' },
  c: { 2: '3' },
  d: { 3: '4' },
};

const myData = Object.keys(data).map((key) => {
  return data[key];
});

const hero = {
  name: 'Batman',
  city: 'Gotham',
};

console.log(Object.entries(hero));
