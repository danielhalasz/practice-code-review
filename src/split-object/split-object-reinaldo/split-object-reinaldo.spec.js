import { splitObjectReinaldo } from './split-object-reinaldo.js';

describe('creating an array of objects, from an object', () => {
  it('testing with numbers', () => {
    const actual = splitObjectReinaldo({ a: 1, b: 2, c: 3 });
    expect(actual).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
  });
  it('testing with different values', () => {
    const actual = splitObjectReinaldo({
      name: 'robs',
      age: 25,
      tall: true,
      userName: 'sbor',
    });
    expect(actual).toEqual([
      { name: 'robs' },
      { age: 25 },
      { tall: true },
      { userName: 'sbor' },
    ]);
  });
  it('testing with an empty object', () => {
    const actual = splitObjectReinaldo({});
    expect(actual).toEqual([]);
  });
});
