var donutSound = new Audio("./Sound/click.wav");
var donutButton = document.images["donutButton"]
var donutCounter = document.getElementById("count")
var donutNumber = 0;
donutButton.addEventListener("click", addDonut);
donutButton.addEventListener("click", playSound);


function playSound() {
    donutSound.currentTime = 0;
    donutSound.play();
}

function addDonut() {
    donutNumber += 1;
    donutCounter.innerHTML = donutNumber;
}