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
var fremont = prompt('Do I work in Fremont?');
fremont = fremont.toLowerCase();

if (fremont === 'yes' || fremont === 'y') {
    //console.log('Indeed.');
    alert('Indeed!');
} else {
    //console.log('Try Again.');
    alert('Try again (or nah)');
}

//Question3
var healthPsych = prompt('Did I work in healthcare for 10 years?');
healthPsych = healthPsych.toLowerCase();

if (healthPsych === 'yes' || healthPsych === 'y') {
    //console.log('That's true!');
    alert('That is true!');
} else {
    //console.log('Actually yes. Mental healthcare is healthcare.');
    alert('Mental healthcare is still healthcare!');
}