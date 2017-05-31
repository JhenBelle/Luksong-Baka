update = {
	update:function() {
        // game.physics.arcade.overlap(player, coins, collectcoin,  null, this);
        // game.physics.arcade.overlap(player,tiniks, killRat,  null, this);
        // game.physics.arcade.overlap(player,tinikks,killball,  null, this);
        game.physics.arcade.collide(player, tiniks);
        game.physics.arcade.collide(player, tinikks);
        game.physics.arcade.collide(player, blocks);
        game.physics.arcade.collide(player, sea1s);
        
  


}
           
    }