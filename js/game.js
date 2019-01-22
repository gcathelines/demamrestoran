const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_UP = 38;
const KEY_DOWN = 40;

let foods = new Array();

function generateFoods(){
    
    for (let index = 0; index < 6; index++) {
        let newFood = createFood();
        console.log(document.getElementsByClassName("foods"));
        foods.push(newFood);
    }
}

function createFood(){
    let position = Math.floor(Math.random() * 3)+1;
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
    return newFood;
}

window.onkeyup = function(e) {
    var key = e.keyCode;

    if (key == KEY_LEFT) {
       
    }else if (key == KEY_DOWN || key == KEY_UP) {

    }else if(key == KEY_RIGHT){

    }
 }

 generateFoods();