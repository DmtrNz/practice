function highAndLow(numbers) {
    // Split the string into an array of numbers, convert to integers
    const numArray = numbers.split(' ').map(Number);
    
    // Find the highest and lowest numbers
    const highest = Math.max(...numArray);
    const lowest = Math.min(...numArray);
    
    // Return the result as a formatted string
    return `${highest} ${lowest}`;
}

/* In this little assignment you are given a string of space separated numbers, and 
have to return the highest and lowest number.*/