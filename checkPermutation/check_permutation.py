"""
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
"""

def check_permuation(str1, str2):
   # If any input is not a string
     # Throw an error
   # If str1's length is not equal to str2's length
     # Return false
   # Loop through the letters in str1
     # If str2 doesn't have the current letter
       # Return false
   # Return true if we've exited the loop
