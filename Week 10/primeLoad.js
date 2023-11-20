let theData;
let theString;
let theTxt = document.getElementById("result");
let generateButton = document.getElementById("generateButton");

generateButton.addEventListener('click', whatIsThis);

function preload() {
    theData = loadJSON('primes.json');
}

function setup() {
    noLoop();
    noCanvas();
    console.log(theData.primes);
}

function whatIsThis() {
    let randomIndex = floor(random(theData.primes.length));
    let randomPrime = theData.primes[randomIndex];
    console.log("Index in JSON file: " + randomIndex);
    console.log("Decimal Value: " + parseInt(randomPrime, 2));

    theString = "Random Prime in Binary: " + randomPrime + "<br><br>Index in JSON file: " + randomIndex + "<br><br>Decimal Value: " + parseInt(randomPrime, 2);
    theTxt.innerHTML = theString;
}