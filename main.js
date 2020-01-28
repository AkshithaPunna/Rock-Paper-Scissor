let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");

let userInput = document.querySelector("#user-input");
var compInput = document.querySelector("#comp-input");

var userScore = document.querySelector(".user-score");
var compScore = document.querySelector(".comp-score");

let newGame = document.querySelector(".start-new-game");

var scoreval = document.querySelector(".text");

let visible = document.querySelector(".display");

var arySet = ["icons8-hand-rock-50.png", "icons8-hand-50.png", "icons8-hand-scissors-50.png"];

rock.addEventListener('click', addrock);
paper.addEventListener('click', addpaper);
scissor.addEventListener('click', addscissor);

function addrock(){
    userInput.getElementsByTagName("img")[0].src = rock.getElementsByTagName("img")[0].getAttribute('src');
    comp(0);
}
function addpaper(){
    userInput.getElementsByTagName("img")[0].src = paper.getElementsByTagName("img")[0].getAttribute('src');
    comp(1);
}
function addscissor(){
    userInput.getElementsByTagName("img")[0].src = scissor.getElementsByTagName("img")[0].getAttribute('src');
    comp(2);
}

function comp(user){
    var i = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    compInput.getElementsByTagName("img")[0].src = arySet[i];
    if(user == i){
        scoreval.innerHTML = "DRAW";
    }
    else if(user==0 && i==2){
        x = parseInt(userScore.innerHTML);
        userScore.innerHTML = x + 1;
        scoreval.innerHTML = "Rock Hits Scissor, You Win..";
    }
    else if(user==1 && i==0){
        x = parseInt(userScore.innerHTML);
        userScore.innerHTML = x + 1;
        scoreval.innerHTML = "Paper Covers Rock, You Win..";
    }
    else if(user==2 && i==1){
        x = parseInt(userScore.innerHTML);
        userScore.innerHTML = x + 1;
        scoreval.innerHTML = "Scissor Cuts Paper, You Win..";
    }
    else if(i==0 && user==2){
        y = parseInt(compScore.innerHTML);
        compScore.innerHTML = y + 1;
        scoreval.innerHTML = "Rock Hits Scissor, Comp Win..";
    }
    else if(i==1 && user==0){
        y = parseInt(compScore.innerHTML);
        compScore.innerHTML = y + 1;
        scoreval.innerHTML = "Paper Covers Rock, Comp Win..";
    }
    else if(i==2 && user==1){
        y = parseInt(compScore.innerHTML);
        compScore.innerHTML = y + 1;
        scoreval.innerHTML = "Scissor Cuts Paper, You Win..";
    }
}