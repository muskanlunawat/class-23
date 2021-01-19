class BOX{
    constructor(x,y,w,h){
        var op = {
            restitution: 1
        }
        this.body = Bodies.rectangle(x,y,w,h,op);
        this.w=w;
        this.h=h;
        World.add(myworld,this.body);
    }

    display(){
        fill("purple");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }

}