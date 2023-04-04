'use strict'
const recursionPattern = (int1, int2) => {
 const newArr = [];

  const recurse = (num) => {
    if (num < 0) {
      newArr.push(num + int2);
      recurse(num + int2);
    } else if (num <= int1) {
      newArr.push(num);
      recurse(num - int2);
    }
  };

  recurse(int1);

  return newArr;
};

console.log(recursionPattern(16, 5)); // [16, 11, 6, 1, -4, 1, 6, 11, 16]
console.log(recursionPattern(50, 9)); // [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]