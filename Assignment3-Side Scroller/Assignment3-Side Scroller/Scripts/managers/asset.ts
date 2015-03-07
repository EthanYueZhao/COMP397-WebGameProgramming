'use strict'
module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "ocean", src: "assets/images/ocean.gif" },
        { id: "engine", src: "assets/sounds/scavengers_music.mp3" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        //"images": ["assets/images/atlas.png"],
        //"frames": [
        //    [2, 2, 226, 178],
        //    [230, 2, 211, 69],
        //    [443, 69, 62, 63],
        //    [443, 2, 65, 65],
        //    [230, 73, 211, 69],
        //    [230, 144, 211, 69]
        //],
        "images": ["assets/images/Scavengers_SpriteSheet.png"],
        "frames": { width: 32, height: 32, count: 56, regX: 0, regY: 0 },
        "animations": {
            //"cloud": [0],
            "cloud": [19],
            "instructionsButton": [1],
            "island": [2],
            "plane": [0,5],
            "player": [0,5],
            "playButton": [4],
            "tryAgainButton": [5]
        }
    }
    //var spriteSheetData = {
    //    "images": ["assets/images/Scavengers_SpriteSheet.png"],
    //    "frames": { width: 32, height: 32, regX: 16, regY: 16 },
    //    "animations": {
    //        player:[0,5]
    //    }
    //}

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

    }
} 