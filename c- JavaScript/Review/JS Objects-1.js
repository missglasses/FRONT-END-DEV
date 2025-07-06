//this()
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() { 
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';  //reassign
robot.recharge();


//Getter
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  
  get energyLevel() { //<----------
    if (typeof this._energyLevel === 'number') {
    return `My current energy level is ${this._energyLevel}`;
  } else {
    return 'System malfunction: cannot retrieve energy level';
    }
  }
};

console.log(robot.energyLevel);

//Setters
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,

  // Getter method
  get numOfSensors() {
    if (typeof this._numOfSensors === 'number') {
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.';
    }
  },

  set numOfSensors(num) { //<----
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};


robot.numOfSensors = 100;  

console.log(robot.numOfSensors);
//Shorthand:
const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

//assignment alt
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot; //references robot.functionality.
functionality.beep(); 

//built-in
const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);
console.log(robotKeys); // ['model', 'mobile', ...]

const robotEntries = Object.entries(robot);
console.log(robotEntries); // [['model', 'SAL-1000'], ...]

//clone snd extend
const newRobot = Object.assign({}, robot, {
  laserBlaster: true,
  voiceRecognition: true
});
console.log(newRobot); // { model: 'SAL-1000', ..., laserBlaster: true, ... }
