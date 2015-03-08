/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/island.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    'use strict'
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        player.destroy();
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function menuState() {
        ocean.update();
        player.update();
    }

    export function menu() {
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        ocean = new objects.Ocean(stage, game);
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
        instructionButton.addEventListener("click", instructionButtonClicked);

        stage.addChild(game);
    }
} 