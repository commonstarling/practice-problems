"""
Replace all spaces in a string with '%20'

output - string with spaces replaced with '%20'
input - string
constraints - O(n)
examples - 'John Smith     ' => 'John%20Smith'
edge cases
  non-string input => throw an error
  all spaces in a string => return empty string
  more than one space between words => handle them accordingly
"""
import re

def urlify(inputString):
  # If input is not a string
  if type(inputString) != str:
    # Raise an error
    raise ValueError('Input is not a string')
  # Return RegEx expression that replaces spaces in the string (which has been stripped)
  return re.sub(" ", '%20', inputString.strip())
