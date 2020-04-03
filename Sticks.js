class Sticks{
    constructor(x,y){
        var options={
            'friction':1000000.0,
            'gravity':10000000.0
        }
        this.body=Bodies.rectangle(x,y,5,40,options);
        this.width=5;
        this.height=40;
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("Brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}