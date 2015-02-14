// CreateJS Boilerplate for COMP397
// VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var canvas; // Reference to the HTML 5 Canvas element
var stage; // Reference to the Stage
// GAME OBJECTS
var game; // Main Game Container Object
var background;
var spinButton;
var betMaxButton;
var betOneButton;
var resetButton;
var powerButton;
// FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas); // Parent Object
    stage.enableMouseOver(20); // Turn on Mouse Over events
    createjs.Ticker.setFPS(60); // Set the frame rate to 60 fps
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();
}
// GAMELOOP
function gameLoop() {
    stage.update();
}
function spinButtonClicked() {
    console.log("Spin Button Clicked");
}
function spinButtonOut() {
    spinButton.alpha = 1; // 100% Alpha 
}
function spinButtonOver() {
    spinButton.alpha = 0.7;
}
function createUI() {
    background = new createjs.Bitmap("assets/images/slotMachine3.png");
    game.addChild(background); // Add the background to the game container
    // Spin Button
    spinButton = new createjs.Bitmap("assets/images/btn_Spin.png");
    game.addChild(spinButton);
    spinButton.x = 310;
    spinButton.y = 325;
    // Spin Button Event Listeners
    spinButton.addEventListener("click", spinButtonClicked);
    spinButton.addEventListener("mouseover", spinButtonOver);
    spinButton.addEventListener("mouseout", spinButtonOut);
    // Bet Max Button
    betMaxButton = new createjs.Bitmap("assets/images/btn_BetMax.png");
    game.addChild(betMaxButton);
    betMaxButton.x = 155;
    betMaxButton.y = 345;
    // Bet One Button
    betOneButton = new createjs.Bitmap("assets/images/btn_BetOne.png");
    game.addChild(betOneButton);
    betOneButton.x = 80;
    betOneButton.y = 345;
    // Reset Button
    resetButton = new createjs.Bitmap("assets/images/btn_Reset.png");
    game.addChild(resetButton);
    resetButton.x = 230;
    resetButton.y = 345;
    // Power Button
    powerButton = new createjs.Bitmap("assets/images/btn_Power.png");
    game.addChild(powerButton);
    powerButton.x = 12;
    powerButton.y = 345;
}
function main() {
    game = new createjs.Container(); // Instantiates the Game Container
    createUI();
    stage.addChild(game); // Adds the Game Container to the Stage
}
//# sourceMappingURL=game.js.map