/*
checkPermuation - given 2 strings check if one is a permutation of another

output - boolean saying whether one string is a permutation of the other
input - two strings
constraints/complexity - O2(n)
edge cases -
  if any input is not a string => throw an error
examples -
  'abc' and 'cab' => true
  'car' and 'taxi' => false
  'car' and 'cars' => false
  '' and 'cars' => false
  true and 'car' => Error: non-string input
*/

const checkPermuation = (str1, str2) => {
  // Create variables that hold the length of each argument
  const str1Length = str1.length
  const str2Length = str2.length
  // If any input is not a string
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    // Throw an error
    throw Error('Invalid input: not a string');
  }
  // If str1's length is not equal to str2's length
  if (str1Length !== str2Length) {
    // Return false
    return false;
  }
  // Loop through the letters in str1
  for (let i = 0; i < str1Length; i++) {
    // Create a variable representing the current letter
    const currentLetter = str1[i];
    // If str2 doesn't have the current letter
    if (str2.indexOf(currentLetter) === -1) {
      //Return false
      return false;
    }
  }
  //Return true if we've exited the loop
  return true;
};