const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;
const POSITION_LEFT = 1;
const POSITION_RIGHT = 2;
const POSITION_CENTER = 3;

let foods = new Array();

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
    console.log(position);
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

window.onkeyup = function(e) {
    var key = e.keyCode;
    let curr = foods[0];

    if (key == KEY_LEFT) {
        if(curr.getAttribute("position") == POSITION_LEFT){
            foods.splice(0, 1);
            curr.remove();
            drawFood();
        }
        else{

        }
    }else if (key == KEY_DOWN || key == KEY_UP) {
        if(curr.getAttribute("position") == POSITION_CENTER){
            foods.splice(0, 1);
            curr.remove();
            drawFood();
        }
        else{

        }
    }else if(key == KEY_RIGHT){
        if(curr.getAttribute("position") == POSITION_RIGHT){
            foods.splice(0, 1);
            curr.remove();
            drawFood();
        }
        else{

        }
    }
}


function animateScript() {
    var position = 183;
    const interval = 225;
    let tID = setInterval (function(){
    document.getElementById("person").style.backgroundPosition = `-${position}px 0px`; 
    if(position < 300) 
        position = position + 185.25;
    else
        clearInterval(tID);
    }
    , interval ); 
}

window.onload = function(){
    generateFoods();

    
    animateScript();
}
