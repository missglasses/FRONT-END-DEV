//adds ? in param to tell ts that param is allowed to be undefined

function proclaim(status?: string) { //here <- var? :type
  console.log(`I'm ${status || 'not ready...'}`);
}
