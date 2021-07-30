import { splitObject } from './split-object-JT.js';

describe('Splits an object into multiple objects with one key/value pair each.', () => {
  it('The new objects are returned in an array', () => {
    const arg = { name: 'robs', age: 25, tall: true, userName: 'sbor' };
    const expected = [
      { name: 'robs' },
      { age: 25 },
      { tall: true },
      { userName: 'sbor' },
    ];
    const actual = splitObject(arg);

    expect(actual).toEqual(expected);
  });
});
