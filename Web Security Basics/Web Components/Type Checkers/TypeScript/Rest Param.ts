// allows a function to accept an indefinite number of arguments as an array

function addPower(p:number, ...numsToAdd:number[]):number{ //var:dt, ... var:dt[]): dt
  let answer = 0; 
  for(let i = 0; i < numsToAdd.length; i++){
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

addPower('a string', 4, 5, 6); //will generate error @tsc
