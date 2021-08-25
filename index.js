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

function modulus(a,b){
  return b%a;
}

initial();

const sum = add(1, 2);
const subtraction = sub(5,8);
const concatedText = concatText("Hello","World");
const mod = modulus(3,8);
console.log('sum ...', sum);
console.log('subtract ...', subtraction);
console.log('concatedText', concatedText);
console.log('modulus ...',mod);

