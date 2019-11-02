'use strict';
// console.log('this works?');

//Greeting
var userName = prompt('What is your name?');
alert('Welcome, ' + userName + "!");

//Question1
var fromSeattle = prompt('Am I from Seattle?');
fromSeattle = fromSeattle.toLowerCase();

if (fromSeattle === 'no' || fromSeattle === 'n') {
//console.log('Correct!');
  alert('Correct!');
} else { 
//console.log('Milwaukee, actually.');
  alert('Milwaukee, actually.');
}

//Question2
var hospitality = prompt('Do I work in hospitality');
hospitality = hospitality.toLowerCase();

if (hospitality === 'yes' || hospitality === 'y') {
  //console.log('Indeed! For now...');
  alert('Indeed! For now...');
} else {
  //console.log('Try again, or nah');
  alert('Try again, or nah');
}

//Question3
var healthPsych = prompt('Did I work in healthcare for most of my career?');
healthPsych = healthPsych.toLowerCase();

if (healthPsych === 'yes' || healthPsych === 'y') {
  //console.log('That is true!');
  alert('That is true!');
} else {
  //console.log('Were you paying attention?');
  alert('Were you paying attention?');
}

//Question4
var sugarAddict = prompt('Am I addicted to sugar?');
sugarAddict = sugarAddict.toLowerCase();

if (sugarAddict === 'yes' || sugarAddict === 'y') {
  //console.log('Yes, I have a problem...');
  alert('Yes, I have a problem. Do you have any doughnuts?');
} else {
  //console.log('...you got it wrong');
  alert('This is literally the most important fact about me and you got it wrong');
}

//Question5
var thirdChange = prompt('Is this my third career change?');
thirdChange = thirdChange.toLowerCase();

if (thirdChange=== 'yes' || thirdChange === 'y') {
  //console.log('Truuu');
  alert('Truuu');
} else {
  //console.log('Actually, it is.');
  alert('*Angry buzzer noise* Actually, it is.');
}

//Age Guessing Game --MAKE THIS A WHILE LOOP
// var guessAge = parseInt(prompt('Can you guess my age?'));

// for (var i = 0; i < 4; i ++) {
//   if (guessAge < 27) {
//     guessAge = parseInt(prompt('I am flattered, but you guessed too low! Try again.'));
//   } else if (guessAge >= 28) {
//     guessAge = parseInt(prompt('Too high this time. Try again please.'));
//   } else if (guessAge === 27) {
//     alert('Yes!');
//     break;
//   } else {
//     alert('*Angry Buzzer Noise*');
//   }
// }

//Age Guessing Game
var guessAge = parseInt(prompt('Can you guess my age?'));
var counter = 0;
while (counter < 4) {
  if (guessAge < 27) {
    guessAge = parseInt(prompt('I am flattered, but you guessed too low! Try again.'));
  } else if (guessAge >= 28) {
    guessAge = parseInt(prompt('Too high this time. Try again please.'));
  } else if (guessAge === 27) {
    alert('Yes!');
    break;
  } else {
    alert('*Angry Buzzer Noise*');
  }
  counter++;
}

if (counter === 4) {
  alert('The answer is 27.');
}


// //Multiple Choice Question
// var multipleChoice = prompt('Can you guess my favorite sweet treat?');
// var whichDessert = ['doughnuts', 'cookies', 'cake', 'pie', 'baklava'];
// multipleChoice === multipleChoice.toLowerCase();

// for (var ii = 0; ii < whichDessert.length; ii++) {
//   if (multipleChoice === whichDessert[0]) {
//     alert('You already knew! How?');
//     break;
//   } else {
//     prompt('Try again!');
//   }
// }

//Farewell Greeting
alert('Thanks for reading, ' + userName + '! Take care!');