# Output - boolean (whether a string has unique characters)
# Input - string
# Constraints - none
# Edge Cases:
#   string with no length - false
#   non-string argument - throw an error

# Examples
#   - 'abc' => true
#   - 'aabc' => false
#   - '' => false
#   - ['a', 'b', 'c'] => false

def isUnique (str)
  # If the argument is not a string
    # Throw an error
  # If the argument doesn't have a length
    # Return false
  # If the argument has a length of 1
    # Return true
  # Create an object that will track letters in the string
  # Loop through the letters in the string
    # If the letter does not exist as a key in the tracking object
      # Set it as a key in the tracking object
    # Else
      # Return false
  # Return true if we've exited the loop without returning false