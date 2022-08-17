'use strict'; // strict syntax

console.log('app is running');

let user = prompt('What is your name?');
console.log(user);
if (!user) {
  alert('You need to provide your name');
  user = prompt('What is your name?');
  alert('Welcome ' + user + ' .' + ' Thank you for stopping by! ');
}
  else {
  alert('Welcome ' + user + ' .' + ' Thank you for stopping by! ');
}


// question 1
let answer = prompt('Is the sky blue?'); // String data type
if (typeof(answer) === 'string') {
  answer = answer.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (!answer) {
  alert('Invalid answer, try again.');
  answer = prompt('Yes or No.')
}
else if (answer === 'y') {
  alert('Yes, the sky is blue! ');
}
else if (answer === 'yes') {
  alert('Yes, the sky is blue! ');
}
else {
  alert('Please try again!');
  answer = prompt('Is the sky blue?');
  alert('Yes, the sky is blue! ');
}
// question 2
let answer1 = prompt('Is Earth in the Milkyway?'); // String data type
if (typeof(answer1) === 'string') {
  answer1 = answer1.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (!answer1 ) {
  alert('Invalid answer, try again.');
  answer1 = prompt('Yes or No.')
}
else if (answer1 === 'y') {
  alert('Yes, Earth is in the MilkyWay! ');
}
else if (answer1 === 'yes') {
  alert('Yes, Earth is in the MilkyWay! ');
}
else {
  alert('Please try again!');
  answer1 = prompt('Is Earth in the Milkyway?');
  alert('Yes, Earth is in the MilkyWay! ');
}

// question 3
let answer2 = prompt('Is Godzilla large?'); // String data type
if (typeof(answer2) === 'string') {
  answer2 = answer2.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (!answer2 ) {
  alert('Invalid answer, try again.');
  answer2 = prompt('Yes or No.')
}
else if (answer2 === 'y') {
  alert('Yes, Godzilla is large! ');
}
else if (answer2 === 'yes') {
  alert('Yes, Godzilla is large! ');
}
else {
  alert('Please try again!');
  answer2 = prompt('Is Godzilla large?');
  alert('Yes, Godzilla is large! ');
}

// question 4
let answer3 = prompt('Is the Sun hot?'); // String data type
if (typeof(answer3) === 'string') {
  answer3 = answer3.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (!answer3 ) {
  alert('Invalid answer, try again.');
  answer3 = prompt('Yes or No.')
}
else if (answer3 === 'y') {
  alert('Yes, the Sun is hot! ');
}
else if (answer3 === 'yes') {
  alert('Yes, the Sun is hot! ');
}
else {
  alert('Please try again!');
  answer3 = prompt('Is the Sun hot?');
  alert('Yes, the Sun is hot! ');
}

// question 5
let answer4 = prompt('Is Antarctica cold?'); // String data type
if (typeof(answer4) === 'string') {
  answer4 = answer4.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (!answer4 ) {
  alert('Invalid answer, try again.');
  answer4 = prompt('Yes or No.')
}
else if (answer4 === 'y') {
  alert('Yes, Antarctica is cold! ');
}
else if (answer4 === 'yes') {
  alert('Yes, Antarctica is cold! ');
}
else {
  alert('Please try again!');
  answer4 = prompt('Is Antarctica cold?');
  alert('Yes, Antarctica is cold! ');
}

