let Input = Number(document.querySelector(".Input"))
let retry = document.querySelector("#Retry");
const checkBtn = document.querySelector("#check");
let message = document.querySelector(".Result");
let randomNumber = Math.floor(Math.random()*10 + 1);
let guessNum = document.querySelector(".box")//.innerHTML = randomNumber;
let scores = document.querySelector(".figure");
let score = 10;
let highscore = 0;

// the username part 
let display = document.querySelector("h2")
let welcomeMessage = localStorage.getItem("userInput");
display.innerHTML = "Welcome "+ welcomeMessage + "!";

// for score operation
function calScore (){
   if (score > 1){
      score--
      scores.innerHTML = score;
    } 
    else{
      message.innerHTML = "You Lost the Game💥";      
      message.style.color = "red";
      scores.innerHTML = 0;
    }
}

function Game() {
  Input = Number(document.querySelector(".Input").value)
  if (!Input) {
    message.innerHTML = "Enter a Number";
  }

  else if(Input == randomNumber){
    message.innerHTML = "Correct Number"
    document.body.style.backgroundColor = "Green";
    guessNum.innerHTML = randomNumber;
    message.style.color = "Green"
    // for high score
    if (score > highscore){
      highscore = score
      high = document.querySelector(".High").innerHTML = highscore;

    }
  }  

  else if(Input > randomNumber){
   message.innerHTML = "Number is too high";
   calScore();
  }

  else{
     message.innerHTML = "Number is too low";     
     calScore();
  }  
  }
checkBtn.addEventListener("click", Game);

function retryBtn (){
  score = 10;
  document.body.style.backgroundColor = "black";
  randomNumber = Math.floor(Math.random()*10 + 1);
  guessNum = document.querySelector(".box").innerHTML = "?"//randomNumber;
  message.innerHTML = "Start Guessing..";
  message.style.color = "black";
  scores.innerHTML = score;
  Input = document.querySelector(".Input").value = "";
}
retry.addEventListener("click", retryBtn)

