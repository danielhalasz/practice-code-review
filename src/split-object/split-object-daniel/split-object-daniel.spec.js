import { splitObjectDaniel } from './split-object-daniel.js';

describe('Splits an object into multiple objects with one key/value pair each. Returns an array.', () => {
  it('base test with numbers', () => {
    const actual = splitObjectDaniel({ a: 1, b: 2, c: 3 });
    expect(actual).toEqual([{ a: 1 }, { b: 2 }, { c: 3 }]);
  });
  it('base test with mixed values', () => {
    const actual = splitObjectDaniel({ name: 'robs', age: 25, tall: true, userName: 'sbor' });
    expect(actual).toEqual([{
      name: 'robs'
    }, { age: 25 }, { tall: true }, { userName: 'sbor' }]);
  });
  it('base test with empty object', () => {
    const actual = splitObjectDaniel({});
    expect(actual).toEqual([]);
  });
  it('new test with object', () => {
    const actual = splitObjectDaniel({ name: 'rob', age: 5, color: 'blue', height: 150 });
    expect(actual).toEqual([{ name: 'rob' }, { age: 5 }, { color: 'blue' }, { height: 150 }]);
  });
  it('some keys have no value', () => {
    const actual = splitObjectDaniel({ name, age: 5, color: 'blue', height: 150 });
    expect(actual).toEqual([{ name }, { age: 5 }, { color: 'blue' }, { height: 150 }]);
  });
  it('some keys have boolean value', () => {
    const actual = splitObjectDaniel({ name: true, age: 5, color: 'blue', height: 150 });
    expect(actual).toEqual([{ name: true }, { age: 5 }, { color: 'blue' }, { height: 150 }]);
  });
  describe('testing for side-effects', () => {
    it('returns a new array', () => {
      const obj = { fruit: 'banana', isIt: 'cherry', color: 'avocado' };
      const arr = [{ fruit: 'mango' }, { isIt: 'cherry' }, { color: 'apple' }];
      const returnedArray = splitObjectDaniel(obj);
      const notTheSame = arr !== returnedArray;
      expect(notTheSame).toEqual(true);
    });
    it('object has not changed', () => {
      const obj = { fruit: 'banana', isIt: 'cherry', color: 'avocado' };
      splitObjectDaniel(obj);
      expect(obj).toEqual({ fruit: 'banana', isIt: 'cherry', color: 'avocado' });
    });
  });
});
