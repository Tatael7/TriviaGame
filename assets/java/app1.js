//hello world
console.log("hello world");

var q1 = "In the anime series Full Metal Alchemist what is considered The Greatest Taboo?";
var a1 = "Human Tansmutation";
var q2 = "What year was JoJo's Bizzare Adventure Phantom Blood first published?";
var a2 = "1987";
var q3 = "Who created the animated movie Spirited Away?";
var a3 = "Hayao Miyazaki";
var q4 = "What sport are the playing in the anime/manga Eyesheild 21";
var a4 = "American Footbal"
var q5 = "Who is the yellow haired protaganist of Naruto?";
var a5 = "Naruto";
var q6 = "Who has the biggest body count in Dragon Ball Z?";
var a6 = "Vegeta"; //trunks,goku,gohan
var q7 = "Which of the following is not of Joestar blood?";
var a7 = "Shizuka Joestar";

var questions = [q1 , q2 , q3 , q4 , q5 , q6 , q7];
var answers = [a1 , a2 , a3 , a4 , a5 , a6 , a7];

var j =Math.floor((Math.random() * 6) + 0);

console.log(questions[j]);
console.log(answers[j]);