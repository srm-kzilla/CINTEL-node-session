const constData = "hey";

//cannot be changed, will throw an error
// constData = "hi";
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


// As compared to C++ code;
/**
 * C++ CODE
 * #include<iostream>
 * using namespace std;
 * int main(){
 * int a = 10;
 * char b = 'a';
 * cout<<a<<endl;           // OUTPUT: 10  [type: int]
 * cout<<b<<endl;           // OUTPUT: a  [type: char]
 * return 0;
 * }
 */