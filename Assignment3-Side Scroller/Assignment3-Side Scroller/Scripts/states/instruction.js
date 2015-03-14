/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/zombie.ts" />
/// <reference path="../objects/cherry.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/background.ts" />
/// <reference path="../objects/player.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    'use strict';
    function instructionState() {
        background.update();
    }
    states.instructionState = instructionState;
    // show instruction when Instruction Button is clicked
    function instructionButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }
    states.instructionButtonClicked = instructionButtonClicked;
    // instruction scene
    function instruction() {
        var instructionLabel;
        var instructionContent;
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
        instructionContent = new createjs.Text(" Collect food\n Beat Zombies\n Survive as long as possible\n\n Use arrow keys to move", "30px Vijaya", "#FF0000");
        instructionContent.x = stage.canvas.width / 2 - 100;
        instructionContent.y = 100;
        game.addChild(instructionContent);
        // Display Try Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "playBtn");
        game.addChild(playButton);
        playButton.addEventListener("click", states.playButtonClicked);
        stage.addChild(game);
    }
    states.instruction = instruction;
})(states || (states = {}));
//# sourceMappingURL=instruction.js.map