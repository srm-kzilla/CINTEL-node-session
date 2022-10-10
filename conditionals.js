const age = '20';

if (age == 20) {
  console.log('Age is 20');
}

if (age === 20) {
  console.log('Age is 20');
} else {
  console.log('Age is not 20');
}

if (age === '20') {
  console.log('Age is 20');
} else if (age === 20) {
  console.log('Age is 20, but age is number');
} else {
  console.log('Age is not 20');
}

const alphabet = "a";

switch (alphabet) {
  case 'a':
    console.log('A');
    break;
  case 'b':
    console.log('B');
    break;
  default:
    console.log('Default case');
}

console.log(1 === 2 ? "true case" : "false case");
