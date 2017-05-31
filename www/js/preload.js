preload = {
preload:function() {
        game.input.maxPointers = 1;
	    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    game.scale.pageAlignHorizontally = true;
	    game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.scale.setScreenSize(true);


        game.load.image('fbg', 'assets/fbgg.png');
        game.load.image('fbg4', 'assets/fb1.png');
        game.load.image('fbg3', 'assets/fbg3.png'); 
//        game.load.image('tinik', 'assets/tinik.png');
//    	game.load.image('tinikk', 'assets/tinikk.png');
//    	game.load.image('sea', 'assets/sea.png');
//        game.load.image('sea1', 'assets/sea1.png');
        game.load.image('block', 'assets/block.png');
//        game.load.image('coin', 'assets/coin.png');
    	game.load.image('bg', 'assets/bg2.png');

        game.load.spritesheet('right', 'assets/right.png', 60, 50);
        game.load.spritesheet('pause', 'assets/pause.png', 50, 50);
    	game.load.spritesheet('rat', 'assets/eggs.png', 60, 60);
                    },
        create:function(){
            game.state.start("menu");
        },
};