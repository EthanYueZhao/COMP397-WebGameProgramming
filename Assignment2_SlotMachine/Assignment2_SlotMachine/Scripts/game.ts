// createJS Boilerplate for COMP397


// viriables ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas; // reference to the HTML 5 Canvas element
var stage: createjs.Stage; // reference to the Stage


// game objects
var game: createjs.Container; // main Game Container Object
var background: createjs.Bitmap;
var spinButton: createjs.Bitmap;
var betMaxButton: createjs.Bitmap;
var betOneButton: createjs.Bitmap;
var resetButton: createjs.Bitmap;
var powerButton: createjs.Bitmap;


// functions ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function init() {



    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas); // parent Object
    stage.enableMouseOver(20); // turn on Mouse Over events

    createjs.Ticker.setFPS(60); // set the frame rate to 60 fps
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}


// gameloop
function gameLoop() {
    stage.update();
}

// button event listeners----------------------------------------------------------------------------------------------
// spinButton event listeners
function spinButtonClicked() {
    console.log("Spin Button Clicked");
    spin();
}

function spinButtonOut() {
    spinButton.alpha = 1; // 100% Alpha 

}

function spinButtonOver() {
    spinButton.alpha = 0.7;

}

// betMaxButton event listeners
function betMaxButtonClicked() {
    console.log("Bet Max Button Clicked");
}

function betMaxButtonOut() {
    betMaxButton.alpha = 1; // 100% Alpha 

}

function betMaxButtonOver() {
    betMaxButton.alpha = 0.7;

}

// betOneButton event listeners
function betOneButtonClicked() {
    console.log("Bet One Button Clicked");
}

function betOneButtonOut() {
    betOneButton.alpha = 1; // 100% Alpha 
}

function betOneButtonOver() {
    betOneButton.alpha = 0.7;
}

// resetButton event listeners
function resetButtonClicked() {
    console.log("Reset Button Clicked");
}

function resetButtonOut() {
    resetButton.alpha = 1; // 100% Alpha 
}

function resetButtonOver() {
    resetButton.alpha = 0.7;
}

// powerButton event listeners
function powerButtonClicked() {
    console.log("Power Button Clicked");
}

function powerButtonOut() {
    powerButton.alpha = 1; // 100% Alpha 
}

function powerButtonOver() {
    powerButton.alpha = 0.7;
}
// end button event listeners----------------------------------------------------------------------------------------------

// create UIs
function createUI() {

    background = new createjs.Bitmap("assets/images/slotMachine3.png");
    game.addChild(background); // add the background to the game container

    // spin Button
    spinButton = new createjs.Bitmap("assets/images/btn_Spin.png");
    game.addChild(spinButton);
    spinButton.x = 310;
    spinButton.y = 325;

    // spin Button Event Listeners
    spinButton.addEventListener("click", spinButtonClicked);
    spinButton.addEventListener("mouseover", spinButtonOver);
    spinButton.addEventListener("mouseout", spinButtonOut);



    // bet Max Button
    betMaxButton = new createjs.Bitmap("assets/images/btn_BetMax.png");
    game.addChild(betMaxButton);
    betMaxButton.x = 155;
    betMaxButton.y = 345;

    // bet Max Event Listeners
    betMaxButton.addEventListener("click", betMaxButtonClicked);
    betMaxButton.addEventListener("mouseover", betMaxButtonOver);
    betMaxButton.addEventListener("mouseout", betMaxButtonOut);

    // bet One Button
    betOneButton = new createjs.Bitmap("assets/images/btn_BetOne.png");
    game.addChild(betOneButton);
    betOneButton.x = 80;
    betOneButton.y = 345;

    // bet One Event Listeners
    betOneButton.addEventListener("click", betOneButtonClicked);
    betOneButton.addEventListener("mouseover", betOneButtonOver);
    betOneButton.addEventListener("mouseout", betOneButtonOut);

    // reset Button
    resetButton = new createjs.Bitmap("assets/images/btn_Reset.png");
    game.addChild(resetButton);
    resetButton.x = 230;
    resetButton.y = 345;

    // reset button Event Listeners
    resetButton.addEventListener("click", resetButtonClicked);
    resetButton.addEventListener("mouseover", resetButtonOver);
    resetButton.addEventListener("mouseout", resetButtonOut);

    // power Button
    powerButton = new createjs.Bitmap("assets/images/btn_Power.png");
    game.addChild(powerButton);
    powerButton.x = 12;
    powerButton.y = 345;

    // power button Event Listeners
    powerButton.addEventListener("click", powerButtonClicked);
    powerButton.addEventListener("mouseover", powerButtonOver);
    powerButton.addEventListener("mouseout", powerButtonOut);

}


function main() {
    game = new createjs.Container(); // instantiates the Game Container

    createUI();

    stage.addChild(game); // adds the Game Container to the Stage

    resetAll();

    initText();// add text to the stage
    

}


// start of game logic part+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var playerMoney: number;
var jackpot: number;
var winnings: number;
var turn: number;
var playerBet: number;
var winNumber: number;
var lossNumber: number;
var winRatio: number;

var spinResult;
var fruits = "";
var grapes: number;
var bananas: number;
var oranges: number;
var cherries: number;
var bars: number;
var bells: number;
var sevens: number;
var blanks: number;

var txt_jackpot: createjs.Text;
var txt_credits: createjs.Text;
var txt_playerBet: createjs.Text;
var txt_payout: createjs.Text;
function initText() {
    resetAll();
    txt_jackpot = new createjs.Text(jackpot.toString(), "20px Arial", "#ffffff");
    txt_jackpot.x = 180;
    txt_jackpot.y = 20;

    txt_credits = new createjs.Text(playerMoney.toString(), "20px Arial", "#ffffff");
    txt_credits.x = 75;
    txt_credits.y = 65;

    txt_playerBet = new createjs.Text(playerBet.toString(), "20px Arial", "#ffffff");
    txt_playerBet.x = 175;
    txt_playerBet.y = 65;

    txt_payout = new createjs.Text(winnings.toString(), "20px Arial", "#ffffff");
    txt_payout.x = 275;
    txt_payout.y = 65;

    stage.addChild(txt_jackpot);
    stage.addChild(txt_credits);
    stage.addChild(txt_playerBet);
    stage.addChild(txt_payout);
}

/* Utility function to show Player Stats */
function showPlayerStats() {
    winRatio = winNumber / turn;
    txt_jackpot.text = jackpot.toString();
    txt_credits.text = playerMoney.toString();
    txt_playerBet.text = playerBet.toString();
    txt_payout.text = winnings.toString();
    //$("#playerTurn").text("Turn: " + turn);
    //$("#playerWins").text("Wins: " + winNumber);
    //$("#playerLosses").text("Losses: " + lossNumber);
    //$("#playerWinRatio").text("Win Ratio: " + (winRatio * 100).toFixed(2) + "%");
}

/* Utility function to reset all fruit tallies */
function resetFruitTally() {
    grapes = 0;
    bananas = 0;
    oranges = 0;
    cherries = 0;
    bars = 0;
    bells = 0;
    sevens = 0;
    blanks = 0;
}

/* Utility function to reset the player stats */
function resetAll() {
    playerMoney = 1000;
    winnings = 0;
    jackpot = 5000;
    turn = 0;
    playerBet = 0;
    winNumber = 0;
    lossNumber = 0;
    winRatio = 0;
}


/* Check to see if the player won the jackpot */
function checkJackPot() {
    /* compare two random values */
    var jackPotTry = Math.floor(Math.random() * 51 + 1);
    var jackPotWin = Math.floor(Math.random() * 51 + 1);
    if (jackPotTry == jackPotWin) {
        alert("You Won the $" + jackpot + " Jackpot!!");
        playerMoney += jackpot;
        jackpot = 1000;
    }
}

/* Utility function to show a win message and increase player money */
function showWinMessage() {
    playerMoney += winnings;
    //$("div#winOrLose>p").text("You Won: $" + winnings);
    resetFruitTally();
    checkJackPot();
}

/* Utility function to show a loss message and reduce player money */
function showLossMessage() {
    playerMoney -= playerBet;
    //$("div#winOrLose>p").text("You Lost!");
    resetFruitTally();
}

/* Utility function to check if a value falls within a range of bounds */
function checkRange(value, lowerBounds, upperBounds) {
    if (value >= lowerBounds && value <= upperBounds) {
        return value;
    }
    else {
        return !value;
    }
}

/* When this function is called it determines the betLine results.
e.g. Bar - Orange - Banana */
function Reels() {
    var betLine = [" ", " ", " "];
    var outCome = [0, 0, 0];

    for (var spin = 0; spin < 3; spin++) {
        outCome[spin] = Math.floor((Math.random() * 65) + 1);
        switch (outCome[spin]) {
            case checkRange(outCome[spin], 1, 27):  // 41.5% probability
                betLine[spin] = "blank";
                blanks++;
                break;
            case checkRange(outCome[spin], 28, 37): // 15.4% probability
                betLine[spin] = "Grapes";
                grapes++;
                break;
            case checkRange(outCome[spin], 38, 46): // 13.8% probability
                betLine[spin] = "Banana";
                bananas++;
                break;
            case checkRange(outCome[spin], 47, 54): // 12.3% probability
                betLine[spin] = "Orange";
                oranges++;
                break;
            case checkRange(outCome[spin], 55, 59): //  7.7% probability
                betLine[spin] = "Cherry";
                cherries++;
                break;
            case checkRange(outCome[spin], 60, 62): //  4.6% probability
                betLine[spin] = "Bar";
                bars++;
                break;
            case checkRange(outCome[spin], 63, 64): //  3.1% probability
                betLine[spin] = "Bell";
                bells++;
                break;
            case checkRange(outCome[spin], 65, 65): //  1.5% probability
                betLine[spin] = "Seven";
                sevens++;
                break;
        }
    }
    return betLine;
}

/* This function calculates the player's winnings, if any */
function determineWinnings() {
    if (blanks == 0) {
        if (grapes == 3) {
            winnings = playerBet * 10;
        }
        else if (bananas == 3) {
            winnings = playerBet * 20;
        }
        else if (oranges == 3) {
            winnings = playerBet * 30;
        }
        else if (cherries == 3) {
            winnings = playerBet * 40;
        }
        else if (bars == 3) {
            winnings = playerBet * 50;
        }
        else if (bells == 3) {
            winnings = playerBet * 75;
        }
        else if (sevens == 3) {
            winnings = playerBet * 100;
        }
        else if (grapes == 2) {
            winnings = playerBet * 2;
        }
        else if (bananas == 2) {
            winnings = playerBet * 2;
        }
        else if (oranges == 2) {
            winnings = playerBet * 3;
        }
        else if (cherries == 2) {
            winnings = playerBet * 4;
        }
        else if (bars == 2) {
            winnings = playerBet * 5;
        }
        else if (bells == 2) {
            winnings = playerBet * 10;
        }
        else if (sevens == 2) {
            winnings = playerBet * 20;
        }
        else if (sevens == 1) {
            winnings = playerBet * 5;
        }
        else {
            winnings = playerBet * 1;
        }
        winNumber++;
        showWinMessage();
    }
    else {
        lossNumber++;
        showLossMessage();
    }

}

/* When the player clicks the spin button the game kicks off */
function spin() {
    playerBet = 10;

    if (playerMoney == 0) {
        if (confirm("You ran out of Money! \nDo you want to play again?")) {
            resetAll();
            showPlayerStats();
        }
    }
    else if (playerBet > playerMoney) {
        alert("You don't have enough Money to place that bet.");
    }
    else if (playerBet < 0) {
        alert("All bets must be a positive $ amount.");
    }
    else if (playerBet <= playerMoney) {
        spinResult = Reels();
        fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
        //$("div#result>p").text(fruits);
        determineWinnings();
        turn++;
        showPlayerStats();
    }
    else {
        alert("Please enter a valid bet amount");
    }

}
// end of game logic part+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
