function bubbleSort(a, type = 'low', key) {
  let swapped;

  const hasKeyValue = _key => item => (_key ? item[_key] : item);
  const resolveKeyValue = hasKeyValue(key);

  do {
    swapped = false;
    for (let i = 0; i < a.length - 1; i++) {
      const condition =
        type === 'low'
          ? resolveKeyValue(a[i]) > resolveKeyValue(a[i + 1])
          : resolveKeyValue(a[i]) < resolveKeyValue(a[i + 1]);

      if (condition) {
        let temp = a[i];

        a[i] = a[i + 1];
        a[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  return a;
}

module.exports = {
  bubbleSort,
};
