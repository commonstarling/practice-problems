/*
Output - boolean (whether a string has unique characters)
Input - string
Constraints - none
Edge Cases:
  string with no length - false
  non-string argument - throw an error

Examples
  - 'abc' => true
  - 'aabc' => false
  - '' => false
  - ['a', 'b', 'c'] => false
*/

const isUnique = (str) => {
  //If the argument is not a string
  if (typeof str !== 'string') {
    //Throw an error
    throw Error('Argument is not a string');
  }
  //If the argument doesn't have a length
  if (!str.length) {
    //Return false
    return false;
  }
  //If the argument has a length of 1
  if (str.length === 1) {
    //Return true
    return true;
  }
  //Create an object literal that will track letters in the string
  const letterTracker = {};
  //Loop through the letters in the string
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    //If the letter does not exist as a key in the tracking object
    if (!letterTracker[currentLetter]) {
      //Set it as a key in the tracking object
      letterTracker[currentLetter] = true;
    //Else
    } else {
      //Return false
      return false;
    }
  }
  //Return true if we've exited the loop without returning false
  return true;
};