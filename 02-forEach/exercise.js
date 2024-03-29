// 01 - Convert the following for loop to a forEach call on the array

// Create the array
const flavors = ['chocolate', 'ginger', 'carrot', 'coffee', 'walnut', 'banana'];

// Create the for loop
for (let i = 0; i < flavors.length; i++) {
  console.log('I like ' + flavors[i] + ' cake');
}
// my code
flavors.forEach((flavor, index, array) => {
  console.log(flavor, index, array);
});
console.log(flavors);

// 02 - Convert the following for loop to a forEach call on the array

const numbers = [2, 4, 6, 8];

for (let i = 0; i < numbers.length; i++) {
  console.log('The number', numbers[i], 'is at index', i);
}
//my code
numbers.forEach((number, index) => {
  console.log('The number', number, 'is at index', index)
});
console.log(numbers);

// 03 - Convert the following for loop to a forEach call on the array

const evenNumbers = [2, 4, 6, 8, 10];

for (let i = 0; i < evenNumbers.length; i++) {
  evenNumbers[i] = evenNumbers[i] * 2;
}
//mycode
evenNumbers.forEach(evenNumber => {
  evenNumber *= 2;
})
console.log(evenNumbers);

// 04 - Log the name of each product to the page with a forEach call on the products array

let products = [{
  name: 'Running shoes',
  price: 75
}, {
  name: 'Golf shoes',
  price: 85
}, {
  name: 'Dress shoes',
  price: 95
}, {
  name: 'Walking shoes',
  price: 65
}, {
  name: 'Sandals',
  price: 55
}];

products.forEach(product => {
  console.log(product.name);
})
products