//forEach()
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

//syntax: var.forEach(var => console.log('....{$var}'))
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`)) //prints all fruits

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

//map()
const secretMessage = animals.map(animal => animal[0]); // creates a new array that contains the first character of each string in the animals array

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(number => number / 100);

//filter()
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers =randomNumbers.filter(number => number <250);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word=>word.length>7);

//findIndex()
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => animal === 'elephant');

const startsWithS = animals.findIndex(animal => animal[0].toLowerCase()==='s');


//reduce()
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);






