class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value", function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }
    async start(){
        if(gameState===0){
            player1=new Player();
            var playerCountRef=await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player1.getCount()
            }
            form1= new Form();
            form1.display();
        }
    }
    play(){
        form1.hide()
        textSize(30)
        text("Starting", width/2, height/8)
        Player.getPlayerInfo();
        if(allplayers!==undefined){
            var display_position=150
            for(var plr in allplayers){
                if(plr==="player"+ player1.index)
                    fill("red")
                else
                    fill("black")
                display_position+=20
                textSize(20)
                text(allplayers[plr].name + ": " + allplayers[plr].distance, width/2, display_position)
            }
        }
    if(keyIsDown(UP_ARROW) && player1.index!==null){
        player1.distance+=50
        player1.update();
    }
    }
}