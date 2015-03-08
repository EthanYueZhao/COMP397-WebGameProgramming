/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/cherry.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
module states {
    'use strict'
    export function instructionState() {
        background.update();
    }

    // show instruction when Instruction Button is clicked
    export function instructionButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }

    // instruction scene
    export function instruction() {
        var instructionLabel: objects.Label;
        var instructionContent: createjs.Text;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        background = new objects.Background(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Instrucion title
        instructionLabel = new objects.Label(stage.canvas.width / 2, 40, "Instruction");
        game.addChild(instructionLabel);

       // display instruction content
        instructionContent = new createjs.Text(" Collect food\n Beat Zombies\n Survive as long as possible", "30px Vijaya", "#FF0000");
        instructionContent.x = stage.canvas.width / 2 -100;
        instructionContent.y = 100; 
        game.addChild(instructionContent);

        // Display Try Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "playBtn");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);

    }
} 