// 01 - Define a function called getName that returns your name as a string.
function getName() {
    return 'HO'
}
  console.log(getName());
  // 02 - Define a function called greet that takes in 2 parameters:
  // getNameFn - a function that returns your name
  // greeting - a string greeting, e.g. 'Hello', 'Goodbye' etc.
  // The function should log `Some greeting, your-name-here` by invoking the getNameFn
  // Invoke your function several times with different greetings
function greet(getNameFn, greeting) {
    return `${getNameFn} ${greeting}`;
}

console.log(greet(getName(), 'isthe best !!!'));
  
  // 03 - Define a function called makeAdder that takes in 1 parameter:
  // number - any valid number
  // makeAdder should return a function that takes in 1 parameter:
  // other_number - any valid number
  // The returned function should return the sum of the two numbers

  
  // Example usage of makeAdder function

  function makeAdder(number) {
    return (number2) => {
       return number + number2;
    }
  }
  console.log(makeAdder(5)(10));

  