'use strict'; // strict syntax

console.log('app is running');
let count = 0;

// question 1
let answer = prompt('Do I like cars?'); // String data type

if (typeof(answer) === 'string') {
  answer = answer.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (!answer) {
  alert('Invalid answer, try again.');
  answer = prompt('Yes or No.');
}
else if (answer === 'y') {
  alert('Yes, I do! ');
  let count = count++;
}
else if (answer === 'yes') {
  alert('Yes, I do! ');
  let count = count++;
}
else {
  alert('Incorrect');
}

//console.log(answer + ", I do like cars!");
// question 2
let answer1 = prompt('Am I a fan of boba?'); // String data type
if (typeof(answer1) === 'string') {
  answer1 = answer1.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (!answer1 ) {
  alert('Invalid answer, try again');
  answer1 = prompt('Yes or No.');
  if (answer1 == 'no') {
    alert('Incorrect');
  }
  else {
    alert('Yes, I do! ');
    let count = count++;
  }
    
}
else if (answer1 === 'y') {
  alert('Yes, I am! ');
  let count = count++;
}
else if (answer1 === 'yes') {
  alert('Yes, I am! ');
  let count = count++;
}
else {
  alert('Incorrect.')
}
//console.log(answer1 + ", I do like boba!");
// question 3
let answer2 = prompt('Am I a fan of the Giants?'); // String data type
if (typeof(answer2) === 'string') {
  answer2 = answer2.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (!answer2 ) {
  alert('Invalid answer, try again.');
  answer2 = prompt('Yes or No.')
  if (answer2 == 'no') {
    alert('Incorrect');
  }
  else {
    alert('Yes, I do! ');
    let count = count++;
  }
}
else if (answer2 === 'y') {
  alert('Yes, I am! ');
}
else if (answer2 === 'yes') {
  alert('Yes, I am! ');
}
else {
  alert('Please try again!');
  answer2 = prompt('Am I a fan of the Giants?');
  alert('Yes, I am! ');
}
//console.log(answer2 + ", I am a Giants fan!");
// question 4
let answer3 = prompt('Do I like dogs?'); // String data type
if (typeof(answer3) === 'string') {
  answer3 = answer3.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (!answer3 ) {
  alert('Invalid answer, try again.');
  answer3 = prompt('Yes or No.');
  if (answer3 == 'no') {
    alert('Incorrect');
  }
  else {
    alert('Yes, I do! ');
    let count = count++;
  }
}
else if (answer3 === 'y') {
  alert('Yes, I do! ');
}
else if (answer3 === 'yes') {
  alert('Yes, I do! ');
}
else {
  alert('Please try again!');
  answer3 = prompt('Do I like dogs?');
  alert('Yes, I do! ');
}
//console.log(answer3 + ", I do like dogs!");
// question 5
let answer4 = prompt('Have I been to Japan?'); // String data type
if (typeof(answer4) === 'string') {
  answer4 = answer4.toLowerCase(); // reassigns movie variable to a lowercase string (if it is already a string).
}

if (!answer4 ) {
  alert('Invalid answer, try again.');
  answer4 = prompt('Yes or No.')
  if (answer4 == 'no') {
    alert('Incorrect');
  }
  else {
    alert('Yes, I do! ');
    let count = count++;
  }
}
else if (answer4 === 'y') {
  alert('Yes, I have! ');
}
else if (answer4 === 'yes') {
  alert('Yes, I have! ');
}
else {
  alert('Please try again!');
  answer4 = prompt('Have I been to Japan?');
  alert('Yes, I have! ');
}
//console.log(answer4 + ", I have gone to Japan!");

let user = prompt('What is your name?');
//console.log("Your name is " + user);
if (!user) {
  alert('You need to provide your name');
  user = prompt('What is your name?');
  alert('Welcome ' + user + '.' + ' Thank you for stopping by! ');
}
  else {
  alert('Welcome ' + user + '.' + ' Thank you for stopping by! ');
}

//Question 6

let answer5 = 24;
let response = prompt('What number am I thinking of between 1 through 30? ');
for (let i = 1; i <= 3; i++) {
  
  if (response == answer5) {
    alert('That is correct! ');
      let count = count++;
    break;
    }
    else if (response == '') {
      alert('Invalid answer. ');
      response = prompt('What number am I thinking of between 1 through 30? ');  
    }
    else if (response < answer5) {
      alert('Too low! ');
      response = prompt('What number am I thinking of between 1 through 30? ');
    }
    else if (response > answer5) {
      alert('Too high! ');
      response = prompt('What number am I thinking of between 1 through 30? ');
    }
    else {
      alert('Invalid answer. ');
      response = prompt('What number am I thinking of between 1 through 30? ');
    }
    if (i==3) {
      alert('Nice try, but the correct answer is 24.');
    }

}  
//Question 7

let food = ['pizza', 'sushi', 'ramen', 'tacos', ];

for (let i=0; i < 6; i++) {
  let response1 = prompt('What is my favourite food? ');
  let fave = false;
  
  if(typeof(food[i]) === 'string'); {

    for (let answer7 of food) {
      if(response1.toLowerCase() === answer7) {
        alert('You are correct! ');
        let count = count++;
        fave = true;
        break;
      }
    } 
    if (fave == false) {
          alert('That is wrong!')
      }
      else {
          break;
          };
        }
      }
       

      alert('My favourite foods are ' + food[0] + ' , ' + food[1] + ' , '+ food[2] + ' , and, ' + food[3] + '.');

      alert('You scored ' + count + ' out of 7! Nice Job!');