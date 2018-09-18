// our game's configuration
var config = {
  type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
  width: 1040, // game width
  height: 740, // game height

  physics: {
      default: 'arcade',
      arcade: {
          debug: false
      }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var player;
var debug_text;
var scoreText;
// create the game, and pass it the configuration
var game = new Phaser.Game(config);

// load asset files for our game
function preload () {

  // load images
  this.load.image('background', 'assets/house.png');
  this.load.spritesheet('myrddin', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });

};

// executed once, after assets were loaded
function create() {

  // background
  var bg = this.add.image(0, 0, 'background');
  bg.setOrigin(0,0);

  // Player
  player = this.physics.add.sprite(350, this.sys.game.config.height / 2, 'myrddin');
  player.setCollideWorldBounds(true);

  //Score Text
  scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#002' });


};

// executed on every frame (60 times per second)
function update() {


   //  only move when you click
    if (game.input.activePointer.isDown)
    {
        //  400 is the speed it will move towards the mouse

        //player.setVelocityX(100);
        player.x = (game.input.activePointer.x);
        player.y = (game.input.activePointer.y);
        //player.y = 200;
    }
    else
    {
        player.setVelocityX(0);
    }
};
