'use strict';

var trackCorrect = 0;

//Greeting
var userName = prompt('What is your name?');
alert('Welcome, ' + userName + '!');

//Question1
function fromSeattle() {
  var fromSeattle = prompt('Am I from Seattle?');
  fromSeattle = fromSeattle.toLowerCase();

  if (fromSeattle === 'no' || fromSeattle === 'n') {
  //console.log('Correct!');
    alert('Correct!');
    trackCorrect++;
  } else {
  //console.log('Milwaukee, actually.');
    alert('Milwaukee, actually.');
  }
}
fromSeattle();

//Question2
function hospitality() {
  var hospitality = prompt('Do I work in hospitality');
  hospitality = hospitality.toLowerCase();

  if (hospitality === 'yes' || hospitality === 'y') {
    //console.log('Indeed! For now...');
    alert('Indeed! For now...');
    trackCorrect++;
  } else {
    //console.log('Try again');
    alert('Try again');
  }
}
hospitality();

//Question3
function healthPsych() {
  var healthPsych = prompt('Did I work in healthcare for most of my career?');
  healthPsych = healthPsych.toLowerCase();

  if (healthPsych === 'yes' || healthPsych === 'y') {
    //console.log('That is true!');
    alert('That is true!');
    trackCorrect++;
  } else {
    //console.log('Were you paying attention?');
    alert('Were you paying attention?');
  }
}
healthPsych();

//Question4
function sugarAddict() {
  var sugarAddict = prompt('Am I addicted to sugar?');
  sugarAddict = sugarAddict.toLowerCase();

  if (sugarAddict === 'yes' || sugarAddict === 'y') {
    //console.log('Yes, I have a problem...');
    alert('Yes, I have a problem. Do you have any doughnuts?');
    trackCorrect++;
  } else {
    //console.log('...you got it wrong');
    alert('This is literally the most important fact about me and you got it wrong');
  }
}
sugarAddict();

//Question5
function thirdChange() {
  var thirdChange = prompt('Is this my third career change?');
  thirdChange = thirdChange.toLowerCase();

  if (thirdChange=== 'yes' || thirdChange === 'y') {
    //console.log('Truuu');
    alert('Truuu');
    trackCorrect++;
  } else {
    //console.log('Actually, it is.');
    alert('*Angry buzzer noise* Actually, it is.');
  }
}
thirdChange();

//Age Guessing Game / Question 6
function guessAge() {
  var guessAge = parseInt(prompt('Can you guess my age?'));
  var counter = 0;
  while (counter < 4) {
    if (guessAge < 27) {
      guessAge = parseInt(prompt('I am flattered, but you guessed too low! Try again.'));
    } else if (guessAge >= 28) {
      guessAge = parseInt(prompt('Too high this time. Try again please.'));
    } else if (guessAge === 27) {
      alert('Yes!');
      trackCorrect++;
      break;
    } else {
      alert('*Angry Buzzer Noise*');
    }
    counter++;
    if (counter === 4) {
      alert('The answer is 27.');
    }
  }
}
guessAge();

//Multiple Choice Question 7
function multipleChoice() {
  var multipleChoice = prompt('Can you guess my favorite desserts?').toLowerCase();
  var whichDessert = ['doughnuts', 'cake', 'baklava'];
  // multipleChoice === multipleChoice.toLowerCase();
  var i = 0;

  while (i < 6) {
    // console.log('i: ', i);
    // console.log('multipleChoice: ', multipleChoice);
    for (var j = 0; j < whichDessert.length; j++) {
      // console.log('j: ', j);
      // console.log('whichDessert[j]: ', whichDessert[j]);
      if (multipleChoice === whichDessert[j]) {
        alert('You already knew! How?');
        trackCorrect++;
        i = 7;
      }
    }
    if (i === 7) {
      alert('You could have guessed doughnuts, cake, or baklava; you would have been right.');
    } else {
      multipleChoice = prompt('Guess Again!').toLowerCase();
      i++;
    }
  }
}
multipleChoice();

//trackCorrect displayed:
alert('Thanks for reading, ' + userName + '. You got ' + trackCorrect + ' answers right!');

//Farewell Greeting
// alert('Thanks for reading, ' + userName + '! Take care!');
