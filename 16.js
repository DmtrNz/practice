function basicOp(operation, a, b){
    switch (operation) {
           case "+":
               return a + b;
           case "-":
               return a - b;
           case "*":
               return a * b;
           case "/":
               return a / b;
     }
   }
/* Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.*/