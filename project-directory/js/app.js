'use strict';

//Introduction
alert('Hello! My name is Ryan. Welcome to my guessing game!');

//Question 1 winter sport.
var winterSport = prompt('Question 1: Is my favorite winter sport, ice skating? yes/no')
  .toLowerCase();
console.log('User answered ' + winterSport + ', to the question: "Is my favorite winter sport, ice skating?"');
if (winterSport === 'y'){
  alert('Bzzzzzt!! Wrong.');
  alert('But it\'s okay. On to the next question!');
}else if (winterSport === 'yes'){
  alert('Bzzzzzt!! Wrong.');
  alert('But it\'s okay. On to the next question!');
}else{
  alert('Correct! My favorite winter sport is snowboarding not ice skating!');
  alert('Good job. On to the next question!');
}

//Question 2 video games.
var videoGames = prompt('Question 2: Do I like to play video games? yes/no')
  .toLowerCase();
console.log('User answered ' + videoGames + ', to the question: "Do I like to play video games?"');
if (videoGames === 'y' || videoGames === 'yes' || videoGames === 'yea' || videoGames === 'yeah'){
  alert('Correct! I love playing video games (When i have time...)');
  alert('Nice. I mean who doesn\'t?');
}else{
  alert('Wrong!!');
}

//Question 3 My favorite pet.
alert('Ready for the next question?');
var favoritePets = prompt('What\'s my favorite pet?')
  .toLowerCase();
while(favoritePets !== 'dog' && favoritePets !== 'dogs'){
  console.log('User answered ' + favoritePets + ', to the question: "What\'s my favorite pet?"');
  favoritePets = prompt('Nope! Try again!');
}
alert('Correct! I love dogs!');
console.log('User answered ' + favoritePets + ', to the question: "What\'s my favorite pet?"');


//Question 4 My coffee preference.
var coffeePreference = prompt('What is my favorite coffee?')
  .toLowerCase();
while(coffeePreference !== 'latte' && coffeePreference !== 'cafe latte' && coffeePreference !==
'espresso' && coffeePreference !== 'espresso shot') {
  console.log('User answered ' + coffeePreference + ', to the question: "What is my favorite coffee?"');
  coffeePreference = prompt('Try again!!');
}
console.log('User answered ' + coffeePreference + ', to the question: "What is my favorite coffee?"');
do {
  var teaPreference = prompt('Great job! How about tea? black tea or green tea?')
    .toLowerCase();
  console.log('User answered ' + teaPreference + ', to the question: "What\'s my favorite tea?"');
} while(teaPreference !== 'black tea' && teaPreference !== 'earl grey' && teaPreference !== 'black');


//Question 5 My least favorite game company.
alert('Ready for the next question?');
var leastFavoriteGameCompany = prompt('What is my least favorite game company? Hint: This game company was voted the worst game company in America!')
  .toLowerCase();
while(leastFavoriteGameCompany !== 'ea' && leastFavoriteGameCompany !== 'EA' && leastFavoriteGameCompany !== 'electronic arts'
&& leastFavoriteGameCompany !== 'Electronic Arts'){
  console.log('User answered ' + leastFavoriteGameCompany + ', to the question: "What is my least favorite game company?"');
  leastFavoriteGameCompany = prompt('Nope! Try again!');
}
alert('Correct! Let\'s just hope they learned their lesson and stop using underhanded tactics against gamers! :) ');
console.log('User answered ' + leastFavoriteGameCompany + ', to the question: "What is my least favorite game company?"');

//ending the guessing game.
alert('Congrats on finishing my guessing game!');
