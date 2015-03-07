/// <reference path="../managers/asset.ts" />
'use strict';
var objects;
(function (objects) {
    // Plane Class
    var Player = (function () {
        function Player(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "plane");
            this.image.y = 430;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Player.prototype.update = function () {
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;
        };
        Player.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Player;
    })();
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map