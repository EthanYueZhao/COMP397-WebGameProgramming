module managers {
    'use strict'
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "bg", src: "assets/images/bg2.png" },
        { id: "BackGroundMusic", src: "assets/sounds/scavengers_music.mp3" },
        { id: "Crash", src: "assets/sounds/Crash2.wav" },
        { id: "Pickup", src: "assets/sounds/Pickup5.wav" }
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
        }
    }

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
    }


    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;
        public static buttons: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
            this.buttons = new createjs.SpriteSheet(buttonSheetData);
        }

    }
} 