// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
let numbers = [1, 2, 3, 11, 12, 13];
function greaterThanTen(numbers) {
  return numbers.filter(function(number) {
    return number > 10;}
  )};
let finalNumbers = greaterThanTen(numbers);
console.log(finalNumbers)
// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
let words = ['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pearl'];
function bWords(words) {
  return words.filter(function(word) {
    return word.startsWith('b');
    
  });
  }
  
  
  let finalWords = bWords(words);
console.log(finalWords)


// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
let originalArray = [1, 2, 3];
let additionalItems = [4, 5, 6];
function extend(originalArray) {
  originalArray.push(4, 5, 6);
  return originalArray;
}
let extendedNumbers = extend(originalArray);
console.log(extendedNumbers)

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
let theseItems = ['a', 'bbb', 'cccc', 'dddddd', 'eee']
function itemsWithLength(theseItems) {
return theseItems.filter(item => item.length === 3);
  
}
let onlyItemWithLengthOfThree = itemsWithLength(theseItems);
console.log(onlyItemWithLengthOfThree)

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
basicArray = ['a', 'b', 'c', 'd', 'e'];
function everyOtherItem(basicArray) {
  return basicArray.filter((_, index) => index % 2 === 0);

}
const result = everyOtherItem(basicArray);
console.log(result)

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(wordList, letter) {
const finalResults = [];
wordList.forEach((word, index) => {
  if (word.charAt(0).toLowerCase() === letter.toLowerCase()) {
    finalResults.push(index);
  }
});

return finalResults;
}
const theseWords = ['apple', 'banana', 'kiwi', 'pear', 'bacon'];
const thisLetter = 'b';
const indexes = findWordsStartingWith(theseWords, thisLetter);
console.log(indexes)
// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(mItems, n) {
  const sortedArray = mItems.sort((a,b) => a-b);
  const nSmallest = sortedArray.slice(0, n).reverse();
  return nSmallest;

}
const mItems = [1, 30, 4, 21, 100000]
const n = 3;
const theNAnswer = smallestNItems(mItems, n);
console.log(theNAnswer)

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  for (let i = 0; i < items.length; i++)
{
if (items[i] === value) {
  return i;
}
}
return undefined;
}
const items = ['a', 'b', 'c', 'a', 'b', 'c'];
const findThisOne = 'c';
const whatIstheAnswer = findIndex(items, findThisOne);
console.log(whatIstheAnswer)

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  const whatWeWant = [];
  for (let i = start; i<= stop; i++) {
    whatWeWant.push(i);
  }
  return whatWeWant;
}
let startedAndStopped = range(1, 5);
console.log(startedAndStopped)

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
