const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;
const POSITION_LEFT = 1;
const POSITION_RIGHT = 2;
const POSITION_CENTER = 3;

var good = new Audio();
var wrong = new Audio();
good.src = "music/v.wav";
wrong.src ="music/x.wav";

let score = 0;
let time = 60;
let prevPosition = -1;
let foods = new Array();
let tID = null;
let isAnimationDone = true;

function generateFoods(){
    for (let index = 0; index < 6; index++) {
        drawFood();
    }
}

function drawFood(){
    let newFood = createFood();
    document.getElementById("foods").appendChild(newFood);
    foods.push(newFood);
}

function createFood(){
    let position = Math.floor(Math.random() * 3)+1;
    while(prevPosition == position)
        position = Math.floor(Math.random() * 3)+1;
    prevPosition = position;
    let image = Math.floor(Math.random() * 4)+1;
    let newFood = document.createElement("div"); 
    if(position == 1){
        newFood.className = "food food-left"; 
    }else if(position == 2){
        newFood.className = "food food-right"; 
    }else if(position == 3){
        newFood.className = "food food-center"; 
    }
    let newFoodImage = document.createElement("img");
    newFoodImage.className = "food-image food-"+image;
    newFood.appendChild(newFoodImage);
    newFood.setAttribute("position", position);
    return newFood;
}
 
function keyEvent(e) {
    var key = e.keyCode;
    let curr = foods[0];

    if (key == KEY_LEFT && isAnimationDone) {
        if(curr.getAttribute("position") == POSITION_LEFT){
            document.getElementById("person").style.backgroundImage = "url(image/person-eat-left.png)";
            score+=10;
            document.getElementById("score").innerText = "Score: " + score;
            animateScript(-11, 185.25);
            foods.splice(0, 1);
            curr.remove();
            good.play();
            drawFood();
            good.play();
        }
        else{
            document.getElementById("person").style.backgroundImage = "url(image/person-wrong-left.png)";
            animateScript(-11, 185.25);
            wrong.play();
        }
        
    }else if (key == KEY_DOWN || key == KEY_UP && isAnimationDone) {
        if(curr.getAttribute("position") == POSITION_CENTER){
            document.getElementById("person").style.backgroundImage = "url(image/person-eat-right.png)";
            score+=10;
            document.getElementById("score").innerText = "Score: " + score;
            animateScript(-11, 185.25);
            foods.splice(0, 1);
            curr.remove();
            good.play();
            drawFood();
        }
        else{
            document.getElementById("person").style.backgroundImage = "url(image/person-wrong-left.png)";
            animateScript(-11, 185.25);
            wrong.play();
        }

    }else if(key == KEY_RIGHT && isAnimationDone){
        if(curr.getAttribute("position") == POSITION_RIGHT){
            document.getElementById("person").style.backgroundImage = "url(image/person-eat-right.png)";
            score+=10;
            document.getElementById("score").innerText = "Score: " + score;
            animateScript(-11, 185.25);
            foods.splice(0, 1);
            curr.remove();
            good.play();
            drawFood();
        }
        else{
            document.getElementById("person").style.backgroundImage = "url(image/person-wrong-right.png)";
            animateScript(-11, 185.25);
            wrong.play();
        }
    }
}

function toIdle(){
    document.getElementById("person").style.backgroundImage = "url(image/person-idle.png)";
    document.getElementById("person").style.backgroundPosition = `-11px 0px`;
    isAnimationDone = true;
}


function animateScript(position, addition) {
    var position = position;
    const interval = 120;
    isAnimationDone = false;
    tID = setInterval (function(){
        document.getElementById("person").style.backgroundPosition = `${position}px 0px`; 
        if(position < 300) 
            position = position + addition;
        else{
            clearInterval(tID);
            toIdle();
        }
    }
    , interval ); 
}

window.onkeyup = keyEvent;
window.onload = function(){
    play();
}

function play(){
    score = 0;
    time = 60;
    prevPosition = -1;
    foods = new Array();
    tID = null;
    isAnimationDone = true;
    let timeTag = document.getElementById("time");
    let timer = setInterval(function(){
        if(time == 0){
            alert("Total Score: "+score+"\nPress Ok to play again");
            clearInterval(timer);
            location.reload();
        } 
        timeTag.innerText = "Time: " + time + " sec";
        time--;
    },1000);
    generateFoods();
}
