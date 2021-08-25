function initial() {
  console.log("Initial Loaded..");
}
function add(a, b) {
  return a + b;
}

function sub(a,b){
  return b-a;
}

initial();

const sum = add(1, 2);
const subtraction = sub(5,8);
console.log('sum ...', sum);
console.log('subtract ...', subtraction);
