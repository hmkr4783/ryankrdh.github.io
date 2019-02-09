'use strict';

var counter = 0;

//Asking for user's name.
var userName = prompt('Hello! Who are you?');
userName.toLowerCase();
console.log('user\'s name is ' + userName + '.');

//Introduction.
alert('Hello ' + userName + '! My name is Ryan. Welcome to my guessing game!');

//Question 1 winter sport question using a simple IF statement.
function myFirstQuestion() {
  var winterSport = prompt('Question 1: Is my favorite winter sport, ice skating? yes/no');
  winterSport.toLowerCase();
  console.log('User answered ' + winterSport + ', to the question: "Is my favorite winter sport, ice skating?"');
  if (winterSport === 'n' || winterSport === 'no' || winterSport === 'nope'){
    counter ++;
    alert('Correct! My favorite winter sport is snowboarding not ice skating!');
  }else{
    alert('Bzzzt! Wrong!');
    alert('It\'s alright. On to the next question!');
  }
}

  
//Question 2 summer sport question using a simple IF statement.
function mySecondQuestion() {
  var summerSport = prompt('Question 2: Is my favorite summer sport, swimming? yes/no');
  summerSport.toLowerCase();
  console.log('User answered ' + summerSport + ', to the question: "Is my favorite summer sport, swimming?"');
  if (summerSport === 'y' || summerSport === 'yes' || summerSport === 'yeah'){
    counter ++;
    alert('Correct! My favorite summer sport is swimming!');
  }else{
    alert('Bzzzt! Wrong!');
    alert(counter + ' correct so far.. maybe you\'ll get the next one right.');
  }
}

//Question 3 musical instrument question using a simple IF statement.
function myThirdQuestion() {
  var musicalInstrument = prompt('Question 3: Have I ever played any musical instruments? yes/no');
  musicalInstrument.toLowerCase();
  console.log('User answered ' + musicalInstrument + ', to the question: "Have I ever played any musical instruments?"');
  if (musicalInstrument === 'n' || musicalInstrument === 'no' || musicalInstrument === 'nope'){
    counter ++;
    alert('Correct! I\'ve never played any musical instruments.' + counter + ' correct so far. let\'s continue.');
  }else{
    alert('Bzzzt! Wrong!');
    alert(counter + ' correct so far.. maybe you\'ll get the next one right.');
  }
}

// Question 4 my age question using a simple IF statement.
function myFourthQuestion() {
  var myAge = prompt('Question 4: Am I born on 1990? yes/no');
  myAge.toLowerCase();
  console.log('User answered ' + myAge + ', to the question: "Am I born on 1990?"');
  if (myAge === 'y' || myAge === 'yes' || myAge === 'yeah'){
    counter ++;
    alert('Correct! ' + counter + ' correct so far. let\'s continue.');
  }else{
    alert('Bzzzt! Wrong!');
    alert(counter + ' correct so far.. maybe you\'ll get the next one right.');
  }
}

//Question 5 video games question using a simple IF statement.
function myFifthQuestion() {
  var videoGames = prompt('Question 5: Do I like to play video games? yes/no');
  videoGames.toLowerCase();
  console.log('User answered ' + videoGames + ', to the question: "Do I like to play video games?"');
  if (videoGames === 'y' || videoGames === 'yes' || videoGames === 'yea' || videoGames === 'yeah'){
    counter ++;
    alert('Correct! I love playing video games (When i have time...)');
    alert(counter + ' correct so far. let\'s continue.');
  }else{
    alert('Nope! ' + counter + ' correct so far.. maybe you\'ll get the next one right.');
  }
}

//Question 6 My favorite pet question using a simple while loop statement.
function mySixthQuestion() {
  alert('Ready for the next question?');
  var favoritePets = prompt('Question 6: What\'s my favorite pet?');
  favoritePets.toLowerCase();
  while(favoritePets !== 'dog' && favoritePets !== 'dogs'){
    console.log('User answered ' + favoritePets + ', to the question: "What\'s my favorite pet?"');
    favoritePets = prompt('Nope! Try again!');
  }
  counter ++;
  alert('Correct! I love dogs!' + counter + ' correct so far. let\'s continue.');
  console.log('User answered ' + favoritePets + ', to the question: "What\'s my favorite pet?"');
}

//Question 7 My coffee preference question using a simple while loop statement. This has multiple answers.
function mySeventhQuestion() {
  var coffeePreference = prompt('What is my favorite coffee?');
  coffeePreference.toLowerCase();
  while(coffeePreference !== 'latte' && coffeePreference !== 'cafe latte' && coffeePreference !==
  'espresso' && coffeePreference !== 'espresso shot') {
    console.log('User answered ' + coffeePreference + ', to the question: "What is my favorite coffee?"');
    coffeePreference = prompt('Try again!!');
  }
  counter ++;
  alert('Correct! I only order ' + coffeePreference + ' most of the time!' + counter + ' correct so far. let\'s continue.');
  console.log('User answered ' + coffeePreference + ', to the question: "What is my favorite coffee?"');
}

//Question 8 My least favorite game company question using a simple while loop statement.
function myEighthQuestion() {
  alert('Ready for the next question?');
  var leastFavoriteGameCompany = prompt('What is my least favorite game company? Hint: This game company was voted the worst game company in America!');
  leastFavoriteGameCompany.toLowerCase();
  while(leastFavoriteGameCompany !== 'ea' && leastFavoriteGameCompany !== 'EA' && leastFavoriteGameCompany !== 'electronic arts'
  && leastFavoriteGameCompany !== 'Electronic Arts'){
    console.log('User answered ' + leastFavoriteGameCompany + ', to the question: "What is my least favorite game company?"');
    leastFavoriteGameCompany = prompt('Nope! Try again!');
  }
  counter ++;
  alert('Correct! Let\'s just hope that they learned their lesson and stop using underhanded tactics against gamers! :) ');
  console.log('User answered ' + leastFavoriteGameCompany + ', to the question: "What is my least favorite game company?"');
}

//Question 9 How long have I lived in Seattle. This question asks for a number value.
//It gives the user 5 chances and let's them know if their answer was too high or low
function myNinthQuestion() {
  for (var i = 0; i < 5; i++) {

    var years = prompt('How many years have I lived in Seattle? Input number answer only.');
    console.log('user believes I lived in Seattle for ' + years + ' years.');
    if (isNaN(years)) {
      alert('Not a number!!');
    } else if (years > 11) {
      alert('Too high!');
    } else if (years < 11) {
      alert('Too low!');
    } else {
      counter++;
      alert('Correct! Wow! ' + counter + ' correct so far!');
      break;
    }
  }
}

//Question 10 My favorite food. This question uses arrays to hold multiple answers.
//Gives the user 6 tries.
function myTenthQuestion() {
  for (var k = 0; k < 6; k++) {

    var foodTypes = [
      'lasagna',
      'enchilada',
      'pasta'
    ];

    var userFoodAnswer = prompt('What is my favorite dish?');
    userFoodAnswer.toLowerCase();
    if(foodTypes.includes(userFoodAnswer)){
      counter++;
      alert('Yay, you got it right! My favorite dish are ' + foodTypes[0] + ', ' + foodTypes[1] + ', and ' + foodTypes[2] + '.');
      console.log('User inputs that my favorite dish is ' + userFoodAnswer + '.');
      break;
    } else {
      alert('Nope! Try again!');
      console.log('User inputs that my favorite dish is ' + userFoodAnswer + '.');
    }
  }
}

myFirstQuestion();
mySecondQuestion();
myThirdQuestion();
myFourthQuestion();
myFifthQuestion();
mySixthQuestion();
mySeventhQuestion();
myEighthQuestion();
myNinthQuestion();
myTenthQuestion();


// Ending the guessing game. Tallys up the correct answer out of 10 for the user.
alert('Congrats ' + userName + '! You got ' + counter + ' correct out of 10!');


