
var intervalId

//the answers
var respuestas1 = "Human Tansmutation";
var respuestas2 = "1987";
var respuestas3 = "Hayao Miyazaki";
var respuestas4 = "American Footbal";
var respuestas5 = "Boruto's Dad";
var respuestas6 = "Vegeta";
var respuestas7 = "Shizuka Joestar";
var respuestas8 = "Black Stones";

//the questions and answer arrays
var q1 = "In the anime series Full Metal Alchemist what is considered The Greatest Taboo?";
var aa1 = ["Murder" , respuestas1 , "War" , "Transfiguration"]
var q2 = "What year was JoJo's Bizzare Adventure Phantom Blood first published?";
var aa2 = ["1682" , "1999" , "2016" , respuestas2];
var q3 = "Who created the animated movie Spirited Away?";
var aa3 = [respuestas3 , "Akira Toriyama" , "Kishimoto" , "Tite Kubo"];
var q4 = "What sport are the playing in the anime/manga Eyesheild 21";
var aa4 = ["Baseball" , "Wresteling" , "Fencing" , respuestas4];
var q5 = "Who is the yellow haired protaganist of Naruto?";
var aa5= ["Minato" , "Boruto" , respuestas5 , "Ino"];
var q6 = "Who has the biggest body count in Dragon Ball Z?";
var aa6 = ["Goku" , "Trunks" , respuestas6 , "Gohan"];
var q7 = "Which of the following is not of Joestar blood?";
var aa7 = ["Jotaro Kujo", "Josuke Higashikata" , "Giorno Giovana" , respuestas7];
var q8 = "What is the name of Nana Osaki's band?";
var aa8 = [respuestas8 , "Cutie Pie" , "Moon Bunny" , "Chiquita"];

//variables that will be pulled 
var questions = [q1 , q2 , q3 , q4 , q5 , q6 , q7 , q8];
var answers = [aa1 , aa2 , aa3 , aa4 , aa5 , aa6 , aa7 , aa8];
var j =Math.floor((Math.random() * 8) + 0);
var demo = questions[j];
var list = answers[j];

var right = 3;
var timeRemaining = 80;

console.log(questions[j]);
console.log(answers[j]);
console.log(list);

function done(){
    alert("You are done HooMan, you got " + right + " questions correct");
}

function decrement(){
    timeRemaining--;
    $("#time").html("<h2>" + "Time Remaining: " + timeRemaining + "</h2>");
    if( timeRemaining === 0){
        reset();
    }

}

function reset(){
    setTimeout(done , 1000 * 80);
    play();
}

function play(){
    $("#pregunta").text(demo);
    $("#opt1").text(list[0]);
    $("#opt2").text(list[1]);
    $("#opt3").text(list[2]);
    $("#opt4").text(list[3]);
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000); 
    
}
reset();
