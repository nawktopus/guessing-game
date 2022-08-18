'use strict'; // strict syntax

console.log('app is running');
let count = 0;

function askYesQuestion(question){
  //prompt passed in question
  let answer = prompt(question); // String data type

  //format answer
  answer = checkAndLowerString(answer);

  while (!answer) {
    answer = prompt(question);
    console.log('ur loopin');
  }

  if (answer === 'y') {
    alert('Yes, I do! ');
    count++;
  }
  else if (answer === 'yes') {
    alert('Yes, I do! ');
    count++;
  }
  else {
    alert('Incorrect');
  }

}

function checkAndLowerString(str) {
  if (typeof (str) === 'string') {
    // reassigns movie variable to a lowercase string (if it is already a string).
    str = str.toLowerCase();
  }
  return str;
}

// question 1
askYesQuestion('Do I like Cars?');
//console.log(answer + ", I do like cars!");
// question 2
askYesQuestion('Am I a fan of boba?');
//console.log(answer1 + ", I do like boba!");
// question 3
askYesQuestion('Am I a fan of the Giants?');
//console.log(answer2 + ", I am a Giants fan!");
// question 4
askYesQuestion('Do I like dogs?');
//console.log(answer3 + ", I do like dogs!");
// question 5
askYesQuestion('Have I been to Japan?');
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
      count++;
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
        count++;
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