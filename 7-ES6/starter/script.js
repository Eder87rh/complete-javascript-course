// LET & CONST

//ES5
/* var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";

console.log(name5);

//ES6
const name6 = "jane Smith";
let age = 23;


//ES5
function driversLicense5(passedTest) {
  if(passedTest){
    var firstName = "John";
    var yearOfBirth = 1990;
  }

  console.log(firstName + ', born in' + yearOfBirth + ", is officialy allowed to drive a car")
};

driversLicense5(true);

//ES6
function driversLicense6(passedTest) {
  if(passedTest){
    let firstName = "John";
    const yearOfBirth = 1990;
  }

  console.log(firstName + ', born in' + yearOfBirth + ", is officialy allowed to drive a car")
};

driversLicense6(true); */

// BLOCKS AND IIFES

/* {
  const a =1;
  let b = 2;
}

console.log(a, b); */


// STRINGS
/* let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year) {
  return 2016 - year;
} */

// ARROW FUNCTIONS

/* const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
  return 2016 - el;
});

console.log(ages5);

// ES6
const age6 = years.map(el => 2016 - el) */

// LEXICAL THIS

// ES5
/* var box5 = {
  color: 'green',
  position: 1,
  clickMe: function(){
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = "This is box number " + self.position + " and it is " + self.color
      alert(str);
    });
  }
}; */

//box5.clickMe();

/* var box6 = {
  color: 'green',
  position: 1,
  clickMe: function(){
    document.querySelector('.green').addEventListener('click', () => {
      var str = "This is box number " + this.position + " and it is " + this.color
      alert(str);
    });
  }
};

box6.clickMe(); */

/* var box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {
    console.log('THIS: ', this);
    document.querySelector('.green').addEventListener('click', () => {
      var str = "This is box number " + this.position + " and it is " + this.color
      alert(str);
    });
  }
}; */

//box66.clickMe();

/* function Person(name) {
  this.name = name;
  this.test = function() {
    console.log(`nombre: ${this.name}`)
  }
}
 */

// ES5
/* Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(function(el) {
    return this.name + ' is friends with ' + el;
  }.bind(this))
  
  console.log(arr);
}
 */
/* var friends = ['Bob', 'Jane', 'Mark'];
new Person('john').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map((el) => `${this.name} is friends with ${el}`);
  
  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends); */

// DESTRUCTURING

// ES5
//var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
/* const [name, age] = ['John', 26];
console.log(name, age); */

/* const obj = {
  firstName: 'John',
  lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName, lastName);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [ age, retirement ] = calcAgeRetirement(1990);
console.log(age, retirement); */

// ARRAYS

//const boxes = document.querySelectorAll('.box');

// ES5
/* var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(el) {
  el.style.backgroundColor = 'dodgerblue';
}); */

// ES6
/* const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(el => el.style.backgroundColor = 'dodgerblue'); */
/*
// ES5
for(var i = 0; i < boxesArr5.length; i++){
  if(boxesArr5[i].className === 'box blue'){
    continue;
  }

  boxesArr5[i].textContent = 'I changed to blue!';
} */

// ES6
/* for(const el of boxesArr6) {
  if(el.className.includes('blue')) {
    continue;
  }

  el.textContent = 'I changed to blue!';
} */


// ES5
/* var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function (cur) {
  return cur >= 18;
});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(el => el >= 18));
console.log(ages.find(el => el >= 18)); */

/* function addFourAges(a,b,c,d) {
  return a+b+c+d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller]; */

// REST PARAMETERS

/* function isFullAge5() {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function(el){
    console.log((2016 - el) >= 18 )
  });
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
  console.log(years);
}

isFullAge6(1990, 1999, 1965); */

// Default parameters

/* function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

  lastName === undefined ? lastName = 'Smith' : lastName = lastName;

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990); */

/* function SmithPerson(firstName = "Smith", yearOfBirth, lastName, nationality) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
} */

// MAPS

/* const question = new Map();
question.set("question", "What is the official name of the latest major JavaScript Version?");
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, "Correct answer");
question.set(false, "Wrong, please try again!");

console.log(question.get('question')); */
//console.log(question.size);

/* if (question.has(4)) {
  //question.delete(4);
  console.log("Answer 4 is here")
} */

//question.clear();

/* question.forEach((el, key) => {
  console.log(`This is ${key}, and it's set to ${el}`);
}); */

/* for(let [key, el] of question.entries()) {
  if (typeof (key) === 'number') {
    console.log(`Option ${key}:  ${el}`);
  }
}

const ans = parseInt(prompt('Write the correct answer'));
const res = question.get(ans === question.get('correct'));
console.log(res); */

//CLASSES

/* var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date.getFullyear - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date.getFullyear - this.yearOfBirth;
    console.log(age);
  }

  static greeting(){
    console.log('Hey there');
  }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting(); */

// CLASSES AND SUBCLASES

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

var JohnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals){
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
} 

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();