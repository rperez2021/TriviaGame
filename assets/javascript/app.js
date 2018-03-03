//Variables
var correctAnswers = 0;
var wrongAnswers = 0;
var userguessnum = "";


//Start Button
$(document).ready(function () {
    $(".btn-lg").on("click", function () {
        questionOne();
        $(".btn-lg").hide();
    })
});

//Jquery Selectors for Answers (this is broken)
function userguess(userguessnum){
$(document).ready(function(){
    $("#answer1").on("click", function() {
        userguessnum = $("#answer1").val();
        console.log(userguessnum);
    })
    $("#answer2").on("click", function() {
        userguessnum = $("#answer2").val();
        console.log(userguessnum);
    })
    $("#answer3").on("click", function() {
        userguessnum = $("#answer3").val();
        console.log(userguessnum);
    })
    $("#answer4").on("click", function() {
        userguessnum = $("#answer4").val();
        console.log(userguessnum);
    })
});
console.log(userguessnum)
return userguessnum
}

//Coountdown Function
function startCountdown(func) {
    setTimeout(func, 5000) 
}

//Questions and Answers
function questionOne(){
    userguess();
    startCountdown(questionTwo);
    var questionOne = document.getElementById("question");
    questionOne.innerHTML = "Roman Emperor Claudius legalized what at banquests?";
    var q1rightanswer = document.getElementById("answer1");
    q1rightanswer.innerHTML = "Passing gas";
    var q1wronganswer1 = document.getElementById("answer2");
    q1wronganswer1.innerHTML = "Women eating with men";
    var q1wronganswer2 = document.getElementById("answer3");
    q1wronganswer2.innerHTML = "Bringing pet lions";
    var q1wronganswer3 = document.getElementById("answer4");
    q1wronganswer3.innerHTML = "Assaulting the host if the food was bad";
    var q1fact = document.getElementById("factoid")
    q1fact.innerHTML = "He though it was unhealthy to hold it in";
    if (userguessnum === "1") {
        var correct = document.getElementById("result");
        correct.innerHTML = "That is correct!";
        correctAnswers++;
    } else {
        var wrong = document.getElementById("result");
        wrong.innerHTML = "That is incorrect";
        wrongAnswers++
    }
}

function questionTwo(){
    startCountdown(questionThree);
    var questionTwo = document.getElementById("question");
    questionTwo.innerHTML = "The city of La Paz in Bolivia is safe from fire because of what?";
    var q2rightanswer = document.getElementById("answer1");
    q2rightanswer.innerHTML = "Because of its high altitude there is not enough oxigen to burn";
    var q2wronganswer1 = document.getElementById("answer2");
    q2wronganswer1.innerHTML = "It rains on average 320 out of 365 days a year";
    var q2wronganswer2 = document.getElementById("answer3");
    q2wronganswer2.innerHTML = "All of the homes are made from stone";
    var q2wronganswer3 = document.getElementById("answer4");
    q2wronganswer3.innerHTML = "The use of open flame is banned in the city";
    var q2fact = document.getElementById("factoid")
    q2fact.innerHTML = "I just thought this one was interesting";
    if (userguessnum === "1") {
        var correct = document.getElementById("result");
        correct.innerHTML = "That is correct!";
        correctAnswers++;
    } else {
        var wrong = document.getElementById("result");
        wrong.innerHTML = "That is incorrect";
        wrongAnswers++
    }
}

function questionThree(){
    startCountdown(questionFour);
    var questionThree = document.getElementById("question");
    questionThree.innerHTML = "15% of women do what on Valentine's Day?";
    var q3rightanswer = document.getElementById("answer1");
    q3rightanswer.innerHTML = "Send themselves flowers";
    var q3wronganswer1 = document.getElementById("answer2");
    q3wronganswer1.innerHTML = "Drink more than two bottles of red wine";
    var q3wronganswer2 = document.getElementById("answer3");
    q3wronganswer2.innerHTML = "Lie to their parents about being in a relationship when they are not";
    var q3wronganswer3 = document.getElementById("answer4");
    q3wronganswer3.innerHTML = "Go shopping";
    var q3fact = document.getElementById("factoid")
    q3fact.innerHTML = "I thought this was kind of sad";
    if (userguessnum === "1") {
        var correct = document.getElementById("result");
        correct.innerHTML = "That is correct!";
        correctAnswers++;
    } else {
        var wrong = document.getElementById("result");
        wrong.innerHTML = "That is incorrect";
        wrongAnswers++
    }
}

function questionFour(){
    startCountdown(questionFive);
    var questionFour = document.getElementById("question");
    questionFour.innerHTML = "When people are frightened their bodies produce more what?";
    var q4rightanswer = document.getElementById("answer1");
    q4rightanswer.innerHTML = "Earwax";
    var q4wronganswer1 = document.getElementById("answer2");
    q4wronganswer1.innerHTML = "Sweat";
    var q4wronganswer2 = document.getElementById("answer3");
    q4wronganswer2.innerHTML = "Cholesterol";
    var q4wronganswer3 = document.getElementById("answer4");
    q4wronganswer3.innerHTML = "Insulin";
    var q4fact = document.getElementById("factoid")
    q4fact.innerHTML = "That's pretty gross and weird";
    if (userguessnum === "1") {
        var correct = document.getElementById("result");
        correct.innerHTML = "That is correct!";
        correctAnswers++;
    } else {
        var wrong = document.getElementById("result");
        wrong.innerHTML = "That is incorrect";
        wrongAnswers++
    }
}

function questionFive(){
    var questionFive = document.getElementById("question");
    questionFive.innerHTML = "What did M&M's (the candy) originally stand for?";
    var q5rightanswer = document.getElementById("answer1");
    q5rightanswer.innerHTML = "Mars & Murrie's";
    var q5wronganswer1 = document.getElementById("answer2");
    q5wronganswer1.innerHTML = "Milk & Molasses";
    var q5wronganswer2 = document.getElementById("answer3");
    q5wronganswer2.innerHTML = "Maltodextrin & Maltose";
    var q5wronganswer3 = document.getElementById("answer4");
    q5wronganswer3.innerHTML = "Merry Mondays!";
    var q5fact = document.getElementById("factoid")
    q5fact.innerHTML = "That's pretty gross and weird";
    if (userguessnum === "1") {
        var correct = document.getElementById("result");
        correct.innerHTML = "That is correct!";
        correctAnswers++;
    } else {
        var wrong = document.getElementById("result");
        wrong.innerHTML = "That is incorrect";
        wrongAnswers++
    }
}









