/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Zombie class
    var Zombie = (function () {
        function Zombie(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "zombie");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            game.addChild(this.image);
        }
        Zombie.prototype.update = function () {
            this.image.y -= this.dy;
            this.image.x -= this.dx;
            if (this.image.x < -this.width) {
                this.reset();
            }
        };
        Zombie.prototype.reset = function () {
            this.image.x = this.stage.canvas.width + this.width;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
        };
        Zombie.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Zombie;
    })();
    objects.Zombie = Zombie;
})(objects || (objects = {}));
//# sourceMappingURL=zombie.js.map