 menu = {
 create:function(){
 			bg = game.add.image(0,0, "bg");
 			bg.scale.x = 1.60;
 			bg.scale.y = 1.75;

 			menuText = game.add.text(game.width/2-160, game.height/2,"Luksong-Tinik");
 				},
 update:function() {
 	     if (keyboard.right.isDown){
            game.state.start("play");
        }
        }
    };