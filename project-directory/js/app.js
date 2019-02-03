'use strict';

var counter = 0;

//Introduction
var userName = prompt('Hello! Who are you?');

alert('Hello! My name is Ryan. Welcome to my guessing game!');

//Question 1 winter sport.
var winterSport = prompt('Question 1: Is my favorite winter sport, ice skating? yes/no')
winterSport.toLowerCase();
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
winterSport.toLowerCase();
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
favoritePets.toLowerCase();
while(favoritePets !== 'dog' && favoritePets !== 'dogs'){
  console.log('User answered ' + favoritePets + ', to the question: "What\'s my favorite pet?"');
  favoritePets = prompt('Nope! Try again!');
}
alert('Correct! I love dogs!');
console.log('User answered ' + favoritePets + ', to the question: "What\'s my favorite pet?"');


//Question 4 My coffee preference.
var coffeePreference = prompt('What is my favorite coffee?')
coffeePreference.toLowerCase();
while(coffeePreference !== 'latte' && coffeePreference !== 'cafe latte' && coffeePreference !==
'espresso' && coffeePreference !== 'espresso shot') {
  console.log('User answered ' + coffeePreference + ', to the question: "What is my favorite coffee?"');
  coffeePreference = prompt('Try again!!');
}
console.log('User answered ' + coffeePreference + ', to the question: "What is my favorite coffee?"');
do {
  var teaPreference = prompt('Great job! How about tea? black tea or green tea?')
  teaPreference.toLowerCase();
  console.log('User answered ' + teaPreference + ', to the question: "What\'s my favorite tea?"');
} while(teaPreference !== 'black tea' && teaPreference !== 'earl grey' && teaPreference !== 'black');


//Question 5 My least favorite game company.
alert('Ready for the next question?');
var leastFavoriteGameCompany = prompt('What is my least favorite game company? Hint: This game company was voted the worst game company in America!')
leastFavoriteGameCompany.toLowerCase();
while(leastFavoriteGameCompany !== 'ea' && leastFavoriteGameCompany !== 'EA' && leastFavoriteGameCompany !== 'electronic arts'
&& leastFavoriteGameCompany !== 'Electronic Arts'){
  console.log('User answered ' + leastFavoriteGameCompany + ', to the question: "What is my least favorite game company?"');
  leastFavoriteGameCompany = prompt('Nope! Try again!');
}
alert('Correct! Let\'s just hope that they learned their lesson and stop using underhanded tactics against gamers! :) ');
console.log('User answered ' + leastFavoriteGameCompany + ', to the question: "What is my least favorite game company?"');

for (var i = 0; i<5, i++) {
  var number = prompt('How many years have I lived in Seattle?');
  console.log('user believes I lived in Seattle for ' + number + ' years.');
  if (number > 11) {
    alert('Too high!');
  } else if(number < 11) {
    alert('Too low!');
  } else {
    counter++;
  alert('Correct!');
  break;
  }
}

for (var k = 0; 0 < 6; k++) {

  var foodType = [
    'lasagna', 
    'enchilada',
    'pasta'];

  var userFoodAnswer = prompt('What is my favorite food?');
  userFoodAnswer.toLowerCase();
  if(userFoodAnswer.includes(foodType)){
    counter++
    alert('Yay, you got it right! My favorite foods are ' + foodType[0] + ', ' + foodType[1] + ', and ' + foodType[2] + '.');
    console.log();
    break;
  } else {
    alert('Nope! Try again!');
    console.log();
  }

}



//ending the guessing game.
alert('Congrats! You got ' + counter + ' correct out of 7!');
