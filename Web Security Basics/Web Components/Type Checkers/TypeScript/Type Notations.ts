function triple(value: number) {
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`); //in param: 'var:type'
}
// then $ tsc
greetTripled('Hiya',5);
