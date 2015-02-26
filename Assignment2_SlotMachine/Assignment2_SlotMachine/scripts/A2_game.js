/// <reference path="constants/a2_constants.ts" />
/// <reference path="objects/a2_button.ts" />
// this is the game controller
// author: Yue Zhao
// last edited time: 2015-2-25
// viriables ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas; // reference to the HTML 5 Canvas element
var stage; // reference to the Stage
var tiles = [];
var reelContainers = [];
// game objects
var game; // main Game Container Object
var background;
var spinButton;
var betMaxButton;
var betOneButton;
var resetButton;
var powerButton;
var txt_jackpot;
var txt_credits;
var txt_playerBet;
var txt_payout;
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
// betMaxButton event listeners
function betMaxButtonClicked() {
    console.log("Bet Max Button Clicked");
    playerBet = playerMoney;
    showPlayerStats();
}
// betOneButton event listeners
function betOneButtonClicked() {
    console.log("Bet One Button Clicked");
    playerBet += 10;
    showPlayerStats();
}
// resetButton event listeners
function resetButtonClicked() {
    console.log("Reset Button Clicked");
    resetAll();
    showPlayerStats();
    showResult();
}
// powerButton event listeners
function powerButtonClicked() {
    console.log("Power Button Clicked");
    alert("Thank you for playing this game.");
}
// end button event listeners----------------------------------------------------------------------------------------------
// create UIs
function createUI() {
    background = new createjs.Bitmap("assets/images/slotMachine3.png");
    game.addChild(background); // add the background to the game container
    for (var index = 0; index < constants.NUM_REELS; index++) {
        reelContainers[index] = new createjs.Container();
        reelContainers[index].x = 71 + 100 * index;
        reelContainers[index].y = 147;
        game.addChild(reelContainers[index]);
    }
    // spin Button
    spinButton = new objects.Button("assets/images/btn_Spin.png", 310, 325);
    game.addChild(spinButton.getImage());
    // spin Button Event Listeners
    spinButton.getImage().addEventListener("click", spinButtonClicked);
    // bet Max Button
    betMaxButton = new objects.Button("assets/images/btn_BetMax.png", 155, 345);
    game.addChild(betMaxButton.getImage());
    // bet Max Event Listeners
    betMaxButton.getImage().addEventListener("click", betMaxButtonClicked);
    // bet One Button
    betOneButton = new objects.Button("assets/images/btn_BetOne.png", 80, 345);
    game.addChild(betOneButton.getImage());
    // bet One Event Listeners
    betOneButton.getImage().addEventListener("click", betOneButtonClicked);
    // reset Button
    resetButton = new objects.Button("assets/images/btn_Reset.png", 230, 345);
    game.addChild(resetButton.getImage());
    // reset button Event Listeners
    resetButton.getImage().addEventListener("click", resetButtonClicked);
    // power Button
    powerButton = new objects.Button("assets/images/btn_Power.png", 12, 345);
    game.addChild(powerButton.getImage());
    // power button Event Listeners
    powerButton.getImage().addEventListener("click", powerButtonClicked);
}
function main() {
    game = new createjs.Container(); // instantiates the Game Container
    createUI();
    stage.addChild(game); // adds the Game Container to the Stage
    resetAll();
    initText(); // add text to the stage
    showResult(); // init reel images
}
// start of game logic part+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var playerMoney;
var jackpot;
var winnings;
var turn;
var playerBet;
var winNumber;
var lossNumber;
var winRatio;
var spinResult;
var fruits;
var grapes;
var bananas;
var oranges;
var cherries;
var bars;
var bells;
var sevens;
var blanks;
function initText() {
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
    txt_payout.x = 278;
    txt_payout.y = 65;
    game.addChild(txt_jackpot);
    game.addChild(txt_credits);
    game.addChild(txt_playerBet);
    game.addChild(txt_payout);
}
/* Utility function to show Player Stats */
function showPlayerStats() {
    winRatio = winNumber / turn;
    txt_jackpot.text = jackpot.toString();
    txt_credits.text = playerMoney.toString();
    txt_playerBet.text = playerBet.toString();
    txt_payout.text = winnings.toString();
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
    playerMoney = constants.STARTING_MONEY;
    winnings = 0;
    jackpot = constants.JACKPOT;
    turn = 0;
    playerBet = constants.STARTING_BET;
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
    resetFruitTally();
    checkJackPot();
}
/* Utility function to show a loss message and reduce player money */
function showLossMessage() {
    playerMoney -= playerBet;
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
            case checkRange(outCome[spin], 1, 27):
                betLine[spin] = "Blank";
                blanks++;
                break;
            case checkRange(outCome[spin], 28, 37):
                betLine[spin] = "Grapes";
                grapes++;
                break;
            case checkRange(outCome[spin], 38, 46):
                betLine[spin] = "Banana";
                bananas++;
                break;
            case checkRange(outCome[spin], 47, 54):
                betLine[spin] = "Orange";
                oranges++;
                break;
            case checkRange(outCome[spin], 55, 59):
                betLine[spin] = "Cherry";
                cherries++;
                break;
            case checkRange(outCome[spin], 60, 62):
                betLine[spin] = "Bar";
                bars++;
                break;
            case checkRange(outCome[spin], 63, 64):
                betLine[spin] = "Bell";
                bells++;
                break;
            case checkRange(outCome[spin], 65, 65):
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
    winnings = 0;
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
        showResult();
        determineWinnings();
        txt_payout.text = winnings.toString();
        turn++;
        showPlayerStats();
    }
    else {
        alert("Please enter a valid bet amount");
    }
}
function showResult() {
    spinResult = Reels();
    fruits = spinResult[0] + " - " + spinResult[1] + " - " + spinResult[2];
    for (var index = 0; index < constants.NUM_REELS; index++) {
        reelContainers[index].removeAllChildren();
        tiles[index] = new createjs.Bitmap("assets/images/symbols/" + spinResult[index] + ".png");
        reelContainers[index].addChild(tiles[index]);
    }
}
// end of game logic part+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//# sourceMappingURL=A2_game.js.map