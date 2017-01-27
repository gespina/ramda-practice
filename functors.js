const _ = require('ramda');
const F = require('pointfree-fantasy');
const RF = require('ramda-fantasy');
const map = F.map;
const compose = F.compose;
const Maybe = RF.Maybe;




// Exercise 1
// ==========
// Use _.add(x,y) and map(f,x) to make a function that increments a value inside a functor
console.log("--------Start exercise 1--------")
const ex1 = map(_.add(1), _.identity)


assertDeepEqual(_.identity(3), ex1(_.identity(2)))
console.log("passed!")





// Exercise 2
// ==========
// Use _.head to get the first element of the list
const xs = _.identity(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
console.log("--------Start exercise 2--------")


const ex2 = map(_.head)


assertDeepEqual(_.identity('do'), ex2(xs))
console.log("passed!")

// Exercise 3
// ==========
// Use safeGet and _.head to find the first initial of the user
const safeGet = _.curry(function(x,o){ return Maybe.of(o[x]) })
const user = {id: 2, name: ''}

console.log("--------Start exercise 3--------")
const ex3 = compose(map(_.head), safeGet('name'));
// const ex3 = safeGet('name');
//
console.log('Result: ', Maybe('A').getOrElse(), ex3(user).value);
//
assertEqual(Maybe('A').getOrElse(), ex3(user).value)
console.log("passed!")






// // Exercise 4
// // ==========
// // Use Maybe to rewrite ex4 without an if statement
// console.log("--------Start exercise 4--------")
//
// const ex4 = function(n) {
//   if(n){
//     return parseInt(n);
//   }
// }
//
//
// assertDeepEqual(Maybe(4), ex4("4"))
// console.log("passed!")




// TEST HELFERS
// =====================
function inspectIt(x){
  return (x.inspect && x.inspect()) || (x.toString && x.toString()) || x.valueOf(); //hacky for teachy.
}

function assertEqual(x,y){
  if(x !== y){ throw("expected "+x+" to equal "+y); }
}
function assertDeepEqual(x,y){
  if(x.val !== y.val) throw("expected "+inspectIt(x)+" to equal "+inspectIt(y));
}
