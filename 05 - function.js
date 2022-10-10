const arrowFunc = () => {
  console.log("Arrow function");
};

function normalFunction() {
  console.log("Normal Function")
}

arrowFunc();
normalFunction();

const sum = (a, b = 10) => {
  return a + b;
};

console.log(sum(10));
console.log(sum(10, 20));
