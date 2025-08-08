// parent obj(prototype)
const carProto = {
  drive() {
    return "Vroom!";
  }
};

// child
const myCar = {
  color: "red"
};

//set proto
Object.setPrototypeOf(myCar, carProto);

console.log(myCar.drive()); // "Vroom!" (inherited)
console.log(myCar.color);   // "red" (own property)
