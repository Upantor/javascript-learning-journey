/*
// Chapter 5 - DOM

const buttonStyle1 = document.createElement("button");
buttonStyle1.innerText = "Click me!";
buttonStyle1.setAttribute("class", "btn-style-1");
const Popup = document.createElement("div");
Popup.setAttribute("class", "popup-style-1");
Popup.innerText = "this is my fast popup";
Popup.append(buttonStyle1);
buttonStyle1.onclick = function () {
  buttonStyle1.append(Popup);
};

//We can use event on HTML code, but it is not a good practice We need to use event in direct JavaScript, it is the best practice here how
const Image2 = document.querySelector("#myImage");
Image2.onclick = () => {
  Image2.setAttribute("src", "Image/generated-icon.png");
};
// Chapter 5 - events
const reviews = document.querySelector("#reviews");
reviews.onclick = (evnt) => {
  console.log(evnt);
  console.log(evnt.target);
  console.log(evnt.target.innerText);
  console.log(evnt.target.innerHTML);
  console.log(evnt.type);
  console.log(evnt.clientX);
  console.log(evnt.clientY);
};

// There are two types of event handling:
// 1. Inline event handling — writing the event directly in the HTML (e.g., onclick="myFunc()")
// 2. JavaScript-based handling — using functions in JS files
//
// Inline event handlers are not recommended because they mix HTML with logic and can be overwritten.
// It's better to use addEventListener(), which keeps JavaScript separate, allows multiple listeners, and is more flexible. Here is how you can use it:
const Lorem = document.getElementById("heading-lorem");
Lorem.addEventListener("dblclick", (evnt) => {
  console.log(evnt);
  console.log(evnt.target);
  console.log(evnt.target.innerText);
  console.log(evnt.target.innerHTML);
  console.log(evnt.type);
  console.log(evnt.clientX);
});

// You can add multiple event listeners to the same element using addEventListener().
// Now let's see how to remove an event listener:
Lorem.addEventListener("click", () => {
  console.log("The heading was clicked -- 1");
}); //Suppose we want to remove this event listener But We can't remove it directly, we need to drefine in a variable
const clickLorem = ("click", () => {
  console.log("The heading was clicked -- 2");
});
Lorem.addEventListener("click", clickLorem);

Lorem.addEventListener("click", () => {
  console.log("The heading was clicked -- 3");
});

Lorem.removeEventListener("click", clickLorem);
*/
// Chapter 6 - Practice
//Making Dark Mode
let darkMode = document.getElementById("dark-mode");
let body = document.body;
darkMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    darkMode.innerText = "Dark \n Mode";
  } else {
    darkMode.innerText = "Light \n Mode";
  }
});
let resultText = document.getElementById("TTT-Winner-result");

//Tac Tac Toe Game
let ticTacToeChild = document.querySelectorAll(".tic-tac-toe-child");
let turn0 = true; //If Ture then player 1 (X) turn else player 2 (O) turn
//Storing the winning partterns
let resetBtn = document.getElementById("reset-tic-tac-toe");
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]; //This is the winning partterns And this is a 2D array

ticTacToeChild.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("disabled")) return;

    if (turn0) {
      box.innerText = "X";
      turn0 = false;
    } else {
      box.innerText = "O";
      turn0 = true;
    }

    box.classList.add("disabled");
    winnerChecker();
  });
});
const winnerChecker = () => {
  let winnerFound = false; // Declare winnerFound outside the loop

  for (let pattern of winPatterns) {
    let position1 = ticTacToeChild[pattern[0]].innerText;
    let position2 = ticTacToeChild[pattern[1]].innerText;
    let position3 = ticTacToeChild[pattern[2]].innerText;

    if (position1 !== "" && position2 !== "" && position3 !== "") {
      if (position1 === position2 && position2 === position3) {
        resultText.innerText = `Winner is ${position1}`;

        // Disable all boxes to stop the game
        ticTacToeChild.forEach((box) => {
          box.classList.add("disabled");
        });

        winnerFound = true; // Set winnerFound to true when a winner is found
        return; // Exit the function early if there's a winner
      }
    }
  }

  // If no winner found, check for a draw
  if (!winnerFound) {
    // Check if all boxes are filled
    let isDraw = true;
    ticTacToeChild.forEach((box) => {
      if (box.innerText === "") {
        isDraw = false; // There is an empty box, so it's not a draw
      }
    });

    if (isDraw) {
      resultText.innerText = `It's a Draw`;
    }
  }
};

ticTacToeChild.forEach((box) => {
  resetBtn.addEventListener("click", () => {
    box.innerText = "";
    ticTacToeChild.forEach((box) => {
      box.classList.remove("disabled");
    });
    turn0 = true;
    resultText.innerText = "It Will Show The Result";
  });
});

//Rock Paper Scissors Game
let RPCuserScore = document.getElementById("rpc-user-score");
let RPCcomputerScore = document.getElementById("rpc-computer-score");
let RPCrusultText = document.getElementById("rpc-result");
const allRPCButtons = document.querySelectorAll(".btn-rpc-child");
let ResetRPCButton = document.getElementById("rpc-button-reset");
let userChoice = "";
let computerChoice = "";
let userScore = 0;
let computerScore = 0;

allRPCButtons.forEach((choice) => {
  choice.addEventListener("click", () => {
    userChoice = choice.getAttribute("id");
    playGame();
  });
});

const playGame = () => {
  const RPCrandomNumber = Math.floor(Math.random() * 3); // 0, 1, 2

  if (RPCrandomNumber === 0) {
    computerChoice = "rock";
  } else if (RPCrandomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  RPCcompare();
};

const RPCcompare = () => {
  if (userChoice === computerChoice) {
    RPCrusultText.innerText = `You chose ${userChoice}. \nComputer played ${computerChoice}. \nIt's a draw!`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    RPCrusultText.innerText = `You chose ${userChoice}. \nComputer played ${computerChoice}. \nYou win! Computer loses!`;

    userScore++;
  } else {
    RPCrusultText.innerText = `You chose ${userChoice}. \nComputer played ${computerChoice}. \nYou lose! Computer wins!`;

    computerScore++;
  }
  ScoreCounter();
};

const ScoreCounter = () => {
  console.log("ScoreCounter is running"); // Add this line to check
  RPCuserScore.innerText = `${userScore}`;
  RPCcomputerScore.innerText = `${computerScore}`;
};

ResetRPCButton.addEventListener("click", () => {
  userScore = 0; // reset the actual score variable too
  computerScore = 0;
  RPCuserScore.innerText = "0";
  RPCcomputerScore.innerText = "0";
  RPCrusultText.innerText = `Pick Your Move`;
});
