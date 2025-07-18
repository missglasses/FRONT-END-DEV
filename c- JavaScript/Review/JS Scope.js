
//Blocks and Scope
const city = 'New York City';

function logCitySkyline() {

  let skyscraper = 'Empire State Building';
  

  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

//Global Scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

//BLock Scope
const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
   console.log(lightWaves); 
}

logVisibleLightWaves();

console.log(lightWaves);

//Scope ppollution
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  
	stars = 'Sirius'; 
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars); 

