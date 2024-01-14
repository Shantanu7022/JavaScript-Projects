 let userScore = 0;
 let computerScore = 0;

 const choices = document.querySelectorAll(".choice");

 const generateCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
 };

 const showWinner = (userWin) => {
    if(userWin){
        console.log("YOU Win!");
    }else{
        console.log("YOU Lose!");
    }
 }

 const drawGame = () => {
    console.log("Game was draw");
 }

const playGame = (userChoice) =>  {
    console.log("user choice = ", userChoice);
    //computer choice
    const compChoice = generateCompChoice();
    console.log("computer choice = ", compChoice);

    if(userChoice === compChoice){
        //game draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;  //paper or scissors
        }else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;  //rock or scissors
        }else{
            userWin = compChoice === "rock" ? false : true;  //rock or paper
        }

        showWinner(userWin);
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