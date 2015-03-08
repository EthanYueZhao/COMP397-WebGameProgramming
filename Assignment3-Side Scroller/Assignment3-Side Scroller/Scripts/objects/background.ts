/// <reference path="../constants.ts" />
/// <reference path="../managers/asset.ts" />
module objects {
    // Background Class
    export class Background {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("bg"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = constants.BACKGROUND_STEP;

            game.addChild(this.image);
        }

        update() {
            this.image.x -= this.dx;
            if (this.image.x <= -640) {
                this.reset();
            }
        }

        reset() {
            this.image.x = 0;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}