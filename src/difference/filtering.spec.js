import { filtering } from './filtering.js';

describe('filtering unwanted values', () => {
  it('values of strings', () => {
    const array = ['apple', 'chair', 'banana', 'strawberry', 'table'];
    const values = ['chair', 'table'];
    const actual = filtering(array, values);
    expect(actual).toEqual(['apple', 'banana', 'strawberry']);
  });
  it('values of numbers', () => {
    const array = [2, -3, 48];
    const values = [-48, 3, 2];
    const actual = filtering(array, values);
    expect(actual).toEqual([-3, 48]);
  });
  it('values of different types', () => {
    const array = [undefined, null, 0, 21, '', 'hello', true];
    const values = ['', false, true];
    const actual = filtering(array, values);
    expect(actual).toEqual([undefined, null, 0, 21, 'hello']);
  });
});
describe('filtering duplicated values', () => {
  it('removes duplicating values', () => {
    const array = ['apple', 'chair', 'apple', 'strawberry', 'table'];
    const values = ['chair', 'table'];
    const actual = filtering(array, values);
    expect(actual).toEqual(['apple', 'strawberry']);
  });
});
describe('has no side-effects', () => {
  it('returns a new array', () => {
    const arg = [];
    const returned = filtering(arg);
    const areDifferent = arg !== returned;
    expect(areDifferent).toEqual(true);
  });
  it('does not modify the argument', () => {
    const arg = [3, 2, 1];
    const values = [2];
    filtering(arg, values);
    expect(arg).toEqual([3, 2, 1]);
  });
});
