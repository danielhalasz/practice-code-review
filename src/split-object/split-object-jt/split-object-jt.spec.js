import { splitObject } from './split-object-jt.js';

describe('Splits an object into multiple objects with one key/value pair each.', () => {
  it('The new objects are returned in a new array of key/values pairs', () => {
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
  it('The new objects are placed in the same order', () => {
    const arg = { a: 1, b: 2, c: 3 };
    const expected = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const actual = splitObject(arg);
    expect(actual).toEqual(expected);
  });
});

describe('Testing diferent arguments', () => {
  it('just numbers', () => {
    const arg = { 1: 2, 4: 5, 8: 9 };
    const expected = [{ 1: 2 }, { 4: 5 }, { 8: 9 }];
    const actual = splitObject(arg);
    expect(actual).toEqual(expected);
  });
  it('just strings', () => {
    const arg = { a: 'z', b: 'y', c: 'x' };
    const expected = [{ a: 'z' }, { b: 'y' }, { c: 'x' }];
    const actual = splitObject(arg);
    expect(actual).toEqual(expected);
  });
  it('strings and booleans', () => {
    const arg = { a: true, b: false, c: true };
    const expected = [{ a: true }, { b: false }, { c: true }];
    const actual = splitObject(arg);
    expect(actual).toEqual(expected);
  });
  it('testing with an empty object', () => {
    const arg = {};
    const actual = splitObject(arg);
    expect(actual).toEqual([]);
  });
});

describe('Testing for side-effects', () => {
  it('Returns a new array', () => {
    const arg = {};
    const returned = splitObject(arg);
    const areDifferent = arg !== returned;
    expect(areDifferent).toEqual(true);
  });
  it('The argument object is not modified', () => {
    const arg = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' };
    splitObject(arg);
    expect(arg).toEqual({ 1: 'a', 2: 'b', 3: 'c', 4: 'd' });
  });
});
