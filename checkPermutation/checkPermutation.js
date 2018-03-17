/*
checkPermuation - given 2 strings check if one is a permutation of another

output - boolean saying whether one string is a permutation of the other
input - two strings
constraints/complexity - O2(n)
edge cases -
  if any input is not a string => throw an error
  different cases => 'L' === 'l'
  white space => included in our calcuation
examples -
  'abc' and 'cab' => true
  'car' and 'taxi' => false
  'car' and 'cars' => false
  '' and 'cars' => false
  true and 'car' => Error: non-string input
*/

// Create a letter sorting function
const letterSorter = (a, b) => {
  return a.charCodeAt(0) - b.charCodeAt(0);
};

const checkPermuation = (str1, str2) => {
  // If any input is not a string
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    // Throw an error
    throw Error('Invalid input: not a string');
  }
  // Create variables that hold the length of each argument
  const str1Length = str1.length;
  const str2Length = str2.length;
  // If str1's length is not equal to str2's length
  if (str1Length !== str2Length) {
    // Return false
    return false;
  }
  // Turn the strings into sorted arrays
  str1 = str1.toLowerCase().split('').sort(letterSorter);
  str2 = str2.toLowerCase().split('').sort(letterSorter);

  // Loop through the letters in the first array
  for (let i = 0; i < str1Length; i++) {
    // If the current letter does not match the letter in the second array
    if (str1[i] !== str2[i]) {
      // Return false
      return false;
    }
  }
  // Return true if we've completed the loop
  return true;
};