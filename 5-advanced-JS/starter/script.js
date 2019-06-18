/* function interviewQuestion(job) {
  if(job === 'designer' ) {
    return function (name) {
      console.log(name + ', can you please explain what UX design is?');
    };
  } else if (job === 'teacher') {
    return function (name) {
      console.log(name + ', What subject do you teach?');
    };
  } else {
    return function (name) {
      console.log('Hello, ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');

interviewQuestion('teacher')('mark');

 */

 //IIFE
 /* function game() {
   var score = Math.random() * 10;
   console.log(score >= 5);
 }

 game(); */

/* (function (goodlook) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodlook);
})(5); */


//CLOSURES


/*function interviewQuestion(job) {
  if(job === 'designer') {
    return function (name) {
      console.log(name + ', what UX design is?');
    };
  } else if(job === 'teacher') {
    return function (name) {
      console.log(name + ', What do you teach?');
    };
  } else {
    return function (name) {
      console.log('What do you do?');
    }
  }
}

function interviewQuestion2 (job) {
 return function(name){
   let works = {
     designer: ', what UX design is?',
     teacher: ', what subject do you teach?',
   }

   console.log(name + (works[job] || ', What do you do?') )
 }
}

interviewQuestion2('designer')('rabago');
interviewQuestion2('teacher')('eder');
interviewQuestion2('estadisticas')('naye');*/

/**
 * 
 *Bind call and apply
 */

 var john = {
   name: 'John',
   age: 26,
   job: 'teacher',
   presentation: function(style, timeOfDay){
     if(style === 'formal'){
      console.log('Good ' + timeOfDay + ', Ladies and gentlement! I\'m ' 
      + this.name + ', I\'m a ' 
      + this.job + ' and I\'m ' 
      + this.age + ' years old.');
     } else if (style === 'friendly'){
      console.log('Hey! what\'s up? I\'m '
      + this.name + ', I\'m a ' 
      + this.job + ' and I\'m ' 
      + this.age + ' years old. have a nice '
      + timeOfDay + '.');
     }
   }
 };

 var emily = {
   name: 'Emily',
   age: 35,
   job: 'designer'
 };

 john.presentation('formal', 'morning');

 john.presentation.call(emily, 'friendly', 'afternoon');
 //john.presentation.apply(emily, ['friendly', 'afternoon']);

 var johnFriendly = john.presentation.bind(john, 'friendly');
 johnFriendly('morning');

 var emilyFormal = john.presentation.bind(emily, 'formal');
 emilyFormal('evening');