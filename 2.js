function removeEveryOther(arr){
    return arr.filter((_, index) => index % 2 === 0);
} /*Take an array and remove every second element from the array. 
Always keep the first element and start removing with the next element.*/