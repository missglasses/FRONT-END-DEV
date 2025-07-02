//Arrays

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

const hobbies = ['eat','sleep','repeat']

console.log(hobbies);//prints [ 'eat', 'sleep', 'repeat' ]

//Access an element
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

// const listItem = famousSayings[2];

console.log(famousSayings[2]);

//Update element
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

//Let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo'];

console.log(condiments);

utensils[3] = 'Spoon';

console.log(utensils);

//to count length of elements: console.log(objectives.length);

//Add elements using .push()
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('ligo sa kanding', 'ligo yourself');

console.log(chores);

//.pop()
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

// last element and store it in a variable
const removed = chores.pop();

console.log(chores); 
// ['wash dishes', 'do laundry', 'take out trash', 'cook dinner']

console.log(removed); 
//'mop floor'

//Array methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift(); //removes element @first
console.log(groceryList); 

groceryList.unshift('popcorn'); //unshift() adds element @first
console.log(groceryList);

console.log(groceryList.slice(1, 4));  //1-4

console.log(groceryList);  //orig list

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex); //find index of pasta

//Array and functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept); 

function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept); //[ 'arrays', 'can', 'be', 'MUTATED' ]
console.log(concept); //[ 'arrays', 'can', 'be' ]



