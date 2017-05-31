lose = {
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
    },
}