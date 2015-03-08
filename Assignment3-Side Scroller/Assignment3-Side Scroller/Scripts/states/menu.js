/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/cherry.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    'use strict';
    function playButtonClicked(event) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;
    function menuState() {
        //ocean.update();
        player.update();
    }
    states.menuState = menuState;
    function menu() {
        var gameNameLabel;
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        ocean = new objects.Background(stage, game);
        player = new objects.Player(stage, game);
        // Show Cursor
        stage.cursor = "default";
        // Display Game Name
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 100, "Last Survivor");
        game.addChild(gameNameLabel);
        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 200, "playBtn");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);
        // Display Instruction Button
        instructionButton = new objects.Button(stage.canvas.width / 2, 280, "instructionBtn");
        game.addChild(instructionButton);
        instructionButton.addEventListener("click", states.instructionButtonClicked);
        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map