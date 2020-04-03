class Ground{
    constructor(x,y,width,height){
        
        var options2={
            isStatic:true,
            'friction':100000.0,
            'gravity':1000000.0
        }
        
        this.body=Bodies.rectangle(x,y,width,height,options2);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x,pos.y,this.width,this.height);
    }
}