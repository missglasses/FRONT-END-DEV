let point0 = {x:10, y: 20 };
let point1 = point0;    
let point2 = {};
Object.assign(point2, point0);  
console.log(point2.x);
console.log(point2.y);
console.log(point1 === point0); //t
console.log(point1 === point2); //f
