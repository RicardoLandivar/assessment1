// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y;
}
let resultDivide = divide(10, 2);
console.log(resultDivide);

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return x + y / 2;
}
let resultAverage = average(10, 2);
console.log(resultAverage);
// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y, epsilon) {
  if (epsilon == null) {
    epsilon = 0.001;

  }
  return Math.abs(x-y) < epsilon;

};
console.log(approximatelyEqual(10.001, 10));

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
return firstName + '' + lastName;

}
let theFullName = fullName('John', 'Doe');
console.log(theFullName);
// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  return person + "was drinking" + beverage + "at" + location;


}
let funnySentence = generateSentence('Kay', 'coffee', 'the local cafe');
console.log(funnySentence);

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {
  let newString = string.replace("a", "*");
  newString = string.replace("i", "*")
    return newString;
 
}

let censored = censorVowels("javascript");
console.log(censored);

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {
let newStr = string.replace("e", "E")
return newStr;

}

let superSticky = stickyCase("hello world");
console.log(superSticky);


// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
