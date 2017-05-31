play = {
	create:function(){
			fbg = game.add.tileSprite(0, game.height - game.cache .getImage("fbg").height, bounds, game.cache.getImage("fbg").height, 'fbg');
            fbg4 = game.add.tileSprite(0, game.height - game.cache .getImage("fbg4").height, bounds, game.cache.getImage("fbg4").height, 'fbg4');
            fbg3 = game.add.tileSprite(0, game.height - game.cache .getImage("fbg3").height, bounds, game.cache.getImage("fbg3").height, 'fbg3');
                

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
            
            tinikks = game.add.group();
            tinikks.enableBody = true; 
            tinikk = tinikks.create(300, 450, 'tinikk');
            tinikk.body.immovable = true;
            tinikk = tinikks.create(750, 450, 'tinikk');
            tinikk.body.immovable = true;
            tinikk = tinikks.create(1260, 450, 'tinikk'); 
            tinikk.body.immovable = true;

            tiniks = game.add.group();
            tiniks.enableBody = true; 
            tinik = tiniks.create(550, 510, 'tinik');
            tinik.body.immovable = true;
            tinik = tiniks.create(1000, 510, 'tinik');
            tinik.body.immovable = true;
         
            coins = game.add.group();
            coins.enableBody = true; 
            coin = coins.create(390, 510, 'coin');
            coin = coins.create(600, 510, 'coin');
            coin = coins.create(900, 510, 'coin');
            coin = coins.create(1150, 510, 'coin');
            coin = coins.create(1400, 510, 'coin');
          
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


            scoreText = game.add.text(20,40,"Score: 0",{fill:"magenta"});
            bestText = game.add.text(20,10,"Best: "+process.getData(),{fill:"magenta"});
            gameOverText = game.add.text(300,200 ,'', {fontSize: '32px', fill: 'blue'});
            scoreText.fixedToCamera = true;
            bestText.fixedToCamera = true;
            gameOverText.fixedToCamera = true;

        //         update:function() {

	},

	
         update:function() {
                    game.physics.arcade.overlap(player, coins, process.collectcoin,  null, this);
                    game.physics.arcade.overlap(player,tiniks, process.killRat,  null, this);
                    game.physics.arcade.overlap(player,tinikks,process.killball,  null, this);
                    game.physics.arcade.collide(player, tiniks);
                    game.physics.arcade.collide(player, tinikks);
                    game.physics.arcade.collide(player, blocks);
                    game.physics.arcade.collide(player, sea1s);
      if(keyboard.left.isDown){
        // x++;
        player.animations.play("left");
        player.body.velocity.x = -100;
    
        fbg.tilePosition.x -= 3;
        fbg4.tilePosition.x -= 0.2;
        fbg3.tilePosition.x += 0.3;
        
        // bg.frame = 0;
    }
    else if(keyboard.right.isDown){
        // x--;
        // bg.frame = 1;
        player.animations.play("right");
        player.body.velocity.x = 100;
        // player.body.velocity.y = 400;
         fbg.tilePosition.x -= 0.3;
        fbg4.tilePosition.x += 0.2;
        fbg3.tilePosition.x -= 0.3;
        }  
    else{
        player.body.velocity.x = 70;
        player.body.velocity.y = 700;
        player.animations.stop();
        fbg.tilePosition.x -= 3;
        fbg4.tilePosition.x -= 0.2;
        fbg3.tilePosition.x -= 0.3;
    }    
 }
};


    
