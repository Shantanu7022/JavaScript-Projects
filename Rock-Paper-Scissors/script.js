let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScr = document.querySelector("#user-score");
const compScr = document.querySelector("#comp-score");

const generateCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScr.innerText = userScore;
        //console.log("YOU Win!");
        msg.innerText = `Congratulations! You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        computerScore++;
        compScr.innerText = computerScore;
        //console.log("YOU Lose!");
        msg.innerText = `You lost the game! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const drawGame = (userChoice, compChoice) => {
    //console.log("Game was draw");
    msg.innerText = `Game was draw... Play again! You choose ${userChoice} & Computer also choose ${compChoice}`
    msg.style.backgroundColor = "rgb(121, 2, 129)"
}

const playGame = (userChoice) => {
    //console.log("user choice = ", userChoice);
    //computer choice
    const compChoice = generateCompChoice();
    //console.log("computer choice = ", compChoice);

    if (userChoice === compChoice) {
        //game draw
        drawGame(userChoice, compChoice);
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;  //paper or scissors
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;  //rock or scissors
        } else {
            userWin = compChoice === "rock" ? false : true;  //rock or paper
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choices was clicked", userChoice)
        playGame(userChoice);
    });
});