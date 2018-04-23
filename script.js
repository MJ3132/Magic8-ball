$(document).ready(function() {

var magic8Ball = {};

$("#answer").hide();
magic8Ball.answers = [ "look inside your inner self for it shall grant you outer wisdom" ," A question is but a reflection of your own conscious desires"," In time it will be shown for time itself you must let go" , "You are what you made it up your mind to be "," There are no limits but the pretencious lies and ilusions of reality "];

//Define the method
magic8Ball.askQuestion = function(question) {
$("#8ball").effect("shake");
$("#answer").fadeIn(4000);
//Create a randome number
var randomNumber = Math.random();
//Make the number between 0 and the number of items in your array
var randomNumberAnswers = randomNumber *
this.answers.length ;
//Round down the number to be a whole number
var randomIndex = Math.floor (randomNumberAnswers);
// Use that number to index a random number from the answers array
var randomResponse = this.answers[randomIndex];

$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png")
$("#answer").text(randomResponse);
console.log(question);
console.log(randomResponse);


};
var onClick = function () {
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");


$("#answer").hide();


setTimeout (
 function() {
	var question =	prompt("What is your question?");
magic8Ball.askQuestion(question)},500);



};
$("#questionButton").click(onClick);



});
