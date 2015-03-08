/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Island Class
    var Cherry = (function () {
        function Cherry(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "cherry");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            this.dx = 1;
            game.addChild(this.image);
        }
        Cherry.prototype.update = function () {
            this.image.x -= this.dx;
            if (this.image.x < -this.width) {
                this.reset();
            }
        };
        Cherry.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width + this.width;
        };
        Cherry.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Cherry;
    })();
    objects.Cherry = Cherry;
})(objects || (objects = {}));
//# sourceMappingURL=cherry.js.map