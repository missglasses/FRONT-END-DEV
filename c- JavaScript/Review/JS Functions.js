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
