'use strict';

console.log('this works?');
//Greeting
var userName = prompt('What is your name?');
alert('Welcome, ' + userName + "!");

//Question1
var fromSeattle = prompt('Am I from Seattle?');
fromSeattle = fromSeattle.toLowerCase();

if (fromSeattle === 'no' || fromSeattle === 'n') {
    //console.log('Correct.);
    alert('Correct!');
} else { 
    //console.log('Sorry, no.');
    alert('Milwaukee, actually.');
}

//Question2
var hospitality = prompt('Do I work in hospitality');
hospitality = hospitality.toLowerCase();

if (fremont === 'yes' || fremont === 'y') {
    //console.log('Indeed.');
    alert('Indeed!');
} else {
    //console.log('Try Again.');
    alert('Try again (or nah)');
}

//Question3
var healthPsych = prompt('Did I work in healthcare for most of my career?');
healthPsych = healthPsych.toLowerCase();

if (healthPsych === 'yes' || healthPsych === 'y') {
    //console.log('That's true!');
    alert('That is true!');
} else {
    //console.log('Actually yes. Mental healthcare is healthcare.');
    alert('Were you paying attention?');
}

//Question4
var sugarAddict = prompt('Am I addicted to sugar?');
sugarAddict = sugarAddict.toLowerCase();

if (sugarAddict = 'yes' || sugarAddict = 'y') {
    //console.log('Yes, I have a problem. Do you have any doughnuts?');
    alert('Yes, I have a problem. Do you have any doughnuts?');
} else {
    //console.log('...you got it wrong');
    alert('This is literally the most important fact about me and you got it wrong');
}
