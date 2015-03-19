/// <reference path="lib/easeljs.d.ts" />
/// <reference path="lib/createjs-lib.d.ts" />
/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/zombie.ts" />
/// <reference path="objects/cherry.ts" />
/// <reference path="objects/background.ts" />
/// <reference path="objects/player.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
// game name: Last Survivor
// file name: game.ts
// author: Yue Zhao
// last edited at Mar-19,2015
'use strict';
var stage;
var game;
var background;
var player;
var cherry;
var zombies = []; // Clouds array;
var scoreboard;
var collision;
var tryAgain;
var playButton;
var instructionButton;
var currentState;
var currentStateFunction;
// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}
// init called after Assets have been loaded.
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();
    currentState = constants.MENU_STATE;
    changeState(currentState);
}
// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}
// Game Loop
function gameLoop(event) {
    currentStateFunction();
    stage.update();
}
function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;
        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;
        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;
            // instantiate game over screen
            states.gameOver();
            break;
        case constants.INSTRUCTION_STATE:
            currentStateFunction = states.instructionState;
            // instantiate game over screen
            states.instruction();
            break;
    }
}
//# sourceMappingURL=game.js.map