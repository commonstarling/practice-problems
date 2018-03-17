"""
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
"""

def check_permuation(str1, str2):
  # If any input is not a string
  if type(str1) != str or type(str2) != str:
    # Throw an error
    raise ValueError('Input is not a string')
  #If str1's length is not equal to str2's length
  if len(str1) != len(str2):
    # Return false
    return False;
  # Turn the strings into sorted lists with lowercase letters
  sorted_str1 = sorted(str1.lower())
  sorted_str2 = sorted(str2.lower())

  # Loop through the letters in the first list
  for index, val in enumerate(sorted_str1):
    # If the current letter does not match the letter in the same position in the second array
    if sorted_str1[index] != sorted_str2[index]:
      # Return false
      return False;
  # Return true if we've completed the loop
  return True;