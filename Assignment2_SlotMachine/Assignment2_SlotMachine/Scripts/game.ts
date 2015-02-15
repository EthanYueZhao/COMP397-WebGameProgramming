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
    

}



