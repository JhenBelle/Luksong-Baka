
var process = function(){
    "use strict"
    return{


    killRat:function (player,tinik){
        // bgSound.play();
       
       if(process.getData()<=Scores) {
        process.saveData(Scores);
      process.BestText = "Best: ";
        console.log("x");

    }
    else{
        console.log("x");
    }

    game._paused = true;
    gameOverText.text = "GAME OVER!!!\nTap to Restart\nHigh Score: "+process.getData()+"\nScores: "+Scores;
    game.state.start(game.state.current);
    },
    killball:function (player,tinikk){
        // bgSound.play();
       
        if(process.getData()<=Scores) {
        process.saveData(Scores);
         process.BestText = "Best: ";
        console.log("x");

    }
    else{
        console.log("x");
    }

    game._paused = true;
    gameOverText.text = "GAME OVER!!!\nTap to Restart\nHigh Score: "+process.getData()+"\nScores: "+Scores;
        game.state.start(game.state.current);
    },
    collectcoin:function (player, coin) {
    Scores += 10;
    coin.kill();
    if(process.getData()<=Scores) {
          process.saveData(Scores);
      process.BestText = "Best: "+Scores;
        console.log("x");
    }
    else{
        console.log("x");
    }

    scoreText.text = 'Scores: ' + Scores;
   bestText.text ='Best:' +process.getData();

   
    },
     saveData:function(Scores){
    localStorage.setItem("gameData",Scores);
    },

     getData:function(){
    return (localStorage.getItem("gameData") == null || localStorage.getItem("gameData") == "")?0:localStorage.getItem("gameData");
    },

    btnRight:function(){
        setTimeout(function(){
            right.frame = 1;
            player.animations.play('right');
            player.body.velocity.x = 600;
            player.body.velocity.y = 700;
          
            
             fbg.tilePosition.x -= 10;
             fbg4.tilePosition.x += 10;
             fbg3.tilePosition.x -= 10;
        },100);
            right.frame = 0;
    }
}
}();
	
