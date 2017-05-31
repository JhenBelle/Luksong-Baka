kill = {
    
    killRat:function (player,tinik){
        // bgSound.play();
       
       if(getData()<=Scores) {
        saveData(Scores);
      BestText = "Best: ";
        console.log("x");

    }
    else{
        console.log("x");
    }

    game._paused = true;
    gameOverText.text = "GAME OVER!\nRestart\nHigh Score: "+getData()+"\nScores: "+Scores;
    game.state.start(game.state.current);
    },
    killball:function (player,tinikk){
        // bgSound.play();
       
        if(getData()<=Scores) {
        saveData(Scores);
         BestText = "Best: ";
        console.log("x");

    }
    else{
        console.log("x");
    }

    game._paused = true;
    gameOverText.text = "GAME OVER!\nRestart\nHigh Score: "+getData()+"\nScores: "+Scores;
        game.state.start(game.state.current);
    },
    collectcoin:function (player, coin) {
    Scores += 10;
    coin.kill();
    if(getData()<=Scores) {
          saveData(Scores);
      BestText = "Best: "+Scores;
        console.log("x");
    }
    else{
        console.log("x");
    }

    scoreText.text = 'Scores: ' + Scores;
   bestText.text ='Best:' +getData();

   
    },
     saveData:function(Scores){
    localStorage.setItem("gameData",Scores);
    },

     getData:function(){
    return (localStorage.getItem("gameData") == null || localStorage.getItem("gameData") == "")?0:localStorage.getItem("gameData");
    }
}
    
