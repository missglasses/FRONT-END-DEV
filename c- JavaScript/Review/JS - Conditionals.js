//If
let sale = true;
if(sale){
console.log('Time to buy!');
}

// sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}
//ex#2
let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}
//Logical Operations application
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
  
// let tool = ''; The pen is mightier than the sword.
//reassign:
let tool = 'marker'; //The marker is mightier than the sword.

//  short circuit evaluation to assign : ||
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);
}
//ternary operator
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect? console.log(
'Correct!'): console.log('Incorrect!');


let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//switch
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}


