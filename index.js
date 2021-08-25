function initial() {
  console.log("Initial Loaded..");
}
function add(a, b) {
  return a + b;
}

function sub(a,b){
  return b-a;
}
function concatText(a,b){
   return `${a} ${b}`;
}

initial();

const sum = add(1, 2);
const subtraction = sub(5,8);
const concatedText = concatText("Hello","World");
console.log('sum ...', sum);
console.log('subtract ...', subtraction);
console.log('concatedText', concatedText);
