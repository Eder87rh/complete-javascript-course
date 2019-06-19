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

 /*var john = {
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
 emilyFormal('evening');*/

/*var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr ,fn){
  var arrRes = [];
  for(var i= 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

 var ages = arrayCalc(years, calculateAge);
 var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
 console.log(ages)
 console.log(fullJapan)*/

(function() {
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers
    this.correctAnswer = correctAnswer
  };

  Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for(i in this.answers){
      console.log(i, ": " + this.answers[i]);
    }
  };

  Question.prototype.showResult = function(answer) {

    if(Number(answer) === this.correctAnswer) {
      console.log("Correct!!")
      score++; 
    } else if (answer === "exit") {
      console.log(`Your score is: ${score}`)
      return;
    } else {
      console.log("incorrect :(");
    }  

    console.log(`Your score is: ${score}`)
    doQuestion();

  };

  doQuestion = function() {
    var randomIndex = Math.round(Math.random() * 2);

    var questionSelected = arrQuestions[randomIndex];
    questionSelected.displayQuestion();

    var res =  prompt("Please select the correct answer (just type the number)");
    questionSelected.showResult(res);
  }

  var question1 = new Question('¿Quien descubrió América?', ["josé josé", "pepe el toro", "Cristobal Colón"], 2);
  var question2 = new Question('¿Cuanto es 2 + 2?', [4, 5, -1], 0);
  var question3 = new Question('¿Cuanto es 5 * 5?', [25, 3, -31], 0);

  var arrQuestions = [ question1, question2, question3 ];
  var score = 0;

  doQuestion();
})()

