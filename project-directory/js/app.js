'use strict';

//Introduction
alert('Hello! My name is Ryan. Welcome to my guessing game!');

// //Question 1 winter sport.
// var winterSport = prompt('Question 1: Is my favorite winter sport, ice skating? yes/no')
//   .toLowerCase();
// console.log('User answered ' + winterSport + ', to the question: "Is my favorite winter sport, ice skating?"');

// if (winterSport === 'y'){
//   alert('Bzzzzzt!! Wrong.');
//   alert('But it\'s okay. On to the next question!');
// }else if (winterSport === 'yes'){
//   alert('Bzzzzzt!! Wrong.');
//   alert('But it\'s okay. On to the next question!');
// }else{
//   alert('Correct! My favorite winter sport is snowboarding not ice skating!');
//   alert('Good job. On to the next question!');
// }

//Question 2 video games.
var videoGames = prompt('Question 2: Do I like to play video games? yes/no')
  .toLowerCase();
console.log('User answered ' + videoGames + ', to the question: "Do I like to play video games?"');

if (videoGames === 'y' ){
  alert('Correct! I love playing video games (When i have time...)');
  alert('Nice. I mean who doesn\'t?');
}else if (videoGames === 'yes'){
  alert('Correct! I love playing video games (When i have time...)');
  alert('Nice job. Who doesn\'t, right?');
}else{
  alert('Wrong!!');
}

//Question 3 My favorite pet.
alert('Ready for the next question?');
var favoritePets = prompt('What\'s my favorite pet?')
  .toLowerCase();
while(
  if (favoritePets !== 'dog'){
  console.log('User answered ' + favoritePets + ', to the question: "What\'s my favorite pet?"');
  favoritePets = prompt('Nope! Try again!');
}
alert('Correct! I love dogs!');
console.log('User answered ' + favoritePets + ', to the question: "What\'s my favorite pet?"');


// //Question 3 My favorite pet.
// alert('Ready for the next question?');
// var favoritePets = prompt('What\'s my favorite pet?')
//   .toLowerCase();
// while(favoritePets !== 'dog' || 'dogs'){
//   console.log('User answered ' + favoritePets + ', to the question: "What\'s my favorite pet?"');
//   favoritePets = prompt('Nope! Try again!');
// }
// alert('Correct! I love dogs!');
// console.log('User answered ' + favoritePets + ', to the question: "What\'s my favorite pet?"');


// //Question 4 My coffee preference.
// var coffeePreference = prompt('How do I like my coffee? creme, creme and sugar, sugar, or black?')
//   .toLowerCase();
// while(coffeePreference !== 'black') {
//   console.log('User answered ' + coffeePreference + ', to the question: "What\'s my coffee preference?"');
//   coffeePreference = prompt('Try again!!');
// }
// do {
//   var teaPreference = prompt('Great job! How about tea? black tea or green tea?')
//     .toLowerCase();
// } while(teaPreference !== 'black tea');
// console.log('User answered ' + teaPreference + ', to the question: "What\'s my tea preference');



// for(var i = 0; i < favoritePets.length; i++) {
// var arrayLength = favoritePets.length; // Items in array
// var i;  // Counter
// for (var i = 0; i < 4; i++) {
//   var favoritePets = prompt('Question 3: Lis')
// }