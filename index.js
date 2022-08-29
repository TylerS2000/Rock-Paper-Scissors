let computerScore = 0;
let playerScore = 0;
function updatescore(){
let player = document.getElementById("player")
let computer = document.getElementById("computer");
player.innerHTML = `Player:${playerScore}`;
computer.innerHTML = `Computer:${computerScore}`;
}


function computerChoice(){ 
    let choice = Math.floor(Math.random()*3)
    let displChoice = document.getElementById("computerChoice");
    console.log(displChoice);
    if (choice == 0){displChoice.innerHTML = "The Computer Chose Rock"}
    if (choice == 1){displChoice.innerHTML = "The Computer Chose Paper"}
    if (choice == 2){displChoice.innerHTML = "The Computer Chose Scissors"}
    return choice;
}


//rock = 0 paper = 1 scissors = 2
function rock(){
    let choice = computerChoice();
 if(choice == 0){console.log("you both chose rock")}
 if (choice == 1){console.log("Paper covers Rock"); computerScore+=1;}
 if(choice == 2){console.log("Rock beats scissors"); playerScore+=1;}
 updatescore()
}
function paper(){
    let choice = computerChoice();
if(choice == 0){console.log("Paper covers rock"); playerScore+=1;}
 if (choice == 1){console.log("You both chose paper")}
 if(choice == 2){console.log("Scissors beats paper"); computerScore+=1;}
 updatescore()
}
function scissors(){
    let choice = computerChoice();
if(choice == 0){console.log("Rock beats scissors"); computerScore+=1;}
 if (choice == 1){console.log("Scissors cut paper"); playerScore+=1;}
 if(choice == 2){console.log("You both Chose Scissors"); }
 updatescore()
}