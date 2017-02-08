// function add(a,b){
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd=[9,5];
//
// console.log(add(...toAdd));

// var groupA = ['jen', 'cory'];
// var groupB = ['vikram'];
//
// var final = [3,...groupA,...groupB];
//
// console.log(final);


var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function hi(name,age){
  return 'Hi '+name+' you are '+age;
}

console.log(hi(...personTwo));

var names = ['mike','ben'];
var final = ['jack',...names];
//loop over each name

  names.forEach(function(a){
    console.log('hi '+a)
  });
