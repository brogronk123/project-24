class Ground {
    constructor(){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(400,650,800,25,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        strokeWeight(3);
        fill("yellow");
        rect(400,650,800,25);
    }
}