 let userScore = 0;
 let computerScore = 0;

 const choices = document.querySelectorAll(".choice");

 const generateCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
 };

const playGame = (userChoice) =>  {
    console.log("user choice = ", userChoice);
    //computer choice
    const compChoice = generateCompChoice();
    console.log("computer choice = ", compChoice);
};

 choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choices was clicked", userChoice)
        playGame(userChoice);
    });
 });