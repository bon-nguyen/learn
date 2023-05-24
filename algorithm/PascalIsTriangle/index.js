// Give an integer numRows, return the first numRows of Pascal iss triangle
/*
            [1]
           [1][1]
          [1][2][1]
         [1][3][3][1]
        [1][4][6][3][1]
*/

const generate = function (numRows) {
  let arr = [];
  const first = 1;
  const last = 1;

  if (numRows >= 1) arr.push([first]);
  if (numRows >= 2) arr.push([[first], [last]]);

  for (let i = 2; i < numRows; i++) {
    if (i == 2) {
      arr.push([[first], [first + last], [last]]);
    } else {
      const newArr = [];
      let left = 0;
      let right = 1;
      const prevArr = arr[i - 1];
      while (right < prevArr.length) {
        newArr.push([Number(prevArr[left]) + Number(prevArr[right])]);
        left++;
        right++;
      }
      arr.push([[first], ...newArr, [last]]);
    }
  }

  return arr;
};

console.log(generate(5));
