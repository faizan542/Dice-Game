// ---------------------Generating First Dice-------------------------
let firstRandomNumber = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiceImage = "dice" + firstRandomNumber + ".png"; // dice1.png - dice6.png

let randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


// ---------------------Generating Second Dice-------------------------
let secondRandomNumber = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + secondRandomNumber + ".png" //images/dice1.png - images/dice6.png

let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(firstRandomNumber > secondRandomNumber){
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🥳"
}
else if(secondRandomNumber > firstRandomNumber){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🥳"
}
else{
    document.querySelector("h1").innerHTML = "Draw 😮"
}