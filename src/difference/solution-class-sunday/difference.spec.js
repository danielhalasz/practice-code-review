import { difference } from './difference.js';

describe('checks arrays of different elements', () => {
  it('arrays of different strings', () => {
    const actual = difference(['hello', 'thank you', 'bye'], ['hello', 'bye']);
    expect(actual).toEqual(['thank you']);
  });
  it('arrays of different numbers', () => {
    const actual = difference([3, 5, 7, 9], [5, 7, 9, 11]);
    expect(actual).toEqual([3]);
  });
  it('mixed arrays of strings, numbers, booleans', () => {
    const actual = difference(
      ['hello', true, false, 0, 1, 2],
      ['hello', false, 1, 2],
    );
    expect(actual).toEqual([true, 0]);
  });
});

describe('checks arrays which include repeating elements', () => {
  it('arrays of strings including repeating', () => {
    const actual = difference(
      ['hello', 'hello', 'thank you', 'goodbye'],
      ['hi', 'thank you', 'bye'],
    );
    expect(actual).toEqual(['hello', 'goodbye']);
  });
  it('arrays of numbers including repeating', () => {
    const actual = difference([3, 3, 5, 5, 7, 9], [5, 7, 9]);
    expect(actual).toEqual([3]);
  });
  it('arrays of values of different types including repeating', () => {
    const actual = difference(
      ['hello', null, null, true, true, false, false, 1, 1, 2],
      [null, false, 1, 2, 'hello'],
    );
    expect(actual).toEqual([true]);
  });
});

describe('testing edge cases', () => {
  it('empty arrays', () => {
    const actual = difference([], []);
    expect(actual).toEqual([]);
  });
  it('empty second array', () => {
    const actual = difference([1, 2, 'hello', 'goodbye'], []);
    expect(actual).toEqual([1, 2, 'hello', 'goodbye']);
  });
  it('empty first array', () => {
    const actual = difference([], ['hello', 'thank you', 1, 2, 3]);
    expect(actual).toEqual([]);
  });
  it('arrays with undefined', () => {
    const actual = difference(
      [null, undefined, true, false, 2],
      ['yes', undefined, true, false],
    );
    expect(actual).toEqual([null, 2]);
  });
  it('arrays with 0 and null', () => {
    const actual = difference([0, 1, 2, true], [null, 2, true]);
    expect(actual).toEqual([0, 1]);
  });
});
