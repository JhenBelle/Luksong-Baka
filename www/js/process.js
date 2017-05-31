var width = 800;
var height = 600;
var game = new Phaser.Game(width, height, Phaser.CANVAS, '');
var basicgame= function(){

}


var bgAudio;
var bgSound;
var audioLoop;
var bounds = 7995;
var cursors;
var keyboard;
var scoreText, gameOverText, bestText;
var fbg, fbg3, fbg4;
var player;
var rat;
var tinik;
var tiniks;
var seas;
var sea;
var ssea,sseas;
var block;
var blocks;
var killRat;
var btnplay;
var play;
var btnrestart;
var restart;
var btnpause;
var pause;
var btnUp;
var up;
var btnLeft;
var left;
var btnRight;
var right,score = 0, Scores=0;
var coin, coins;


basicgame.prototype = {
	preload:function() {
        game.input.maxPointers = 1;
	    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    game.scale.pageAlignHorizontally = true;
	    game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.scale.setScreenSize(true);


        game.load.image('bg', 'assets/Background.jpg');
        game.load.image('bg1', 'assets/Background.jpg');
        game.load.image('cow', 'assets/baka.png');
    	game.load.image('cow', 'assets/baka.png');
    game.load.image('sea', 'assets/sea.png');
        game.load.image('sea1', 'assets/sea1.png');
        game.load.image('block', 'assets/block.png');
    	
        game.load.spritesheet('right', 'assets/right.png', 60, 50);
        game.load.spritesheet('pause', 'assets/pause.png', 50, 50);
    	game.load.spritesheet('rat', 'assets/fafa.png', 60, 60);
	    // game.load.audio('bg-music', 'audio/L.mp3');
	    // game.load.audio('bgsound', 'audio/L.mp3');
	},

	create:function() {

            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.world.setBounds(0,0,bounds,0);
            game.add.image(0, 0, 'black');

            bg = game.add.tileSprite(0, game.height - game.cache .getImage("bg").height, bounds, game.cache.getImage("bg").height, 'bg');
            bg1 = game.add.tileSprite(0, game.height - game.cache .getImage("bg1").height, bounds, game.cache.getImage("bg1").height, 'bg1');
            // fbg3 = game.add.tileSprite(0, game.height - game.cache .getImage("fbg3").height, bounds, game.cache.getImage("fbg3").height, 'fbg3');
                


            player = game.add.sprite(70, game.world.height -50, 'rat');

            game.physics.arcade.enable(player);
            player.animations.add('left', [0,1,2], 9, true);
            player.animations.add('right', [2, 1, 0], 9, true);
            player.body.bounce.y = .7;
            player.body.gravity.y =350;
            player.body.collideWorldBounds = true;

            blocks = game.add.group();
            blocks.enableBody = true;
            block = blocks.create(3500, -8, 'block');
            block.body.immovable = true;
            block = blocks.create(3500, 505, 'block');
            block.body.immovable = true;

            sea1s = game.add.group();
            sea1s.enableBody = true;
            sea1 = sea1s.create(1500, 570, 'sea1');
            sea1.body.immovable = true;
            seas = game.add.group();
            seas.enableBody = true; 
            sea = seas.create(1500, 530, 'sea');
            sea.body.immovable = true;
            sea = seas.create(1500, 560, 'sea'); 
            
            cow = game.add.group();
            cow.enableBody = true; 
            cow = tinikks.create(300, 450, 'cow');
             cow = tinikks.create(750, 450, 'cow');
             cow.body.immovable = true;
             cow.body.immovable = true;
             cow = tinikks.create(1260, 450, 'cow'); 
             cow.body.immovable = true;

             cow = game.add.group();
             cow.enableBody = true; 
             cow = tiniks.create(550, 510, 'cow');
             cow.body.immovable = true;
             cow = tiniks.create(1000, 510, 'cow');
             cow.body.immovable = true;
         
           

            cursors = game.input.keyboard.createCursorKeys();
            game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);

        
            pause = game.add.button(745,5,"pause",process.btnpause);
            pause.fixedToCamera = true;
            right = game.add.button(700,520, 'right',process.btnRight);
            right.fixedToCamera = true;
            
            

           pause.events.onInputUp.add(function () {
                    pause.frame = 1;
                    game.paused = true;
                });
                    pause.frame = 0;
                game.input.onDown.add(unpause, self);
                function unpause(event){
                if(game.paused){
                    game.paused = false;
                    }
                    pause.frame = 0;
                }

        	 //    bgAudio = game.add.audio("bg-music");
        		// bgAudio.play();
          //       bgSound = game.add.audio("bgsound");
        		// audioLoop(3000);

            scoreText = game.add.text(20,40,"Score: 0",{fill:"black"});
            bestText = game.add.text(20,10,"Best:"+process.getData(),{fill:"black"});
            gameOverText = game.add.text(300,200 ,'', {fontSize: '32px', fill: 'black'});
            scoreText.fixedToCamera = true;
            bestText.fixedToCamera = true;
            gameOverText.fixedToCamera = true;
	},

	update:function() {
        game.physics.arcade.overlap(player, coins, process.collectcoin,  null, this);
        game.physics.arcade.overlap(player,tiniks, process.killRat,  null, this);
        game.physics.arcade.overlap(player,tinikks, process.killball,  null, this);
        game.physics.arcade.collide(player, tiniks);
        game.physics.arcade.collide(player, tinikks);
        game.physics.arcade.collide(player, blocks);
        game.physics.arcade.collide(player, sea1s);
        
       

         player.body.velocity.x = 70;

            // if (player.body.velocity.x === 0 || player.body.velocity === 0){

            // }
            // else if (cursors.right.isDown)
            // {
            //     player.animations.play('right');
               

            // }
            // else
            // {
            //     player.animations.stop();
            //     player.frame = 0;
            // }
            // if (cursors.up.isDown && player.body.touching.down)
            // {
            //     player.body.velocity.y = -900;
            //      player.body.velocity.x = 0;
               
            // }
    }
}   
game.state.add("gameplay", basicgame,true);