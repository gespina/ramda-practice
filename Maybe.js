var R = require('ramda');
var Maybe = require('ramda-fantasy').Maybe

const maybeParse = x => {
  try{
    return Maybe.Just(JSON.parse(x))
  }catch(e){
    return Maybe.Nothing();
  }
}
const hasAge = x => x.age ? Maybe.of(x.age) : Maybe.Nothing()
const ageString = x => `You are ${x} years old`
// const getAgeFromString = x => maybeParse(x).chain(hasAge).map(ageString).getOrElse('oops')
const getAgeFromString = R.compose(R.filter(hasAge), maybeParse)

console.log(getAgeFromString('{"age":25}'))
console.log(getAgeFromString('{"bar":25}'))
console.log(getAgeFromString('foo'))
