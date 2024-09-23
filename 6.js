function countSheeps(sheep) {
    sheep[i] !== null && sheep[i] !== undefined ? sheep[i]===true : sheep[i]===false;
    const number = sheep.length;
    return number;
  }
  
  function countSheeps(sheep) {
    let count = 0; // Initialize a counter for present sheep
    for (let i = 0; i < sheep.length; i++) {
      if (sheep[i] === true) { // Check if the sheep is present
        count++; // Increment the counter if present
      }
    }
    return count; // Return the total count of present sheep
  }

/* Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array (true means present).
Hint: Don't forget to check for bad values like null/undefined*/