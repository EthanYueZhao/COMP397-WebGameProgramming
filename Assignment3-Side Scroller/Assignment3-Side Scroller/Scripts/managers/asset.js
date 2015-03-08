var managers;
(function (managers) {
    'use strict';
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "bg", src: "assets/images/bg2.png" },
        { id: "engine", src: "assets/sounds/scavengers_music.mp3" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/UP.mp3" }
    ];
    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/Scavengers_SpriteSheet.png"],
        "frames": { width: 32, height: 32, count: 56, regX: 0, regY: 0 },
        "animations": {
            "zombie": [6, 11],
            "instructionsButton": [1],
            "cherry": [19],
            "player": [0, 5],
            "playButton": [4],
            "tryAgainButton": [5]
        }
    };
    // buttons sprite data
    var buttonSheetData = {
        "images": ["assets/images/buttons.png"],
        "frames": [
            [0, 0, 187, 75],
            [0, 77, 187, 75],
            [0, 153, 187, 75]
        ],
        "animations": {
            "playBtn": [0],
            "instructionBtn": [1],
            "againBtn": [2]
        }
    };
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.buttons = new createjs.SpriteSheet(buttonSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map