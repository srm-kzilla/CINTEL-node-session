const constData = "hey";

//cannot be changed, will throw an error
// data = "hi";
console.log(constData);

let letData = "hi";

console.log(letData);

letData = 10;

console.log(letData);

var varData = "hello";

console.log(varData);

varData = 10;

console.log(varData);

// var allows redeclaration, let doesn't
var varData = "ok";
// let letData = "not ok";

const testArr = [1, 3, 4];
var i;
for (i = 0; i < testArr.length; i++) {
  // var will print undefined
  setTimeout(() => console.log(testArr[i]), 100);
}
