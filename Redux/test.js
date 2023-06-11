function reducer(arr, callback, initialValue) {
  let startIndex = 0;
  if (!initialValue) {
    initialValue = arr[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < arr.length; i++) {
    console.log("Call i", i);
    initialValue = callback(initialValue, arr[i]);
    console.log("initialValue", initialValue);
  }
  return initialValue;
}

const list = [1, 2, 3, 4];

const a = list.reduce((a, b) => a + b);
console.log("aa", a);

const b = reducer(list, (a, b) => a + b);
console.log("b", b);
