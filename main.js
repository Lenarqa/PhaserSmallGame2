console.log("Hello from main.js");

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    scene:{
        preload: preload,
        create: create,
        update: update
    }

};

var game = new Phaser.Game(config);

function preload ()
{
    //image
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');

    //spritesheet
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48});
}

function create ()
{
    this.add.image(400, 300, 'sky');
}

function update ()
{

}