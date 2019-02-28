const arrayUtils = require('../array');

describe('array', () => {
  test('bubbleSort, single values', () => {
    expect(
      arrayUtils.bubbleSort([123123, 2, 6, 2, 8, 452, 31, 66, 11]),
    ).toEqual([2, 2, 6, 8, 11, 31, 66, 452, 123123]);
  });
  test('bubbleSort, object key values', () => {
    expect(
      arrayUtils.bubbleSort(
        [{ val: 123 }, { val: 99 }, { val: 1 }, { val: 0 }],
        'high',
        'val',
      ),
    ).toEqual([{ val: 123 }, { val: 99 }, { val: 1 }, { val: 0 }]);
  });
});
