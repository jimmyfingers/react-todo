// function add(a, b){
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));
// var groupA = ['Jen', 'James'];
// var groupB = ['Tom', 'Chris'];
//
// var final = [...groupB,3, ...groupA];
//
// console.log(final);

var person1 = ['Andrew', 25];
var person2 = ['Jen', 29];

function greet(name, age){
  return 'Hi ' + name + ', you are ' + age + ' years old.';
}

console.log(greet(...person1));

var names = ['James', 'John'];
var final = ['Tom', ...names];

final.forEach(function(name){
  console.log('Hi ' + name);
});
