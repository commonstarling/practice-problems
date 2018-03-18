/*
Replace all spaces in a string with '%20'

output - string with spaces replaced with '%20'
input - string
constraints - O(n)
examples - 'John Smith     ' => 'John%20Smith'
edge cases
  non-string input => throw an error
  all spaces in a string => return empty string
  more than one space between words => handle them accordingly
*/

const urlify = str => {
  //Return RegEx expression that replaces spaces in the string (which has been trimmed)
  return str.trim().replace(/\s/g, '%20');
};
