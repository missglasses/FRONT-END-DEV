
//for loops asc and desc
for (let counter = 5; counter <=10; counter++){
  console.log(counter); 
/*5
6
7
8
9
10*/
}

for (let counter2 = 3; counter2 >=0; counter2--){
  console.log(counter2); 
/*
3
2
1
0
*/
}
//in array
const vacationSpots = ['Italy', 'Switzerland', 'England'];

for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}

// Nested loops with application
const bobsFollowers = ['Sypther', 'Rere', 'Martin'];

const tinasFollowers  = ['Emma', 'Sypther', 'Rere'];

const mutualFollowers= [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

//while loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard !== 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//do while
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

//break
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");







