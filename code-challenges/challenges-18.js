'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    const words = str.split(' ');
    const middleWord = words[Math.floor(words.length / 2)];
    return middleWord.length;
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
  const repeatStr1 = {};
  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    repeatStr1[letter] = (repeatStr1[letter] || 0) + 1;
  }
  const repeatStr2 = {};
  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    repeatStr2[letter] = (repeatStr2[letter] || 0) + 1;
  }
  for (const letter in repeatStr1) {
    if (repeatStr1[letter] !== repeatStr2[letter]) {
      return false;
    }
  }
  for (const letter in repeatStr2) {
    if (repeatStr2[letter] !== repeatStr1[letter]) {
      return false;
    }
  }
  return true;
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };