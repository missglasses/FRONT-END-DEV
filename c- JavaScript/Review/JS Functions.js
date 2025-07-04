//Func declaration

getReminder();

function getReminder(){
  console.log('Water the plants.');
}

greetInSpanish();

function greetInSpanish(){
   console.log('Buenas tardes.');
}

//Func call
sayThanks; 
function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}

// call func here
sayThanks();
sayThanks();


//Params and args
//param here is name
function sayThanks(name) {
  console.log('Thank you for your purchase, '+ name + '! We appreciate your business.');
}

sayThanks('Cole');
//default params
function makeShoppingList(item1 ='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`); //the var = ' '
}

//return
function monitorCount(rows, columns){
  return rows*columns;
}

const  numOfMonitors =monitorCount(5,4);
console.log(numOfMonitors);


function monitorCount(rows, columns) {
  return rows * columns;
}
//Helper func 
function costOfMonitors(rows, columns){
  return  monitorCount(rows, columns)*200;
}
const  totalCost = costOfMonitors(5,4);
console.log(totalCost);

//function expressions 
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    
    return true;
  } else {
    return false;
  }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday')); 

//Arrow functions 
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
//conside body arrow functions
const plantNeedsWater = day => day === 'Wednesday';

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// assigning the function to a new variable 
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);//prints the name of original func

//func as param
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
const checkA = val+2;
const checkB = func(val);
}

  if (checkA === checkB) {            
    return checkB;             
  } else {
    return 'inconsistent results';  
  }
}

console.log(checkConsistentOutput(addTwo, 10));

