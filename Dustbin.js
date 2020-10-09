class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        }
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        strokeWeight(3);
        fill("white");
        rect(this.x,this.y,this.width,this.height);
    }
}