"""
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
"""

def is_unique(text):
  # If the argument is not a string
  if type(text) != str:
    # Throw an error
    raise ValueError('Argument is not a string')
  # If the argument doesn't have a length
  if not text or text.isspace():
    # Return false
    return False
  # If the argument has a length of 1
  if len(text) == 1:
    # Return true
    return True
  # Create a dictionary that will track letters in the string
  letter_tracker = {}
  # Loop through the letters in the string
  for letter in text:
    # If the letter does not exist as a key in the tracking object
    if not letter in letter_tracker:
      # Set it as a key in the tracking object
      letter_tracker[letter] = True
    # Else
    else:
      # Return false
      return False
  # Return true if we've exited the loop without returning false
  return True