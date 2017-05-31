lose = {
	
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
}