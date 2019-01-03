
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
var q9 = "The anime quiz is done";
var aa9 = [];

//variables that will be pulled 
var questions = [q1 , q2 , q3 , q4 , q5 , q6 , q7 , q8 , q9];
var answers = [aa1 , aa2 , aa3 , aa4 , aa5 , aa6 , aa7 , aa8 , aa9];
var j = 0;//Math.floor((Math.random() * 8) + 0);
var demo = questions[j];
var list = answers[j];

var timeRemaining;
var buenas = [];
var score;

console.log(questions[j]);
console.log(answers[j]);
console.log(list);

function reset() {
    setTimeout(alert("You have 60 seconds to complete this quiz"), 1000 * 61);
    timeRemaining = 60;
    j = 0;
    score = 0;
    $("#pregunta").text(demo);
    $("#opt1").text("A: " + list[0]);
    $("#opt2").text("B: " + list[1]);
    $("#opt3").text("C: " + list[2]);
    $("#opt4").text("D: " + list[3]);
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    timeRemaining--;
    $("#time").html("<h2>" + "Time Remaining: " + timeRemaining + "</h2>");
    if( timeRemaining === 0){
        reset();
    }     
}

function choosing() {
    $("#opt1").on("click", function(){
        console.log("A");
        buenas.push("A");
        j++;
        nextQuestion();
    } );
    $("#opt2").on("click", function() {
        console.log("B");
        buenas.push("B");
        j++;
        nextQuestion();
    });
    $("#opt3").on("click", function(){
        console.log("C");
        buenas.push("C");
        j++;
        nextQuestion();
    } );
    $("#opt4").on("click", function() {
        console.log("D");
        buenas.push("D");
        j++;
        nextQuestion();
    } );
}

function nextQuestion () {
    console.log(questions[j]);
    console.log(answers[j]);
    var nuevas = answers[j];
    $("#pregunta").html("<p>" + questions[j] + "</p>");
    $("#opt1").text("A: " + nuevas[0]);
    $("#opt2").text("B: " + nuevas[1]);
    $("#opt3").text("C: " + nuevas[2]);
    $("#opt4").text("D: " + nuevas[3]);
    endGame();
}

function endGame() {
    console.log("this is the j " + j);
    if( j >= 8) {
        alert("The Game is over");
        scoreCheck();
        alert("You got " + score + " answers right");
        reset()    
    }
}

function scoreCheck() {
    if(buenas[0] == "B") {
        score++;
    }
    if(buenas[1] == "D") {
        score++;
    }
    if(buenas[2] == "A") {
        score++;
    }
    if(buenas[3] == "D") {
        score++;
    }
    if(buenas[4] == "C") {
        score++;
    }
    if(buenas[5] == "C") {
        score++;
    }
    if(buenas[6] == "D") {
        score++;
    }
    if(buenas[7] == "A") {
        score++;
    }
}

reset();
choosing();
endGame();
