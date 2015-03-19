/// <reference path="../managers/asset.ts" />
'use strict'
module objects {
    // Player Class
    export class Player {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "player");
            this.image.x = 300;
            this.image.y = 430;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('BackGroundMusic', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }


        update() {
            //this.image.x = this.stage.mouseX;
            //this.image.y = this.stage.mouseY;
            if (this.image.x <= 10) {
                this.image.x = 10
            } else {
                this.image.x -= 1;
            }
        }
        destroy() {
            this.engineSound.stop();
            game.removeChild(this.image);
        }
        move(e) {
            switch (e.keyCode) {
                case 37:
                    if (this.image.x <= 10) {
                        this.image.x = 10
                    } else {
                        this.image.x -= 32;
                    }
                    break;
                case 38:
                    if (this.image.y <= 32) {
                        this.image.y = 16
                    } else {
                        this.image.y -= 32;
                    }
                    break;
                case 39:
                    if (this.image.x >= 620) {
                        this.image.x = 620
                    } else {
                        this.image.x += 32;
                    }
                    break;
                case 40:
                    if (this.image.y >= 448) {
                        this.image.y = 462
                    } else {
                        this.image.y += 32;
                    }
                    break;
            }
        }

    }
} 