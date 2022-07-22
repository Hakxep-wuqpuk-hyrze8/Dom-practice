let randomNumber1 = Math.floor(Math.random() * 6 + 1);

let srcImg = "./images/dice" + randomNumber1 + ".png"
document.querySelector(".img1").setAttribute("src", srcImg);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

srcImg = "./images/dice" + randomNumber2 + ".png"
document.querySelector(".img2").setAttribute("src", srcImg);

let heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.textContent = "?Play1 win!";
} 
else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Play2 win!?";
} else {
    heading.textContent = "Draw!";
}