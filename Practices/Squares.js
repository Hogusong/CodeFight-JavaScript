function squaresInRect(n, m){
  const n_arr = getDivArr(n);
  const m_arr = getDivArr(m);
  console.log(n_arr, m_arr)
  var value = 0;
  for (let e of n_arr) {
    if (m_arr.indexOf(e) >= 0 && e > value){
      value = e;
    }
  }
  if (value === 0) return 0;
  return (n/value * m/value)

}

function getDivArr(k){
  const set = new Set()
  for (let i=1; i<k/2; i++){
    if (k%i === 0){
      const x = k/i;
      if (i in set) break
      set.add(i)
      set.add(x)
    }
  }
  console.log(set)
  return Array.from(set).sort((a,b)=>a-b < 0)
  // return Array.from(set)
}

console.log(squaresInRect(56,24))

// const sqareNums = function(arr) {
//   return arr.filter(v => v%2 === 0)
// }

// let arr = [1,2,3,4,5,6];
// console.log(sqareNums(arr));
// console.log(arr.every(v=>v>5));
// console.log(arr.some(v=>v>5));

var Person = {
  getAge: function() {
    this.age = new Date().getFullYear() - this.birthYear
    return this.age
  }
};

const john = Object.create(Person);
john.name = 'John Smith';
john.birthYear = 1972;
console.log('Age is', john.getAge());

var years = [1990, 1965, 1945, 2001, 1997];
function arrayCalc(arr, fn) {
  var arrRes = [ ];
  for (var i=0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}
function calculateAge(e) {   return 2018 - e;  }
var ages = arrayCalc(years, calculateAge);
console.log(ages);
function isFullAge(e) {   	return calculateAge(e) >= 18;		}
var fullAges = arrayCalc(years, isFullAge);
console.log(fullAges);

function interview(job) {
  if (job === 'designer'){
    return (name) => console.log(name + ', can you please explain what UX design is?');
  } else if (job === 'teacher'){	
    return (name) => console.log('What subject do you teach, ' + name + '?');
  } else {  
    return (name) => console.log('Hello ' + name + ', what do you do?');
  }
}
var question = interview('designer');
question('James');
interview('')('Peter');                 		// function closure
interview('teacher')('Annie');         	// function closure

function generator(input) {
  var index = 0;
  return {
    next: () => (index < input.length) ? input[index++] : ""
  }
}
var mygenerator = generator("boomerang");
console.log(mygenerator.next()); 				// returns "b"
console.log(mygenerator.next()); 				// returns "o"

// function isFull(limit, age) { return age >= limit }
const isFull = (limit, age) => age >= limit;
var isFullJapen = isFull.bind(this, 20)
console.log(isFullJapen(19));
console.log(isFullJapen(21));

const young = {
  name: 'Young',
  birthYear: 1963,
  job: 'programmer'
}

const age = {
  age: 55
}

const annie = { name: 'Annie',  birthYear: 1961, age: 57 }

const person = Object.assign({}, young, age)
person.name = 'John Doe'
console.log(person)
console.log(young);
Object.assign(young, annie)
const keys = Object.keys(young)
const values = Object.values(young)
console.log(keys.concat(values))
console.log(!(young['name']))
const personJSON = JSON.stringify(person)
console.log(personJSON)
console.log(JSON.parse(personJSON))
console.log(young.hasOwnProperty('age'))
const abRE = /ab/     //  abRE = new RegExp('ab')
console.log(abRE.exec('asdfabasdf'))
console.log(abRE.exec('asdfacbasdf'))
console.log(abRE.exec('asdfabasdf').index)
console.log('asdfabasdf'.indexOf('ab'))
console.log('asd8as6As9asfg6as1df4'.replace(/\D/g, ''))
console.log('asd8as6As9asfg6as1df4'.replace(/\d/g, ''))
console.log('asd8as6As9asfg6as1df4'.replace(/[A,d,f, 0-9]/g, ''))
console.log('asd8as6As9asfg6as1df4'.replace(/A/gi, ''))
var arr = [ [1, 2], [3, 4], [5, 6], 7 ];
var flattenedArray = arr.reduce( (accumulator, currentValue) => {
   return accumulator.concat(currentValue);
}, [] );
console.log(flattenedArray)
var flattened = []
arr.forEach(el => { flattened = flattened.concat(el)} )
console.log(flattened)
arr = [7,4,8,2,0,9]
const newArr = arr.filter( el => el > 4)
console.log(newArr)

const sett = new Set()
sett.add(4).add(7).add('abc')
console.log(sett)

const set1 = new Set();
set1.add({x: 10, y: 20}).add({x: 20, y: 30});

// Delete any point with `x > 10`.
// set1.forEach(function(value){
//   if (value.x > 10) {
//     set1.delete(value);
//   }
// });
const iterator1 = set1.entries();
for (let entry of iterator1) {
  console.log(entry[0]);
}

for (let item of set1.entries()) {
  console.log(item[0])
}

arr = Array.from(set1)
console.log(arr)
console.log(set1.delete('bac'))
console.log('- - - - - - - - -')
var mySet = new Set();
mySet.add('foo');

mySet.has('foo');  // returns true
mySet.has('bar');  // returns false

set1.clear()
var obj1 = {'key1': 1};
var obj2 = {'key1': 1};
set1.add(obj1);

console.log(set1.has(obj1));        // returns true
console.log(set1.has(obj2));        // returns false
console.log(set1.has({'key1': 1})); // returns false because they are different object references
set1.add({'key1': 1});              // now set1 contains 2 entries
set1.add(obj2)                      // now set1 contains 3 entries. All look same.
console.log(set1)
console.log(set1.has(obj2));        // returns true
console.log(set1.has({'key1': 1})); // returns false because they are different object references
var obj = {
  name: 'john',
  age: 55
}

console.log('name' in obj)
console.log(obj.hasOwnProperty('name'))

const [R, C] = [Math.floor(5/3), Math.floor(8/3)] 

console.log(R, C)
