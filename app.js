var donutSound = new Audio("./Sound/click.wav");
var donutButton = document.images["donutButton"]
var donutCounter = document.getElementById("count")
var autoClickerTotalPurchased = document.querySelector("#auto-clicker-total")
var autoClickPriceHTML = document.querySelector("#auto-clicker-price")
var purchaseAutoClick = document.querySelector("#purchase-auto-clicker")
var purchaseClickMultiplier = document.querySelector("#purchase-click-multiplier")
var clickMultiplierPriceHTML = document.querySelector("#click-multiplier-price")
var clickMultiplierTotalHTML = document.querySelector("#click-multiplier-total")
var reset = document.querySelector("#reset-game")

var donutNumber = 0;
var autoClickPrice = 100;
var autoClickCount = 0;
var clickMultiplierPrice = 10;
var clickMultiplierCount = 0;

donutButton.addEventListener("click", addDonut);
donutButton.addEventListener("click", playSound);
purchaseAutoClick.addEventListener("click", buyAutoClick);
purchaseAutoClick.addEventListener("click", playSound);
purchaseClickMultiplier.addEventListener("click", buyClickMultiplier);
purchaseClickMultiplier.addEventListener("click", playSound);
reset.addEventListener("click", resetGame);


function playSound() {
    donutSound.currentTime = 0;
    donutSound.play();
}

function addDonut() {
    donutNumber += Math.pow(1.2, clickMultiplierCount)
    donutCounter.innerText = numberWithCommas(Math.round(donutNumber));
}

function retrieveDonutNumber() {
    return donutNumber;
}

function buyAutoClick() {
    if (donutNumber >= autoClickPrice) {
        donutNumber -= autoClickPrice;
        autoClickCount += 1;
        autoClickPrice = Math.round(autoClickPrice * 1.1);
        donutCounter.innerText = numberWithCommas(donutNumber);
        autoClickerTotalPurchased.innerText = numberWithCommas(autoClickCount);
        autoClickPriceHTML.innerText = numberWithCommas(Math.round(autoClickPrice));
        if (autoClickCount <= 1) {
            activateAutoClickers();
        }
    }
}

function retrieveAutoClickCount() {
    return autoClickCount;
}

function activateAutoClickers () {
    setInterval(function(){
        donutNumber += autoClickCount * Math.pow(1.2, clickMultiplierCount);
        donutCounter.innerText = numberWithCommas(Math.round(donutNumber));
    }, 1000)
}

function buyClickMultiplier(){
    if (donutNumber >= clickMultiplierPrice) {
        donutNumber -= clickMultiplierPrice;
        clickMultiplierCount += 1;
        clickMultiplierPrice = Math.round(clickMultiplierPrice * 1.1);
        donutCounter.innerText = numberWithCommas(Math.round(donutNumber));
        clickMultiplierPriceHTML.innerText = numberWithCommas(clickMultiplierPrice);
        clickMultiplierTotalHTML.innerText = numberWithCommas(clickMultiplierCount);
    }
}

function numberWithCommas(x) { 
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
//RegEx that adds commas into larger numbers

function resetGame() {
    location.reload();
}