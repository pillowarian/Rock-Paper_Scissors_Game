let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

let userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () =>{
   const options = ["rock","paper","scissors"]
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
}

const drawGame = () =>{
    // console.log("Draw was Game");
    msg.innerText = "Game Was Draw. Please Play Again"
    msg.style.backgroundColor = "#7D2E68"
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
    userScore++
    userScorePara.innerText = userScore
    // console.log("you win!")
    msg.innerText = `You Win Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#326771";
}
else{
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("you lose")
    msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor="#FE4A49";
}
}

const playGame= (userChoice) => {
     console.log("User Choice = ",userChoice);
     // Generate computer Science
     const compChoice = genCompChoice();
    //  console.log("Computer Choice = ",compChoice)

     if(userChoice === compChoice){
        // Draw game
        drawGame();
     }
     else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
     }
}

choices.forEach((choice)=> {
    // console.log(choice);
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    })
})