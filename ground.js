class GROUND {
    constructor(x,y){

        var gr = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,400,20,gr);
        this.width = 400;
        this.height = 20;

        World.add(myworld,this.body)
    }


    muski(){
        fill("pink");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height) ; 
        
    }
}


