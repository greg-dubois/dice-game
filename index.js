// Generate random numbers

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;


// Change dice images using random numbers

var firstImage = document.querySelector(".img1");

firstImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var secondImage = document.querySelector(".img2");

secondImage.setAttribute("src", "images/dice" + randomNumber2 + ".png");


// Change title depending on who wins

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}