const texts = [
    "The Medium is the Massage.",
    "Ideas Shape the Medium..",
    "The Medium Opens the Doors of Creativity...",
    "Thus.... A Cyclical Symbiotic Relationship..."
];

let currentIndex = 0;

// function changeMessage() {
//     const dynamicMessage = document.getElementById('dynamicMessage');
//     dynamicMessage.innerHTML = messages[currentIndex];

//     currentIndex = (currentIndex + 1) % messages.length;
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const dynamicMessage = document.getElementById('dynamicMessage');
//     dynamicMessage.addEventListener('click', changeMessage);
// });


const images = ["./Images/chip.png", "./Images/foot1.png", "./Images/scene.png", "./Images/people.png"];
// const texts = ["Click me to change!", "Another image and text!", "And another one!"];
// let currentIndex = 0;

function changeContent() {
    const mainImage = document.getElementById('mainImage');
    const mainText = document.getElementById('mainText');
    
    currentIndex = (currentIndex + 1) % images.length;

    mainImage.src = images[currentIndex];
    mainText.innerText = texts[currentIndex];
}

function toggleAnswer(questionNumber) {
    var answerId = "answer" + questionNumber;
    var answer = document.getElementById(answerId);

    if (answer.style.display === "" || answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  }

  let printInterval;

  function startPrinting() {
    printInterval = setInterval(function() {
      document.getElementById('output').innerText += 'Printing, a ditto device\n';
    }, 1000);
  }

  function stopPrinting() {
    clearInterval(printInterval);
  }