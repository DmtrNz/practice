function flickSwitch(arr) {
    let toggle = true; // Start with true
    return arr.map(item => {
      if (item === 'flick') {
        toggle = !toggle; // Toggle the boolean value
      }
      return toggle; // Return the current toggle state
    });
  }
  /*Create a function that always returns True/true for every item in a given list.
  However, if an element is the word 'flick', switch to always returning the opposite boolean value.
  "flick" will always be given in lowercase.
  A list may contain multiple flicks.
  Switch the boolean value on the same element as the flick itself.*/