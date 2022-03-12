class Form{
    constructor(){
        this.input=createInput("Player:")
        this.button=createButton("Play")
        this.wellcome=createElement("h3")
    }

hide(){
    this.input.hide();
    this.button.hide();
    this.wellcome.hide();
}

display(){
    var title= createElement("h2")
    title.html("Racing")
    title.position(width/2, height/12)

    
    this.input.position(width/2, height/4)
    
    this.button.position(width/2, height/2)
    
    
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
    player1.name=this.input.value();
    playerCount=+1;
    player1.index=playerCount
    player1.update();
    player1.updateCount(playerCount);
    this.wellcome.html("Wellcome to Racing "+ player1.name)
    this.wellcome.position(width/2, height/4)
    })
}
}