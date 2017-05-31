boot = {
create:function() {

            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.world.setBounds(0,0,bounds,0);
            game.add.image(0, 0, 'black');
			keyboard = game.input.keyboard.createCursorKeys();

			game.state.start("preload");
			console.log("x");

					},
				}